"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

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

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeIn} className="text-5xl font-bold text-gray-900 mb-6">About TechSolutions</motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-gray-700 mb-10 leading-relaxed">
              We are a team of passionate professionals dedicated to delivering exceptional digital solutions that help businesses thrive in the digital landscape.
            </motion.p>
            <motion.div variants={fadeIn}>
              <div className="flex justify-center space-x-4">
                <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
                <div className="h-1 w-10 bg-blue-400 rounded-full"></div>
                <div className="h-1 w-5 bg-blue-300 rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInFromLeft}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Founded with a vision to bridge the gap between technology and business success, TechSolutions started as a small team of tech enthusiasts committed to helping local businesses establish their digital presence.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Over the years, we&apos;ve grown into a full-service digital agency, expanding our expertise across web development, social media marketing, graphic design, and software solutions. Our growth has been fueled by our dedication to client success and our commitment to staying at the forefront of technological innovations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, we take pride in being trusted partners to businesses of all sizes, helping them navigate the digital landscape with confidence and achieve sustainable growth through technology.
                </p>
              </motion.div>
              <motion.div
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInFromRight}
              >
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-blue-500 to-blue-700">
                  <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white"></div>
                    <div className="absolute top-40 right-10 h-40 w-40 rounded-full bg-white"></div>
                    <div className="absolute bottom-10 left-20 h-32 w-32 rounded-full bg-white"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs text-center transform hover:scale-105 transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
                      <p className="text-gray-700">
                        To empower businesses with innovative digital solutions that drive growth, enhance visibility, and create meaningful connections with their audience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-5 -right-5 h-20 w-20 bg-yellow-400 rounded-lg transform rotate-12"></div>
                <div className="absolute -top-5 -left-5 h-16 w-16 bg-blue-200 rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that guide our work and define our company culture
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-blue-600"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Integrity</h3>
                <p className="text-gray-700 text-center">
                  We uphold the highest standards of honesty and transparency in all our client relationships and business practices.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-green-600"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Innovation</h3>
                <p className="text-gray-700 text-center">
                  We continuously explore emerging technologies and creative approaches to deliver cutting-edge solutions that give our clients a competitive edge.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-purple-600"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Client Partnership</h3>
                <p className="text-gray-700 text-center">
                  We view ourselves as an extension of our clients&apos; teams, deeply investing in understanding their business and contributing to their long-term success.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how our team can help bring your digital vision to life.
            </p>
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
        </div>
      </section>
    </div>
  );
} 