"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react'; 

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" } 
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); 
  const mobileMenuRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    const body = document.body;
    const originalOverflow = body.style.overflow;

    if (isOpen) {
      body.style.overflow = 'hidden';
      const focusableElements = mobileMenuRef.current?.querySelectorAll(
        'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements && focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
      const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === 'Tab' && mobileMenuRef.current && focusableElements) {
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            if (e.shiftKey) { 
              if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
              }
            } else { 
              if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
              }
            }
          }
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => {
         document.removeEventListener('keydown', handleKeyDown);
         body.style.overflow = originalOverflow;
      }

    } else {
      body.style.overflow = originalOverflow; 
    }

     return () => {
       body.style.overflow = originalOverflow; 
    };
  }, [isOpen]);

  const getLinkClass = (href: string, baseClass: string, activeClass: string) => {
    const isActive = href === '/' ? pathname === href : pathname.startsWith(href);
    return `${baseClass} ${isActive ? activeClass : ''}`;
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div 
          className={`mx-auto max-w-6xl rounded-full backdrop-blur-lg transition-all duration-300 px-6 flex items-center h-16 ${
            scrolled 
              ? 'bg-amber-600/95 shadow-lg' 
              : 'bg-yellow-400/90 shadow-md'
          }`}
        >
          <Link href="/" className="text-xl font-bold text-gray-900 flex items-center focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-sm">
            <svg className="w-7 h-7 mr-2 text-yellow-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            TechSolutions
          </Link>

          <nav className="hidden md:flex items-center justify-center mx-auto space-x-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={getLinkClass(
                  item.href,
                  "px-2 py-1 text-gray-900 hover:text-amber-800 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-sm",
                  "text-lime-900 font-semibold" 
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/contact"
              className={`px-5 py-2 text-white rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                scrolled ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-lime-700 hover:bg-amber-800'
              }`}
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden ml-auto p-2 text-gray-900 hover:text-amber-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu" 
            ref={mobileMenuRef} 
            className="fixed inset-0 top-[88px] bg-yellow-100/95 backdrop-blur-lg z-40 min-h-screen overflow-y-auto md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 88px)" }} 
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-6 py-8">
              <nav className="flex flex-col space-y-5 text-center">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.07 }} 
                  >
                    <Link
                      href={item.href}
                      className={getLinkClass(
                        item.href,
                        "block px-4 py-3 text-gray-800 text-lg font-medium hover:text-amber-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500",
                        "text-amber-800 font-semibold" 
                      )}
                      onClick={() => setIsOpen(false)} 
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="flex flex-col space-y-3 mt-5">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + navLinks.length * 0.07 }}
                  >
                    <Link
                      href="/login"
                      className="block px-6 py-3 bg-white border border-yellow-400 text-yellow-700 text-lg font-medium rounded-full shadow-sm hover:bg-yellow-50 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (navLinks.length + 1) * 0.07 }}
                  >
                    <Link
                      href="/contact"
                      className="block px-6 py-3 bg-amber-600 text-white text-lg font-medium rounded-full shadow-md hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500" 
                      onClick={() => setIsOpen(false)}
                    >
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;