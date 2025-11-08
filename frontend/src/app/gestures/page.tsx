'use client';

import { motion } from 'framer-motion';
import Card from '@/components/Card';
import Link from 'next/link';

const GesturesPage = () => {
  const handleCardClick = () => {
    // Navigate to detect page when card is clicked
  };

  const gestureTypes = [
    {
      title: 'Static Gestures',
      description: 'Train your model to recognize fixed hand positions and poses. Perfect for sign language, pointing, and symbolic gestures.',
      icon: '✋',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      color: 'from-blue-500 to-blue-600',
      features: ['Hand positions', 'Sign language', 'Symbolic gestures', 'Pointing directions']
    },
    {
      title: 'Dynamic Gestures',
      description: 'Capture movement patterns and sequences. Ideal for gestures that involve motion like waving, drawing shapes, or dance moves.',
      icon: '👋',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      color: 'from-green-500 to-green-600',
      features: ['Movement patterns', 'Waving gestures', 'Drawing shapes', 'Dance moves']
    },
    {
      title: 'Both',
      description: 'Combine static and dynamic gestures for comprehensive recognition. Create complex gesture systems with multiple interaction modes.',
      icon: '🤸',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      color: 'from-purple-500 to-purple-600',
      features: ['Mixed gestures', 'Complex interactions', 'Multi-modal input', 'Advanced recognition']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Choose Gesture Type
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Select the type of gestures you want to train. Each option offers different capabilities 
            and use cases for your machine learning model.
          </p>
        </motion.div>

        {/* Gesture Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {gestureTypes.map((gesture, index) => (
            <motion.div
              key={gesture.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={handleCardClick}
              className="cursor-pointer"
            >
              <Card className="h-full overflow-hidden group">
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={gesture.image}
                    alt={gesture.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${gesture.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <span className="text-3xl">{gesture.icon}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {gesture.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {gesture.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-white text-sm uppercase tracking-wider">
                      Features
                    </h4>
                    <ul className="space-y-1">
                      {gesture.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-300">
                          <div className={`w-2 h-2 bg-gradient-to-r ${gesture.color} rounded-full mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link href="/detect" className={`block w-full py-3 bg-gradient-to-r ${gesture.color} text-white rounded-xl font-semibold text-center group-hover:shadow-lg transition-all duration-300 ring-glow`}>
                    Get Started
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass bg-white/5 rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-slate-300 mb-6">
              Not sure which gesture type is right for your project? Check out our comprehensive guide 
              to understand the differences and find the perfect fit for your needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
            >
              View Guide
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GesturesPage;
