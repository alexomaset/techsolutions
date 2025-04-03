"use client";

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import Link from 'next/link';

// Import modular components
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import ProjectsSection from '@/components/ProjectsSection';
import GraphicsPortfolio from '@/components/GraphicsPortfolio';
import SoftwareSolutions from '@/components/SoftwareSolutions';
import CTASection from '@/components/CTASection';

export default function Home() {
  const scrollRef = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });
  
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <ProjectsSection />
      <GraphicsPortfolio />
      <SoftwareSolutions />
      <CTASection />
      <div className="text-center mt-8">
        <Link 
          href="/projects" 
          className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-all shadow-lg"
        >
          View All Projects
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}