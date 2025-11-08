'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { predictFromBase64Image, fetchModelInfo } from '@/lib/api';
import Card from '@/components/Card';

const DetectPage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<string>('');
  const [confidence, setConfidence] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [modelSummary, setModelSummary] = useState<string>('');

  // Text-to-speech
  const speakText = useCallback((text: string) => {
    if ('speechSynthesis' in window && text && text !== 'No hand detected') {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // Slightly slower for clarity
      utterance.pitch = 1;
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  // Initialize camera
  useEffect(() => {
    let active = true;
    const init = async () => {
      try {
        console.log('Requesting camera access...');
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { 
            facingMode: 'user',
            width: { ideal: 1280 },
            height: { ideal: 720 }
          } 
        });
        
        console.log('Camera access granted!');
        if (!active) return;
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          
          // Wait for metadata to load
          videoRef.current.onloadedmetadata = async () => {
            console.log('Video metadata loaded');
            try {
              await videoRef.current?.play();
              console.log('Video playing!');
              setIsCameraReady(true);
              setIsDetecting(true);
            } catch (playError) {
              console.error('Error playing video:', playError);
              setError('Camera loaded but video failed to play. Try refreshing the page.');
            }
          };
        }
      } catch (e: any) {
        console.error('Camera error:', e);
        setError(e?.message || 'Unable to access camera. Please allow camera permissions and refresh the page.');
      }
    };
    init();
    return () => {
      active = false;
      const stream = videoRef.current?.srcObject as MediaStream | undefined;
      stream?.getTracks().forEach((t) => t.stop());
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      window.speechSynthesis.cancel();
    };
  }, []);

  // Load model info and test backend connection
  useEffect(() => {
    const loadInfo = async () => {
      try {
        const info = await fetchModelInfo();
        if ((info as any).error) {
          setError('Backend model error: ' + (info as any).error);
          return;
        }
        const total = info.total_classes;
        setModelSummary(`Model loaded with ${total} classes. Backend connected.`);
      } catch (e: any) {
        const errorMsg = e?.message || 'Unknown error';
        if (errorMsg.includes('fetch') || errorMsg.includes('Failed to fetch')) {
          setError('⚠️ Backend server not running! Please start the backend server on http://localhost:8000');
        } else {
          setError('Failed to connect to backend: ' + errorMsg);
        }
      }
    };
    loadInfo();
  }, []);

  // Auto-detection with interval
  useEffect(() => {
    if (!isDetecting || !isCameraReady || !videoRef.current || !canvasRef.current) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    let isMounted = true;
    let skipNext = false;

    const captureAndPredict = async () => {
      // Skip if already loading or component unmounted
      if (!isMounted || loading || skipNext) {
        skipNext = false;
        return;
      }

      skipNext = true;
      setLoading(true);
      setError('');
      
      try {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        if (!video || !canvas || video.readyState !== video.HAVE_ENOUGH_DATA) {
          skipNext = false;
          setLoading(false);
          return;
        }

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Canvas not supported');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const base64 = canvas.toDataURL('image/jpeg', 0.9);

        const res = await predictFromBase64Image(base64);
        
        if (!isMounted) return;
        
        if (res.error) {
          setError(res.error);
          // Check if it's a backend connection error
          if (res.error.includes('fetch') || res.error.includes('network') || res.error.includes('Failed to fetch')) {
            setError('Cannot connect to backend. Make sure the backend server is running on http://localhost:8000');
          }
        } else {
          const newPrediction = res.prediction || '';
          const newConfidence = typeof res.confidence === 'number' ? res.confidence : null;
          const newCategory = res.category || '';
          
          setPrediction(newPrediction);
          setConfidence(newConfidence);
          setCategory(newCategory);
        }
      } catch (e: any) {
        if (!isMounted) return;
        const errorMsg = e?.message || 'Prediction failed';
        if (errorMsg.includes('fetch') || errorMsg.includes('NetworkError') || errorMsg.includes('Failed to fetch')) {
          setError('Backend server not reachable. Please ensure backend server is running on http://localhost:8000');
        } else {
          setError(errorMsg);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
          skipNext = false;
        }
      }
    };

    // Start auto-detection every 1.5 seconds
    intervalRef.current = setInterval(() => {
      captureAndPredict();
    }, 1500);
    
    // Run immediately once
    captureAndPredict();

    return () => {
      isMounted = false;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isDetecting, isCameraReady]);

  const toggleDetection = () => {
    setIsDetecting(!isDetecting);
  };

  const handleSpeak = () => {
    if (prediction && prediction !== 'No hand detected') {
      speakText(prediction);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-white">Live Detection</h1>
          <p className="text-slate-300 mt-2">
            {modelSummary || 'Camera will automatically detect hand signs in real-time.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Camera */}
          <Card className="p-4 lg:p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Camera Feed</h2>
            <div className="relative bg-black rounded-xl overflow-hidden" style={{ minHeight: '400px' }}>
              <video 
                ref={videoRef} 
                className="w-full h-full object-cover rounded-xl"
                style={{ display: isCameraReady ? 'block' : 'none', minHeight: '400px' }}
                playsInline 
                muted 
                autoPlay
              />
              {!isCameraReady && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="text-slate-400 text-center p-8">
                    <div className="text-lg mb-2">🎥 Initializing camera...</div>
                    <div className="text-sm">Please allow camera access</div>
                  </div>
                </div>
              )}
              {loading && isCameraReady && (
                <div className="absolute top-4 right-4 bg-blue-500/80 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  Detecting...
                </div>
              )}
            </div>
            <div className="mt-4 flex gap-3">
              <button
                onClick={toggleDetection}
                disabled={!isCameraReady}
                className={`px-5 py-2 rounded-lg font-semibold transition-all ${
                  isDetecting
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-green-500 hover:bg-green-600 text-white'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isDetecting ? '⏸ Pause Detection' : '▶ Start Detection'}
              </button>
            </div>
            {error && (
              <div className="mt-3 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
                {error}
              </div>
            )}
            <canvas ref={canvasRef} className="hidden" />
          </Card>

          {/* Right Side - Results */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Prediction Results</h2>
            
            <div className="space-y-6">
              {/* Prediction Display */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="text-sm text-slate-400 mb-2 uppercase tracking-wide">Detected Sign</div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-4 min-h-[3rem]">
                  {prediction || '—'}
                </div>
                {prediction && prediction !== 'No hand detected' && (
                  <button
                    onClick={handleSpeak}
                    className="mt-4 w-full px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <span className="text-xl">🔊</span>
                    <span>Speak Prediction</span>
                  </button>
                )}
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-xs text-slate-400 mb-1 uppercase tracking-wide">Category</div>
                  <div className="text-lg font-semibold text-white">
                    {category || '—'}
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-xs text-slate-400 mb-1 uppercase tracking-wide">Confidence</div>
                  <div className="text-lg font-semibold text-white">
                    {confidence !== null ? `${(confidence * 100).toFixed(1)}%` : '—'}
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Detection Status</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    isDetecting 
                      ? 'bg-green-500/20 text-green-300' 
                      : 'bg-slate-500/20 text-slate-300'
                  }`}>
                    {isDetecting ? 'Active' : 'Paused'}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetectPage;
