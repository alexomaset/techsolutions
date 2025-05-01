import React from 'react';
import Link from 'next/link';

const ImprovedCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-lime-500 to-lime-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Card with glass effect */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            {/* Top section with headline */}
            <div className="bg-white/15 backdrop-blur-md px-8 py-12 text-center border-b border-white/20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                GET YOUR DEMO
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Experience our innovative solutions with a personalized demonstration
              </p>
            </div>
            
            {/* Bottom section with benefits and CTA button */}
            <div className="bg-white/10 backdrop-blur-sm px-8 py-10 md:flex items-center justify-between">
              <div className="md:w-3/5 mb-8 md:mb-0 pr-0 md:pr-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Personalized walkthrough of our platform</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Expert consultation on your specific needs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-white flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No commitment required, see results first</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-2/5 text-center">
                <Link 
                  href="/contact" 
                  className="w-full md:w-auto px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-red-50 transition duration-300 shadow-lg inline-flex items-center justify-center"
                >
                  Get Started Now
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <p className="text-sm mt-4 opacity-80">
                  Most demos scheduled within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImprovedCTA;