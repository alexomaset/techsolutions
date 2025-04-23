"use client";

import Link from 'next/link';

// Import modular components
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import GraphicsPortfolio from '@/components/GraphicsPortfolio';
import SoftwareSolutions from '@/components/SoftwareSolutions';
import CTASection from '@/components/CTASection';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      
      {/* Fixed hero section (instead of sticky) */}
      <div className="sticky-hero">
        <HeroSection />
      </div>

      {/* Content wrapper for all scrollable content */}
      <div className="content-wrapper">
        {/* Projects section starts after the hero height */}
        <div className="projects-section">
          <ProjectsSection />
        </div>
        
        {/* Remaining content with solid background */}
        <div className="remaining-content">
          <ServicesSection />
          <GraphicsPortfolio />
          <SoftwareSolutions />
          <CTASection />
          
          <div className="text-center py-8">
            <Link 
              href="/projects" 
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-yellow-500 text-gray-900 rounded-lg font-semibold hover:bg-yellow-600 transition-all shadow-lg"
            >
              View All Projects
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      <Chatbot />
    </div>
  );
}