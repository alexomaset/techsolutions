"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import GraphicsPortfolio from '@/components/GraphicsPortfolio';

// Web projects data
const webProjects = [
  {
    id: 1,
    title: "Mammot Digital Marketing",
    client: "Mammot",
    description: "A professional digital marketing agency website with modern UI, comprehensive service showcases, and interactive portfolio display.",
    technologies: ["Next.js", "TailwindCSS", "Framer Motion", "Responsive Design"],
    image: "/images/projects/corporate.jpg",
    liveUrl: "https://mammot.vercel.app/",
    category: "Corporate"
  },
  {
    id: 2,
    title: "Revontulia",
    client: "Revontulia",
    description: "Minimalist and elegant website with creative animations and stunning visual design for enhanced user experience.",
    technologies: ["React", "CSS Animations", "Modern UI/UX"],
    image: "/images/projects/creative.jpg",
    liveUrl: "https://www.revontulia.com/",
    category: "Creative"
  },
  {
    id: 3,
    title: "E-commerce Platform",
    client: "StyleShop",
    description: "A fully responsive e-commerce platform with advanced filtering, shopping cart, and secure payment integration.",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    image: "/images/projects/ecommerce.jpg",
    liveUrl: "#",
    category: "E-commerce"
  },
  {
    id: 4,
    title: "Real Estate Marketplace",
    client: "PropertyFinder",
    description: "Property listing application with search functionality, map integration, and agent contact forms.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    image: "/images/projects/realestate.jpg",
    liveUrl: "#",
    category: "Web Application"
  },
  {
    id: 5,
    title: "Educational Platform",
    client: "LearnHub",
    description: "Online learning platform with course management, video lessons, progress tracking, and certification.",
    technologies: ["Vue.js", "Firebase", "TailwindCSS"],
    image: "/images/projects/education.jpg",
    liveUrl: "#",
    category: "Education"
  },
  {
    id: 6,
    title: "Health & Fitness Tracker",
    client: "FitLife",
    description: "Personalized fitness application with workout plans, nutrition tracking, and progress visualization.",
    technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
    image: "/images/projects/fitness.jpg",
    liveUrl: "#",
    category: "Mobile App"
  }
];

// Project categories
const projectCategories = [
  'All',
  'Corporate',
  'Creative',
  'E-commerce',
  'Web Application',
  'Mobile App',
  'Education'
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('web');
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Filter projects based on selected category
  const filteredProjects = activeCategory === 'All' 
    ? webProjects 
    : webProjects.filter(item => item.category === activeCategory);

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="bg-gray-50 pt-28 min-h-screen">
      <div className="container mx-auto px-4 pb-20">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-yellow-500 font-semibold uppercase tracking-wider">Our Work</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Projects Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our collection of real-world projects and creative designs we&apos;ve delivered for clients
          </p>
        </motion.div>
        
        {/* Featured Work Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { 
              icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", 
              stat: "10+", 
              label: "Completed Projects" 
            },
            { 
              icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", 
              stat: "100%", 
              label: "Client Satisfaction" 
            },
            { 
              icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", 
              stat: "48hrs", 
              label: "Average Delivery" 
            },
            { 
              icon: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9", 
              stat: "2", 
              label: "Featured Clients" 
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-yellow-100 p-3 mr-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{item.stat}</h3>
                  <p className="text-gray-600">{item.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <motion.div 
            className="bg-white p-2 rounded-xl shadow-lg flex gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              onClick={() => setActiveTab('web')}
              className={`px-8 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeTab === 'web' 
                  ? 'bg-yellow-500 text-white shadow-sm' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                Web Projects
              </span>
            </button>
            <button
              onClick={() => setActiveTab('graphics')}
              className={`px-8 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeTab === 'graphics' 
                  ? 'bg-yellow-500 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Graphics Portfolio
              </span>
            </button>
          </motion.div>
        </div>

        {/* Content based on active tab */}
        <AnimatePresence mode="wait">
          {activeTab === 'web' ? (
            <motion.div
              key="web-projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Web Projects category filter */}
              <motion.div 
                className="flex flex-wrap justify-center gap-2 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                ref={ref}
              >
                {projectCategories.map((category, index) => (
                  <motion.button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-yellow-500 text-white shadow-md'
                        : 'bg-white text-gray-600 hover:bg-yellow-100'
                    }`}
                    onClick={() => setActiveCategory(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </motion.div>

              {/* Web Projects Grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    className={`bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 ${project.id <= 2 ? 'border-2 border-yellow-400' : ''}`}
                    variants={cardVariants}
                    whileHover={{ y: -10 }}
                  >
                    {project.id <= 2 && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 bg-yellow-500 text-white text-xs rounded-full shadow-md">
                          Featured Client
                        </span>
                      </div>
                    )}
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="inline-block px-3 py-1 bg-yellow-500 text-white text-xs rounded-full mb-2">
                          {project.category}
                        </span>
                        <h3 className="text-white font-bold text-xl">{project.title}</h3>
                        <p className="text-white/80 text-sm">Client: {project.client}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                        <p className="text-gray-600">{project.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-end">
                        <Link 
                          href={project.liveUrl} 
                          className={`inline-flex items-center font-semibold transition-colors ${
                            project.liveUrl !== "#" 
                              ? "text-yellow-600 hover:text-yellow-700" 
                              : "text-gray-400 cursor-not-allowed"
                          }`}
                          target={project.liveUrl !== "#" ? "_blank" : ""}
                          rel={project.liveUrl !== "#" ? "noopener noreferrer" : ""}
                        >
                          {project.liveUrl !== "#" ? "Visit Live Site" : "Coming Soon"}
                          {project.liveUrl !== "#" && (
                            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          )}
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {filteredProjects.length === 0 && (
                <motion.div 
                  className="text-center py-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-gray-500 text-xl">No projects found in this category.</p>
                  <button 
                    onClick={() => setActiveCategory('All')}
                    className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition duration-300"
                  >
                    Show All Projects
                  </button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="graphics-portfolio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <GraphicsPortfolio />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 