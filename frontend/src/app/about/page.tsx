'use client';

import { motion } from 'framer-motion';
import Card from '@/components/Card';

const AboutPage = () => {
  const values = [
    {
      icon: '🌍',
      title: 'Accessibility',
      description: 'Making AI and machine learning accessible to everyone, regardless of technical background or coding experience.'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Pushing the boundaries of what\'s possible with gesture recognition and human-computer interaction.'
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'Building a supportive community where creators can share knowledge and collaborate on projects.'
    },
    {
      icon: '🎯',
      title: 'Simplicity',
      description: 'Complex technology made simple through intuitive design and user-friendly interfaces.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      description: 'AI researcher with 10+ years experience in computer vision and machine learning.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      description: 'Full-stack engineer passionate about democratizing technology and creating inclusive solutions.'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Research',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      description: 'Neuroscience PhD specializing in human-computer interaction and gesture recognition.'
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About GestureVoice — Accessible Sign Language AI
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We build inclusive, AI‑powered tools that help Deaf, hard‑of‑hearing, and non‑verbal people
            communicate clearly—through sign recognition, fingerspelling support, and clean, human‑centred design.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Technology should remove barriers—not create them. GestureVoice exists to make visual
                communication effortless and respectful, with AI that understands hands, expressions,
                and context.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                We focus on practical, beginner‑friendly tools for learning and using sign language:
                accessible guides, fingerspelling aids, and gesture recognition that works in real life.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Accessible AI for Everyone</h3>
                  <p className="text-slate-300">Clear UI, no coding required, privacy‑conscious by design</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-300">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Meet Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-6 text-center overflow-hidden">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-slate-300 text-sm">
                    {member.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  GestureVoice began with a simple classroom translation need: make everyday interactions
                  easier for Deaf and non‑verbal students. That challenge grew into a platform focused on
                  clarity, dignity, and design.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  We collaborate with educators, interpreters, and community members to build tools that
                  work beyond demos—supporting learning, conversations, and accessibility in real spaces.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Today, creators use GestureVoice to learn signs, practice fingerspelling, and prototype
                  inclusive apps with modern, approachable UI.
                </p>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Innovation and technology"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 lg:p-12 text-white ring-glow">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Learn and Build?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Explore the guide, practice the alphabet and numbers, and try simple sign‑aware demos.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Open the Guide
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
