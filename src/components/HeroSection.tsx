import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import React from 'react';

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
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.8,
      ease: "easeOut" 
    }
  }
};

// New animation variants
const floatingAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  }
};

const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  }
};

const rotateAnimation = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const glowingText = {
  animate: {
    textShadow: [
      "0 0 5px rgba(255,255,255,0.5)",
      "0 0 20px rgba(255,255,255,0.8)",
      "0 0 5px rgba(255,255,255,0.5)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  }
};

/* Unused animation - commenting out to fix build error
const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
    }
  }
};
*/

// Define Particle interface closer to usage
interface Particle {
  id: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  left: string;
  top: string;
  xTarget: number; // Add target x for animation
}

interface FloatingParticleProps {
  size: number;
  color: string;
  delay: number;
  duration: number;
  left: string;
  top: string;
  xTarget: number;
}

// Floating particle component
const FloatingParticle = ({ size, color, delay, duration, left, top, xTarget }: FloatingParticleProps) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{ 
        width: size, 
        height: size, 
        backgroundColor: color,
        left: left,
        top: top,
        filter: 'blur(1px)'
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 0.7, 0],
        scale: [0, 1, 0.5],
        y: [0, -100],
        x: [0, xTarget]
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2
      }}
    />
  );
};

/* Unused interface and component - commenting out to fix build errors
interface AnimatedLetterProps {
  letter: string;
  index: number;
}

// Animated letter component
const AnimatedLetter = ({ letter, index }: AnimatedLetterProps) => {
  return (
    <motion.span
      className="inline-block"
      variants={letterAnimation}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.04 }}
    >
      {letter}
    </motion.span>
  );
};

interface AnimatedTitleProps {
  text: string;
  className?: string;
}

// Animated title component
const AnimatedTitle = ({ text, className }: AnimatedTitleProps) => {
  return (
    <h1 className={className}>
      {text.split('').map((letter: string, index: number) => (
        <AnimatedLetter 
          key={index} 
          letter={letter} 
          index={index} 
        />
      ))}
    </h1>
  );
};
*/

const HeroSection = () => {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);
  const statRef = useRef(null);
  const isInView = useInView(statRef, { once: false });
  const [counters, setCounters] = useState([0, 0, 24]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  
  // Parallax effect for background
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 100]);

  // Generate particles in useEffect to avoid hydration mismatch
  useEffect(() => {
    const particleCount = 20;
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 10 + 5,
      color: i % 3 === 0 ? 'rgba(234, 179, 8, 0.6)' : 'rgba(255, 255, 255, 0.4)',
      delay: Math.random() * 2,
      duration: Math.random() * 5 + 3,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      xTarget: Math.random() > 0.5 ? 20 : -20
    }));
    setParticles(newParticles);
  }, []);

  // Counter animation
  useEffect(() => {
    if (isInView && !hasAnimated) {
      const targetValues = [100, 50, 24];
      const duration = 2000;
      const frameRate = 30;
      const frameDuration = duration / frameRate;
      
      const incrementValues = targetValues.map(val => val / frameRate);
      
      let frame = 0;
      
      const timer = setInterval(() => {
        frame++;
        
        if (frame <= frameRate) {
          setCounters(prev => 
            prev.map((val, i) => {
              const newVal = Math.min(val + incrementValues[i], targetValues[i]);
              return i === 2 ? targetValues[i] : Math.floor(newVal);
            })
          );
        } else {
          clearInterval(timer);
          setHasAnimated(true);
        }
      }, frameDuration);
      
      return () => clearInterval(timer);
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.section 
      ref={scrollRef}
      className="min-h-screen flex items-center relative overflow-hidden pt-20 mb-16"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      style={{
        backgroundImage: `url('/background.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        y: backgroundY
      }}
    >
      {/* Background overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>
      
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 via-yellow-400/30 to-yellow-300/30 -z-10"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      ></motion.div>
      
      {/* Floating particles */}
      {particles.map(particle => (
        <FloatingParticle 
          key={particle.id}
          size={particle.size}
          color={particle.color}
          delay={particle.delay}
          duration={particle.duration}
          left={particle.left}
          top={particle.top}
          xTarget={particle.xTarget}
        />
      ))}
      
      {/* Rotating circle accent */}
      <motion.div 
        className="absolute top-1/4 -right-20 w-80 h-80 rounded-full border-2 border-yellow-500/30 -z-5"
        variants={rotateAnimation}
        animate="animate"
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 -left-40 w-96 h-96 rounded-full border-2 border-white/20 -z-5"
        variants={rotateAnimation}
        animate="animate"
        style={{ rotateZ: 45 }}
      ></motion.div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          variants={fadeInFromLeft}
        >
          <motion.div
            className="inline-block px-4 py-1 mb-6 bg-yellow-500 text-gray-900 rounded-full overflow-hidden relative"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.span 
              className="font-semibold text-sm block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1 }}
            >
              Innovative Tech Solutions
            </motion.span>
          </motion.div>
          
          <div ref={titleRef} className="overflow-hidden">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <motion.span
                className="inline-block"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Transform Your Business with{" "}
              </motion.span>{" "}
              <motion.span
                className="text-yellow-500 inline-block"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                variants={{
                  animate: {
                    textShadow: [
                      "0 0 4px rgba(255,255,255,0.1)",
                      "0 0 8px rgba(255,255,255,0.3)", 
                      "0 0 12px rgba(255,255,255,0.5)",
                      "0 0 8px rgba(255,255,255,0.3)",
                      "0 0 4px rgba(255,255,255,0.1)"
                    ],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "linear"
                    }
                  }
                }}
              >
                Technology
              </motion.span>
            </h1>
          </div>
          
          <motion.p 
            className="text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            We deliver cutting-edge technology solutions that drive innovation, efficiency, and growth for your business.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <Link href="/contact" className="px-8 py-4 bg-yellow-500 text-gray-900 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300 shadow-lg inline-flex items-center relative overflow-hidden group">
                <span className="relative z-10">Get Started</span>
                <motion.span 
                  className="absolute inset-0 bg-yellow-600 z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
                <motion.svg 
                  className="ml-2 h-5 w-5 relative z-10"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </Link>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <Link href="/services" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition duration-300 shadow-lg relative overflow-hidden group">
                <span className="relative z-10">Our Solutions</span>
                <motion.span 
                  className="absolute inset-0 bg-white/20 z-0"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Navro-style Our Platform section with enhanced animations */}
        <motion.div 
          className="mt-20 relative"
          variants={fadeInFromRight}
          ref={statRef}
        >
          {/* Decorative elements */}
          <motion.div 
            className="absolute -top-10 left-1/4 w-16 h-16 rounded-full bg-yellow-500/20"
            variants={pulseAnimation}
            animate="animate"
          ></motion.div>
          
          <motion.div 
            className="absolute top-40 right-10 w-8 h-8 rounded-full bg-yellow-500/30"
            variants={floatingAnimation}
            animate="animate"
          ></motion.div>
          
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <motion.h3 
                className="text-2xl font-bold text-white mb-1"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Our Platform
              </motion.h3>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-yellow-500"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={glowingText}
                whileInView="animate"
              >
                Global Technology Solutions
              </motion.h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group"
                variants={statAnimation}
                whileHover={{
                  boxShadow: "0 0 20px rgba(234, 179, 8, 0.3)"
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
                
                <motion.div 
                  className="text-5xl font-bold text-yellow-500 mb-2 relative z-10"
                  variants={numberCounter}
                >
                  {counters[0]}+
                </motion.div>
                <div className="text-white text-lg relative z-10">
                  Enterprise Solutions Delivered
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group"
                variants={statAnimation}
                whileHover={{
                  boxShadow: "0 0 20px rgba(234, 179, 8, 0.3)"
                }}
                transition={{ delay: 0.2 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
                
                <motion.div 
                  className="text-5xl font-bold text-yellow-500 mb-2 relative z-10"
                  variants={numberCounter}
                >
                  {counters[1]}+
                </motion.div>
                <div className="text-white text-lg relative z-10">
                  Technological Integrations
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group"
                variants={statAnimation}
                whileHover={{
                  boxShadow: "0 0 20px rgba(234, 179, 8, 0.3)"
                }}
                transition={{ delay: 0.4 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent z-0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
                
                <motion.div 
                  className="text-5xl font-bold text-yellow-500 mb-2 relative z-10"
                  variants={numberCounter}
                >
                  {counters[2]}/7
                </motion.div>
                <div className="text-white text-lg relative z-10">
                  Technical Support Available
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* New feature highlight section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 relative overflow-hidden">
            <motion.div 
              className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-yellow-500/20"
              variants={pulseAnimation}
              animate="animate"
            ></motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  {/* Text Content */}
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
    transition={{ duration: 0.6, delayChildren: 0.2, staggerChildren: 0.1 }}
  >
    <motion.h3
      className="text-2xl font-bold text-yellow-500 mb-4"
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.4 }}
    >
      Next-Generation Technology
    </motion.h3>

    <motion.p
      className="text-white text-lg mb-6"
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      Our advanced platform seamlessly integrates with your existing infrastructure,
      providing powerful tools and insights to accelerate your business growth.
    </motion.p>

    <motion.div
      className="flex space-x-4"
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <div className="flex items-center">
        <motion.div
          className="w-5 h-5 bg-yellow-500 rounded-full mr-2 cursor-pointer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        ></motion.div>
        <span className="text-white">AI-Powered</span>
      </div>

      <div className="flex items-center">
        <motion.div
          className="w-5 h-5 bg-yellow-500 rounded-full mr-2 cursor-pointer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        ></motion.div>
        <span className="text-white">Cloud-Native</span>
      </div>

      <div className="flex items-center">
        <motion.div
          className="w-5 h-5 bg-yellow-500 rounded-full mr-2 cursor-pointer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        ></motion.div>
        <span className="text-white">Scalable</span>
      </div>
    </motion.div>
  </motion.div>

  {/* Image/Icon Section */}
  <motion.div
    className="relative h-64 flex justify-center items-center"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.5 }}
  >
    <motion.div
      className="absolute inset-0 rounded-xl bg-gradient-to-br from-yellow-500/30 to-yellow-800/30 flex items-center justify-center"
      variants={floatingAnimation}
      animate="animate"
    >
      <motion.div
        className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center cursor-pointer"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <motion.svg
          className="w-12 h-12 text-gray-900"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: isInView ? 360 : 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.2 }}
        >
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          ></path>
        </motion.svg>
      </motion.div>
    </motion.div>
  </motion.div>
</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;