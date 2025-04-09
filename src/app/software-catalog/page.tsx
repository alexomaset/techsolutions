"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

// Software data
const softwareData = [
  {
    id: 1,
    name: "Microsoft 365 Business Basic",
    provider: "Microsoft",
    category: "productivity",
    description: "Web and mobile versions of Office apps with email, file storage, and online meetings",
    price: "$6.00",
    period: "user/month",
    features: [
      "Email with 50 GB mailbox",
      "Web versions of Office apps",
      "1 TB of OneDrive storage",
      "Microsoft Teams",
      "Webinar hosting"
    ],
    popular: false,
    logoColor: "bg-blue-100 text-blue-600"
  },
  {
    id: 2,
    name: "Microsoft 365 Business Standard",
    provider: "Microsoft",
    category: "productivity",
    description: "Desktop, web, and mobile versions of Office apps with email, file storage, and online meetings",
    price: "$12.50",
    period: "user/month",
    features: [
      "Everything in Business Basic",
      "Desktop versions of Office apps",
      "Premium business apps: Bookings, MileIQ",
      "Advanced security features",
      "Device management capabilities"
    ],
    popular: true,
    logoColor: "bg-blue-100 text-blue-600"
  },
  {
    id: 3,
    name: "Adobe Creative Cloud Complete",
    provider: "Adobe",
    category: "creative",
    description: "The entire collection of Adobe creative apps for desktop and mobile plus cloud services",
    price: "$52.99",
    period: "user/month",
    features: [
      "20+ creative desktop and mobile apps",
      "100GB cloud storage",
      "Adobe Fonts",
      "Adobe Portfolio",
      "Adobe Stock (standard assets)"
    ],
    popular: true,
    logoColor: "bg-red-100 text-red-600"
  },
  {
    id: 4,
    name: "Adobe Photoshop",
    provider: "Adobe",
    category: "creative",
    description: "Professional image editing and compositing application",
    price: "$20.99",
    period: "user/month",
    features: [
      "Advanced image editing tools",
      "Neural filters powered by AI",
      "Content-aware fill",
      "Layer styles and effects",
      "Object selection and removal"
    ],
    popular: false,
    logoColor: "bg-red-100 text-red-600"
  },
  {
    id: 5,
    name: "Cloud Storage Basic",
    provider: "TechSolutions",
    category: "cloud",
    description: "Secure cloud storage for all your business documents and files",
    price: "$9.99",
    period: "month",
    features: [
      "1TB storage capacity",
      "Automatic file backup",
      "File versioning (30 days)",
      "Multi-device sync",
      "File sharing and permissions"
    ],
    popular: false,
    logoColor: "bg-indigo-100 text-indigo-600"
  },
  {
    id: 6,
    name: "Cloud Storage Enterprise",
    provider: "TechSolutions",
    category: "cloud",
    description: "Enterprise-grade cloud storage solution with advanced management",
    price: "$29.99",
    period: "month",
    features: [
      "5TB storage capacity",
      "Extended file versioning (180 days)",
      "Advanced access controls",
      "Audit logs and reporting",
      "24/7 priority support"
    ],
    popular: false,
    logoColor: "bg-indigo-100 text-indigo-600"
  },
  {
    id: 7,
    name: "Security Suite Pro",
    provider: "TechSolutions",
    category: "security",
    description: "Comprehensive security solution for business endpoints and networks",
    price: "$15.99",
    period: "device/month",
    features: [
      "Advanced threat protection",
      "Malware and ransomware detection",
      "Phishing protection",
      "Endpoint encryption",
      "Network monitoring"
    ],
    popular: true,
    logoColor: "bg-green-100 text-green-600"
  },
  {
    id: 8,
    name: "Enterprise Firewall",
    provider: "TechSolutions",
    category: "security",
    description: "Next-generation firewall with advanced threat intelligence",
    price: "$89.99",
    period: "month",
    features: [
      "Deep packet inspection",
      "Intrusion prevention system",
      "VPN support",
      "Traffic analysis",
      "Custom rule creation"
    ],
    popular: false,
    logoColor: "bg-green-100 text-green-600"
  }
];

// Category options for filter
const categories = [
  { id: "all", label: "All Software" },
  { id: "productivity", label: "Productivity" },
  { id: "creative", label: "Creative" },
  { id: "cloud", label: "Cloud Services" },
  { id: "security", label: "Security" }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const SoftwareCatalogPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredSoftware, setFilteredSoftware] = useState(softwareData);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter software based on category and search query
  useEffect(() => {
    let filtered = softwareData;
    
    // Apply category filter
    if (activeCategory !== "all") {
      filtered = filtered.filter(item => item.category === activeCategory);
    }
    
    // Apply search filter
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query) ||
        item.provider.toLowerCase().includes(query)
      );
    }
    
    setFilteredSoftware(filtered);
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Software Catalog
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Browse our complete collection of authorized software solutions for your business
            </motion.p>
          </div>
          
          {/* Authorized Reseller Badge */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-indigo-600 text-white px-6 py-4 rounded-lg inline-flex items-center">
              <div className="bg-blue-100 rounded-full p-2 mr-4">
                <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">Authorized Reseller</h3>
                <p className="text-indigo-200 text-sm">All products include official licensing and support</p>
              </div>
            </div>
          </motion.div>
          
          {/* Search and Filter Controls */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-10">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Search software..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-full border ${
                      activeCategory === category.id 
                        ? 'bg-indigo-600 text-white border-indigo-600' 
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    } transition-colors duration-200`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Results count */}
          <div className="mb-6 text-gray-600">
            Showing {filteredSoftware.length} software solutions
          </div>
          
          {/* Software Grid */}
          {filteredSoftware.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSoftware.map((software) => (
                <motion.div
                  key={software.id}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.1 * (software.id % 6) }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 relative"
                >
                  {software.popular && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full text-black">
                      Popular
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${software.logoColor} rounded-full flex items-center justify-center mr-4`}>
                        {software.provider === "Microsoft" && (
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.5 2.75h-8a.75.75 0 00-.75.75v8c0 .414.336.75.75.75h8a.75.75 0 00.75-.75v-8a.75.75 0 00-.75-.75zm0 10h-8a.75.75 0 00-.75.75v8c0 .414.336.75.75.75h8a.75.75 0 00.75-.75v-8a.75.75 0 00-.75-.75zm10-10h-8a.75.75 0 00-.75.75v8c0 .414.336.75.75.75h8a.75.75 0 00.75-.75v-8a.75.75 0 00-.75-.75zm0 10h-8a.75.75 0 00-.75.75v8c0 .414.336.75.75.75h8a.75.75 0 00.75-.75v-8a.75.75 0 00-.75-.75z"/>
                          </svg>
                        )}
                        {software.provider === "Adobe" && (
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                          </svg>
                        )}
                        {software.provider === "TechSolutions" && software.category === "cloud" && (
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M5.636 4.636a9 9 0 010 12.728M12 5a7 7 0 010 14M18.364 4.636a9 9 0 010 12.728M8.172 8.172a5 5 0 010 7.656"/>
                          </svg>
                        )}
                        {software.provider === "TechSolutions" && software.category === "security" && (
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                          </svg>
                        )}
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{software.provider}</div>
                        <h3 className="font-bold text-lg text-gray-900">{software.name}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{software.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {software.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-sm text-gray-500">Starting at</div>
                        <div className="text-2xl font-bold text-indigo-600">{software.price}<span className="text-sm text-gray-500 font-normal">/{software.period}</span></div>
                      </div>
                      <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200">
                        Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No results found</h3>
              <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you&apos;re looking for.</p>
              <div className="mt-6">
                <button 
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                  }}
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
          
          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white">
            <div className="md:flex justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Need help choosing the right software?</h3>
                <p className="text-indigo-100">Our software specialists can provide personalized recommendations for your business needs.</p>
              </div>
              <div className="flex space-x-4">
                <Link 
                  href="/contact" 
                  className="px-6 py-3 bg-white text-indigo-700 rounded-lg font-semibold hover:bg-indigo-50 transition duration-300 shadow-md"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/services" 
                  className="px-6 py-3 bg-indigo-800 text-white rounded-lg font-semibold hover:bg-indigo-900 transition duration-300 shadow-md"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareCatalogPage; 