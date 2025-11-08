import { getBackendUrl } from "./config";

type PredictResponse = {
  success?: boolean;
  prediction?: string;
  confidence?: number;
  category?: string;
  landmarks?: number[];
  error?: string;
};

type ModelInfoResponse = {
  numbers: string[];
  alphabets: string[];
  daily_actions: string[];
  total_classes: number;
  error?: string;
};

export async function predictFromBase64Image(base64Image: string): Promise<PredictResponse> {
  try {
    const url = `${getBackendUrl()}/predict`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: base64Image }),
    });
    
    if (!res.ok) {
      return { 
        error: `Backend error: ${res.status} ${res.statusText}. Make sure backend server is running on port 8000.` 
      };
    }
    
    return (await res.json()) as PredictResponse;
  } catch (error: any) {
    return { 
      error: `Network error: ${error.message || 'Failed to connect to backend'}` 
    };
  }
}

export async function fetchModelInfo(): Promise<ModelInfoResponse> {
  try {
    const url = `${getBackendUrl()}/model-info`;
    const res = await fetch(url, { method: "GET" });
    
    if (!res.ok) {
      throw new Error(`Backend error: ${res.status} ${res.statusText}`);
    }
    
    return (await res.json()) as ModelInfoResponse;
  } catch (error: any) {
    throw new Error(`Failed to fetch model info: ${error.message || 'Backend not reachable'}`);
  }
}


