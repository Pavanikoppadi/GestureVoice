'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    { name: 'GitHub', href: '#', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22' },
    { name: 'LinkedIn', href: '#', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 100 4 2 2 0 000-4z' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-2xl font-bold text-gray-100">GestureVoice</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Train a computer to recognize your own images, sounds, & poses. 
              Create machine learning models with no coding required.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/gestures" className="text-gray-400 hover:text-gray-200 text-sm transition-colors">Get Started</a></li>
              <li><a href="/guide" className="text-gray-400 hover:text-gray-200 text-sm transition-colors">Guide</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-gray-200 text-sm transition-colors">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-gray-200 text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-100 uppercase tracking-wider">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 GestureVoice. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-200 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-gray-200 text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
