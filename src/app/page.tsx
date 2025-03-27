"use client";

import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';

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

const floating = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const
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
  
  // Added state for the stats counter animation
  const [statsVisible, setStatsVisible] = useState(false);
  
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
    },
    {
      title: "Graphic & Video Design",
      description: "Stunning visuals and engaging video content that tell your brand story.",
      icon: (
        <svg className="h-10 w-10 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      )
    },
    {
      title: "Software Licenses",
      description: "Authorized reseller of Microsoft 365, Adobe Creative Cloud, and more.",
      icon: (
        <svg className="h-10 w-10 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "IT Consulting",
      description: "Expert guidance to optimize your technology infrastructure.",
      icon: (
        <svg className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    }
  ];

  // Featured projects to showcase our best work
  const featuredProjects = [
    {
      title: "E-commerce Platform Redesign",
      client: "FashionForward",
      type: "Web Development",
      description: "Complete redesign of an e-commerce platform resulting in 43% increase in conversions and 68% higher average order value.",
      color: "bg-gradient-to-r from-blue-500 to-indigo-600"
    },
    {
      title: "Social Media Campaign",
      client: "EcoFriendly Products",
      type: "Digital Marketing",
      description: "Strategic social media campaign that generated 2.5M impressions, 350K engagements, and a 215% ROI within 3 months.",
      color: "bg-gradient-to-r from-green-500 to-teal-500"
    },
    {
      title: "Corporate Brand Identity",
      client: "TechInnovate",
      type: "Graphic Design",
      description: "Complete brand overhaul including logo, typography, color palette, and marketing materials that increased brand recognition by 37%.",
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      title: "Mobile App Development",
      client: "HealthTrack",
      type: "Mobile Development",
      description: "Developed a health tracking app with 4.8-star rating and over 500,000 downloads across iOS and Android platforms.",
      color: "bg-gradient-to-r from-red-500 to-orange-500"
    }
  ];

  // Stats to impress potential clients
  const stats = [
    { value: "97", label: "Satisfied Clients", suffix: "%" },
    { value: "250", label: "Projects Completed", suffix: "+" },
    { value: "12", label: "Industry Experience", suffix: "yrs" },
    { value: "24", label: "Awards Won", suffix: "" }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Updated with more visual appeal */}
      <motion.section 
        ref={scrollRef}
        className="min-h-screen flex items-center relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 -z-10"></div>
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute -top-32 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-40 -z-10"
          variants={floating}
          initial="initial"
          animate="animate"
        ></motion.div>
        <motion.div 
          className="absolute top-1/3 -left-16 w-64 h-64 bg-purple-100 rounded-full opacity-30 -z-10"
          variants={floating}
          animate="animate"
          custom={1}
        ></motion.div>
        <motion.div 
          className="absolute bottom-10 right-20 w-32 h-32 bg-green-100 rounded-full opacity-40 -z-10"
          variants={floating}
          animate="animate"
          custom={2}
        ></motion.div>
        
        {/* Animated patterns */}
        <div className="absolute top-20 right-20 -z-5 opacity-10">
          <svg width="400" height="400" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInFromLeft}>
              <motion.div 
                className="inline-block px-4 py-1 mb-6 bg-blue-100 rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-blue-800 font-semibold text-sm">Award-Winning Digital Agency</span>
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Cutting-Edge Technology</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                We provide cutting-edge digital solutions to help your business thrive in the modern digital landscape. From web development to marketing, we&apos;ve got you covered.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-lg inline-flex items-center">
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
                      <motion.div 
                        className="bg-white shadow-lg rounded-lg p-6 mb-6"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
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
                      </motion.div>
                      
                      <motion.div 
                        className="absolute top-24 -right-10 bg-white rounded-lg shadow-lg p-4 transform rotate-6"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                      >
                        <div className="h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center">
                          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="absolute -bottom-6 -left-6 bg-white rounded-full shadow-lg p-4 z-20"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.5 }}
                      >
                        <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="absolute -top-10 left-10 bg-white rounded-lg shadow-lg p-3 transform -rotate-12"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.5 }}
                      >
                        <div className="flex items-center space-x-2">
                          <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                          </div>
                          <div className="h-3 w-8 bg-gray-200 rounded"></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Clients/Partners Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-blue-600 font-semibold mb-2">TRUSTED BY INDUSTRY LEADERS</p>
            <h2 className="text-2xl font-bold text-gray-800">Our Partners & Clients</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Replace with actual client logos */}
            <motion.div 
              className="h-12 w-32 bg-white p-2 rounded-md shadow-sm flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-xl font-bold text-gray-400">Microsoft</div>
            </motion.div>
            <motion.div 
              className="h-12 w-32 bg-white p-2 rounded-md shadow-sm flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-xl font-bold text-gray-400">Adobe</div>
            </motion.div>
            <motion.div 
              className="h-12 w-32 bg-white p-2 rounded-md shadow-sm flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-xl font-bold text-gray-400">Google</div>
            </motion.div>
            <motion.div 
              className="h-12 w-32 bg-white p-2 rounded-md shadow-sm flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-xl font-bold text-gray-400">Amazon</div>
            </motion.div>
            <motion.div 
              className="h-12 w-32 bg-white p-2 rounded-md shadow-sm flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-xl font-bold text-gray-400">IBM</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Premium Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We offer a comprehensive range of digital services to help your business thrive
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="p-8">
                  <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                    Learn More
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
        onViewportEnter={() => setStatsVisible(true)}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">We Deliver Results</h2>
            <p className="text-xl opacity-90">Our track record speaks for itself</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={statsVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 2 }}
                  >
                    {stat.value}
                  </motion.span>
                  {stat.suffix}
                </div>
                <p className="text-lg opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.p 
              className="text-blue-600 font-semibold mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              PORTFOLIO HIGHLIGHTS
            </motion.p>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our Featured Projects
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              A selection of our most successful client work
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className={`p-8 ${project.color} text-white h-full`}>
                  <div className="mb-6">
                    <span className="px-3 py-1 bg-white bg-opacity-20 rounded text-sm font-medium">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4">Client: {project.client}</p>
                  <p className="mb-6 opacity-90">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <Link href="/services" className="text-white hover:underline font-semibold flex items-center">
                      View Details
                      <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                      {index === 0 && (
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      )}
                      {index === 3 && (
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Software Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Premium Software Solutions</h2>
                <p className="text-lg text-gray-600 mb-8">
                  As an authorized reseller, we provide legitimate software licenses at competitive prices. Equip your business with industry-leading tools.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">Microsoft 365</h4>
                      <p className="text-gray-600">Complete productivity suite for businesses of all sizes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">Adobe Creative Cloud</h4>
                      <p className="text-gray-600">Professional creative tools for designers and content creators</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">Cloud Services</h4>
                      <p className="text-gray-600">Secure cloud storage and computing solutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">Cybersecurity Solutions</h4>
                      <p className="text-gray-600">Enterprise-grade protection for your business data</p>
                    </div>
                  </div>
                </div>
                
                <Link href="/services#software" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg">
                  View Software Catalog
                </Link>
              </motion.div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-[400px] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white opacity-20"></div>
                    <div className="absolute bottom-10 left-20 h-40 w-40 rounded-full bg-white opacity-20"></div>
                  </div>
                  
                  <div className="relative h-full flex items-center justify-center p-8">
                    <div className="bg-white rounded-lg shadow-xl p-6 max-w-sm">
                      <div className="flex items-center mb-6">
                        <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                          <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">Authorized Reseller</h3>
                          <p className="text-sm text-gray-600">Official partner & certified provider</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                          <span className="text-gray-600">Microsoft 365 Business</span>
                          <span className="text-blue-600 font-semibold">From $12.50/mo</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                          <span className="text-gray-600">Adobe Creative Cloud</span>
                          <span className="text-blue-600 font-semibold">From $52.99/mo</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                          <span className="text-gray-600">Cloud Storage (1TB)</span>
                          <span className="text-blue-600 font-semibold">From $9.99/mo</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Security Suite</span>
                          <span className="text-blue-600 font-semibold">From $15.99/mo</span>
                        </div>
                      </div>
                      
                      <div className="mt-6 bg-blue-50 rounded-lg p-3 text-sm text-blue-800">
                        <strong>Special Offer:</strong> 10% discount on annual subscriptions
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-yellow-400 rounded p-4 shadow-lg transform rotate-12 z-10">
                  <div className="text-sm font-bold">AUTHORIZED</div>
                  <div className="text-xs">RESELLER</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Digital Presence?</h2>
              <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
                Contact us today for a free consultation and discover how our services can transform your business.
              </p>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg inline-flex items-center"
              >
                Start Your Project
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
