'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      description: 'Get in touch with our team',
      value: 'hello@gesturevoice.com'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Chat with our support team',
      value: 'Available 24/7'
    },
    {
      icon: '📞',
      title: 'Phone',
      description: 'Speak with our experts',
      value: '+1 (555) 123-4567'
    },
    {
      icon: '📍',
      title: 'Office',
      description: 'Visit our headquarters',
      value: 'San Francisco, CA'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Contact Us — Accessibility First
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Questions about sign language, fingerspelling practice, or accessible UI? We&apos;re here to help.
            Send a message and we&apos;ll get back soon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 shadow-2xl border border-white/10 bg-white/5">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-200 mb-2">
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-white placeholder:text-slate-400"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-white placeholder:text-slate-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-200 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none text-white placeholder:text-slate-400"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 ring-glow"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass rounded-2xl p-6 shadow-lg border border-white/10 hover:shadow-xl transition-all duration-300 bg-white/5"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{info.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        {info.title}
                      </h3>
                      <p className="text-slate-300 mb-2">
                        {info.description}
                      </p>
                      <p className="text-indigo-400 font-semibold">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="glass rounded-2xl p-6 shadow-lg border border-white/10 bg-white/5"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    How accurate is the gesture recognition?
                  </h4>
                  <p className="text-slate-300 text-sm">
                    Our models achieve 95%+ accuracy with proper training data.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Can I use GestureVoice for commercial projects?
                  </h4>
                  <p className="text-slate-300 text-sm">
                    Yes! We offer flexible licensing options for commercial use.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    What file formats are supported?
                  </h4>
                  <p className="text-slate-300 text-sm">
                    We support JPG, PNG, MP4, and most common audio formats.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="glass rounded-2xl p-6 shadow-lg border border-white/10 bg-white/5"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {[
                  { name: 'Twitter', icon: '🐦', color: 'from-blue-400 to-blue-500' },
                  { name: 'GitHub', icon: '💻', color: 'from-gray-600 to-gray-700' },
                  { name: 'LinkedIn', icon: '💼', color: 'from-blue-600 to-blue-700' },
                  { name: 'Discord', icon: '🎮', color: 'from-purple-500 to-purple-600' }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
