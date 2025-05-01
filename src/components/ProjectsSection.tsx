"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);

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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-yellow-500 font-semibold uppercase tracking-wider">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our collection of real-world projects and creative designs we&apos;ve delivered for clients
          </p>
        </motion.div>

        {/* Category filter */}
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
                  ? 'bg-lime-500 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-lime-100'
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
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
      </div>
    </section>
  );
}