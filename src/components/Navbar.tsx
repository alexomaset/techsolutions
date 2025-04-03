"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 bg-yellow-500/95 backdrop-blur-md py-5 z-50 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white flex items-center">
          <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          TechSolutions
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          {[
            { name: "Services", href: "/services" },
            { name: "Projects", href: "/projects" },
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" }
          ].map((item, index) => (
            <Link 
              key={index}
              href={item.href} 
              className="px-4 py-2 text-white hover:bg-yellow-600 rounded-lg transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="ml-2 px-6 py-2 bg-white text-yellow-600 rounded-lg font-semibold hover:bg-yellow-50 transition-colors shadow-sm"
          >
            Get Started
          </Link>
        </nav>
        
        <button className="md:hidden p-2 bg-yellow-600 rounded-lg text-white">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar; 