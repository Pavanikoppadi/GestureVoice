'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import handSignImg from './hand sign.png';
import Link from 'next/link';
import Card from '@/components/Card';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Hand Sign Recognition (text left, image right) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(107,91,255,0.3),transparent_60%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div initial="initial" animate="animate" variants={staggerChildren} className="text-left">
              {/* removed chip */}
              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-pink-300 to-orange-300">
                Learn. Express. Connect.
                </span>
            </motion.h1>
              <motion.p variants={fadeInUp} className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl">
                It has been shown that learning sign language can improve thinking power and
                help you communicate with over 72 million signers worldwide. Try our tool to
                learn, practice, and have fun—while building hand‑sign models that speak for you.
            </motion.p>
              <motion.div variants={fadeInUp} className="mt-8 flex gap-4">
              <Link href="/detect" className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold ring-glow">
                Get Started →
              </Link>
              <Link href="/guide" className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/5 text-slate-200 border border-white/10 hover:bg-white/10 transition">
                  Learn more
              </Link>
              </motion.div>
            </motion.div>

            {/* Right: Image with corner brackets */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <div className="relative w-full max-w-[640px]">
                {/* Corner brackets */}
                <span className="pointer-events-none absolute -top-3 -left-3 h-8 w-8 border-t-2 border-l-2 border-white/60 rounded-tl-sm" />
                <span className="pointer-events-none absolute -top-3 -right-3 h-8 w-8 border-t-2 border-r-2 border-white/60 rounded-tr-sm" />
                <span className="pointer-events-none absolute -bottom-3 -left-3 h-8 w-8 border-b-2 border-l-2 border-white/60 rounded-bl-sm" />
                <span className="pointer-events-none absolute -bottom-3 -right-3 h-8 w-8 border-b-2 border-r-2 border-white/60 rounded-br-sm" />

                <Image
                  src={handSignImg}
                  alt="Hand sign recognition illustration"
                  className="w-full h-auto max-h-[440px] object-contain rounded-2xl shadow-xl"
                  priority
                />
              </div>
          </motion.div>
          </div>
        </div>
      </section>


      {/* What is Sign Language */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
          >
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">What is Sign Language?</h2>
              <p className="text-slate-300 text-lg">
                Sign Language is a visual language using hand gestures, facial expressions, and body movements to
                communicate. Recognized as an official language in many countries, it is primarily used by people who
                are deaf or hard of hearing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Learn', text: 'Start with basics: alphabets and common words from our Guide.' },
                { title: 'Practice', text: 'Use the Detect section and practice until the model recognizes it.' },
                { title: 'Test', text: 'Challenge yourself: perform signs without the guide and get predictions.' },
              ].map((item, i) => (
                <Card key={item.title} className="p-6 glass">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.text}</p>
                </Card>
            ))}
          </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works! */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Detect',
                text: 'Allow camera access and position your hand in frame until it’s detected.',
              },
              {
                title: 'Predict',
                text: 'Make a sign; the built‑in model analyzes your hand and predicts the class.',
              },
              {
                title: 'Communicate',
                text: 'See the recognized sign instantly and use it to communicate across audiences.',
              },
            ].map((item) => (
              <Card key={item.title} className="p-6 glass">
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm">{item.text}</p>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 glass flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Get Started and Try the Model</h3>
              <p className="text-slate-300">Jump in and try live detection with your own hands—no setup required.</p>
            </div>
            <Link href="/detect" className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold ring-glow">Try Now!</Link>
          </Card>
        </div>
      </section>

      {/* Feedbacks */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: 'This tool helped my students practice signs independently and confidently.',
                name: 'Special Educator',
              },
              {
                quote: 'Fast to learn, easy to try—our team loved prototyping accessibility ideas.',
                name: 'UX Researcher',
              },
              {
                quote: 'Feels empowering to communicate more fluidly using signs and speech.',
                name: 'Parent of HoH child',
              },
            ].map((f, i) => (
              <Card key={i} className="p-6 glass">
                <p className="text-slate-200 mb-3">“{f.quote}”</p>
                <div className="text-slate-400 text-sm">— {f.name}</div>
                </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
