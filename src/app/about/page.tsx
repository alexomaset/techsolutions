"use client";

import Image from 'next/image';
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
                  Over the years, we've grown into a full-service digital agency, expanding our expertise across web development, social media marketing, graphic design, and software solutions. Our growth has been fueled by our dedication to client success and our commitment to staying at the forefront of technological innovations.
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
                  We view ourselves as an extension of our clients' teams, deeply investing in understanding their business and contributing to their long-term success.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Team</h2>
              <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
                Meet the talented professionals who make our success possible.
              </p>
              <div className="flex justify-center space-x-4 mb-8">
                <div className="h-1 w-5 bg-blue-300 rounded-full"></div>
                <div className="h-1 w-10 bg-blue-400 rounded-full"></div>
                <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <motion.div
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-64 bg-gradient-to-r from-blue-500 to-blue-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex space-x-3">
                      <a href="#" className="h-8 w-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30">
                        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                        </svg>
                      </a>
                      <a href="#" className="h-8 w-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30">
                        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a href="#" className="h-8 w-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30">
                        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">John Doe</h3>
                  <p className="text-blue-600 font-medium mb-3">Founder & CEO</p>
                  <p className="text-gray-700 mb-4">
                    With over 15 years of experience in tech and digital marketing, John leads our strategic vision and client relationships.
                  </p>
                </div>
              </motion.div>
              
              {/* Team Member 2 */}
              <motion.div
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-64 bg-gradient-to-r from-purple-500 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex space-x-3">
                      <a href="#" className="h-8 w-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30">
                        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                        </svg>
                      </a>
                      <a href="#" className="h-8 w-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30">
                        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a href="#" className="h-8 w-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30">
                        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Jane Smith</h3>
                  <p className="text-purple-600 font-medium mb-3">Lead Web Developer</p>
                  <p className="text-gray-700 mb-4">
                    Jane brings technical excellence and creative problem-solving to every project, specializing in responsive and performant websites.
                  </p>
                </div>
              </motion.div>
              
              {/* Team Member 3 */}
              <motion.div
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeIn}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-64 bg-gradient-to-r from-green-500 to-green-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex space-x-3">
                      <a href="#" className="h-8 w-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30">
                        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                        </svg>
                      </a>
                      <a href="#" className="h-8 w-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30">
                        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a href="#" className="h-8 w-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30">
                        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.7 3H4.3C3.582 3 3 3.582 3 4.3v15.4c0 .718.582 1.3 1.3 1.3h15.4c.718 0 1.3-.582 1.3-1.3V4.3c0-.718-.582-1.3-1.3-1.3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Michael Johnson</h3>
                  <p className="text-green-600 font-medium mb-3">Marketing Director</p>
                  <p className="text-gray-700 mb-4">
                    Michael crafts data-driven marketing strategies that deliver measurable results and meaningful ROI for our clients.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-lg opacity-80">Projects Completed</div>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-80">Happy Clients</div>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <div className="text-4xl font-bold mb-2">12+</div>
              <div className="text-lg opacity-80">Team Members</div>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-lg opacity-80">Years Experience</div>
            </motion.div>
          </motion.div>
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
              Let's discuss how our team can help bring your digital vision to life.
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