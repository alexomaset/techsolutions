"use client";

import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

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

const popUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15
    } 
  }
};

export default function Home() {
  const scrollRef = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });
  
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies.",
      icon: (
        <svg className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      icon: (
        <svg className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Digital Marketing",
      description: "Result-driven strategies to increase visibility and drive business growth.",
      icon: (
        <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      )
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <motion.section 
        ref={scrollRef}
        className="min-h-screen flex items-center relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>
        
        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-40 -z-10"></div>
        <div className="absolute top-1/3 -left-16 w-64 h-64 bg-purple-100 rounded-full opacity-30 -z-10"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-green-100 rounded-full opacity-40 -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInFromLeft}>
              <motion.div 
                className="inline-block px-4 py-1 mb-6 bg-blue-100 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-blue-800 font-semibold text-sm">Innovative Digital Solutions</span>
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Business with Technology
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                We provide cutting-edge digital solutions to help your business thrive in the modern digital landscape. From web development to marketing, we&apos;ve got you covered.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg inline-flex items-center">
                    Get Started
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/services" className="px-8 py-4 bg-white text-blue-600 border border-blue-200 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 shadow-lg">
                    Our Services
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInFromRight}
              className="relative"
            >
              <div className="relative h-[500px] w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-20">
                      <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4),_transparent_70%)]"></div>
                    </div>
                    <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white opacity-20"></div>
                    <div className="absolute bottom-0 left-0 h-96 w-1/2 rounded-tr-full bg-white opacity-10"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center p-10">
                    <div className="relative w-full max-w-md z-10">
                      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex space-x-2">
                            <div className="h-3 w-3 rounded-full bg-red-500"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                          </div>
                          <div className="h-4 w-24 bg-gray-200 rounded"></div>
                        </div>
                        <div className="space-y-3">
                          <div className="h-4 w-full bg-gray-200 rounded"></div>
                          <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                          <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
                        </div>
                        <div className="mt-6 flex justify-between">
                          <div className="h-8 w-24 bg-blue-100 rounded"></div>
                          <div className="h-8 w-16 bg-blue-500 rounded"></div>
                        </div>
                      </div>
                      
                      <div className="absolute top-24 -right-10 bg-white rounded-lg shadow-lg p-4 transform rotate-6">
                        <div className="h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center">
                          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="absolute -bottom-6 -left-6 bg-white rounded-full shadow-lg p-4 z-20">
                        <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="absolute -top-10 left-10 bg-white rounded-lg shadow-lg p-3 transform -rotate-12">
                        <div className="flex items-center space-x-2">
                          <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                          </div>
                          <div className="h-3 w-8 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="flex flex-col items-center">
            <p className="text-gray-600 mb-2">Scroll to explore</p>
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-700 text-sm font-semibold mb-4">
              Our Services
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-4xl font-bold text-gray-900 mb-6">
              What We Offer
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl text-gray-700">
              We provide a wide range of digital services to help businesses of all sizes succeed in the digital world.
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={popUp}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors inline-flex items-center group">
                  Learn More
                  <svg className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInFromLeft}
              >
                <div className="relative h-[500px] w-full">
                  <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2),_transparent_70%)]"></div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-white rounded-2xl overflow-hidden shadow-xl p-6">
                    <div className="h-full w-full bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div className="space-y-2">
                          <div className="h-4 w-3/4 bg-gray-200 rounded mx-auto"></div>
                          <div className="h-4 w-1/2 bg-gray-200 rounded mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
                    <div className="h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center">
                      <svg className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInFromRight}
              >
                <div className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-700 text-sm font-semibold mb-4">
                  About Us
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  We Build Digital Solutions That Power Your Business
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  TechSolutions is a team of passionate experts dedicated to helping businesses thrive in the digital age. With years of experience and a commitment to excellence, we deliver innovative solutions that drive results.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">Expert team with years of industry experience</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">Custom solutions tailored to your specific needs</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">Proven track record of successful projects</p>
                  </div>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/about" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg inline-flex items-center">
                    Learn More About Us
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={popUp}>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-lg opacity-80">Projects Completed</div>
            </motion.div>
            
            <motion.div variants={popUp}>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-80">Happy Clients</div>
            </motion.div>
            
            <motion.div variants={popUp}>
              <div className="text-4xl font-bold mb-2">12+</div>
              <div className="text-lg opacity-80">Team Members</div>
            </motion.div>
            
            <motion.div variants={popUp}>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-lg opacity-80">Years Experience</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center bg-gray-50 p-12 rounded-2xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Digital Journey?</h2>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              Contact us today to discuss your project and see how we can help your business succeed in the digital world.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg inline-flex items-center gap-2"
              >
                Get in Touch
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
