import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const statAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 } 
  }
};

const numberCounter = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      duration: 0.8,
      ease: "easeOut" 
    }
  }
};

const HeroSection = () => {
  const scrollRef = useRef(null);

  return (
    <motion.section 
      ref={scrollRef}
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      style={{
        backgroundImage: `url('/background.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 via-yellow-400/30 to-yellow-300/30 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          variants={fadeInFromLeft}
        >
          <motion.div 
            className="inline-block px-4 py-1 mb-6 bg-yellow-500 text-gray-900 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-semibold text-sm">Innovative Tech Solutions</span>
          </motion.div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with <span className="text-yellow-500">Technology</span>
          </h1>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            We deliver cutting-edge technology solutions that drive innovation, efficiency, and growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-4 bg-yellow-500 text-gray-900 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300 shadow-lg inline-flex items-center">
                Get Started
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/services" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition duration-300 shadow-lg">
                Our Solutions
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Navro-style Our Platform section */}
        <motion.div 
          className="mt-20"
          variants={fadeInFromRight}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <motion.h3 
                className="text-2xl font-bold text-white mb-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Our Platform
              </motion.h3>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-yellow-500"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Global Technology Solutions
              </motion.h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
                variants={statAnimation}
              >
                <motion.div 
                  className="text-5xl font-bold text-yellow-500 mb-2"
                  variants={numberCounter}
                >
                  100+
                </motion.div>
                <div className="text-white text-lg">
                  Enterprise Solutions Delivered
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
                variants={statAnimation}
              >
                <motion.div 
                  className="text-5xl font-bold text-yellow-500 mb-2"
                  variants={numberCounter}
                >
                  50+
                </motion.div>
                <div className="text-white text-lg">
                  Technological Integrations
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
                variants={statAnimation}
              >
                <motion.div 
                  className="text-5xl font-bold text-yellow-500 mb-2"
                  variants={numberCounter}
                >
                  24/7
                </motion.div>
                <div className="text-white text-lg">
                  Technical Support Available
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection; 