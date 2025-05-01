import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';


// Define Service interface
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  image: string;
}

// Define categories for filtering
const categories: string[] = [
  'All',
  'Development',
  'Design',
  'Marketing',
  'Consulting',
  'Support'
];

// Define services with enhanced data
const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites built with the latest technologies to provide optimal performance and user experience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    category: "Development",
    image: "/images/services/web-development.jpg"
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications designed for iOS and Android devices.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    category: "Development",
    image: "/images/services/mobile-app.jpg"
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns to increase your online presence and drive growth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    category: "Marketing",
    image: "/images/services/digital-marketing.jpg"
  },
  {
    id: 4,
    title: "Graphic & Video Design",
    description: "Professional graphic design and video production services for all your visual content needs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
    category: "Design",
    image: "/images/services/graphic-design.jpg"
  },
  {
    id: 5,
    title: "Software Licenses",
    description: "Authorized reseller of popular software licenses for businesses of all sizes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    category: "Support",
    image: "/images/services/software-licenses.jpg"
  },
  {
    id: 6,
    title: "IT Consulting",
    description: "Expert IT consulting services to help you make informed technology decisions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    category: "Consulting",
    image: "/images/services/it-consulting.jpg"
  },
  {
    id: 7,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    category: "Development",
    image: "/images/services/cloud-solutions.jpg"
  },
  {
    id: 8,
    title: "UI/UX Design",
    description: "User-centered design services focused on creating intuitive and engaging digital experiences.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    category: "Design",
    image: "/images/services/ui-ux-design.jpg"
  },
];

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [autoplay, setAutoplay] = useState<boolean>(true);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [direction, setDirection] = useState<number>(0); // -1 for left, 1 for right
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef<HTMLElement | null>(null);
 

  // Filter services based on selected category
  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(item => item.category === activeCategory);

  // Items to show per slide based on screen size
  const getItemsPerSlide = (): number => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 3; // xl screens
      if (window.innerWidth >= 1024) return 2; // lg screens
      if (window.innerWidth >= 640) return 2;  // md screens
      return 1; // sm screens
    }
    return 3; // Default to desktop size
  };

  const [itemsPerSlide, setItemsPerSlide] = useState<number>(3);
  const totalSlides = Math.ceil(filteredServices.length / itemsPerSlide);

  useEffect(() => {
    const handleResize = (): void => {
      setItemsPerSlide(getItemsPerSlide());
    };

    // Set initial items per slide
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update total slides when filtered services or items per slide changes
  useEffect(() => {
    // Reset to first slide when category changes
    setCurrentSlide(0);
  }, [filteredServices.length, itemsPerSlide]);

  const nextSlide = useCallback((): void => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback((): void => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number): void => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide]);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay || isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [autoplay, isPaused, nextSlide]);

  const openModal = (id: number): void => {
    setSelectedService(id);
    setIsModalOpen(true);
    setAutoplay(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = useCallback((): void => {
    setIsModalOpen(false);
    setAutoplay(true);
    document.body.style.overflow = 'auto';
  }, []);

  // Get current slides
  const getCurrentSlideItems = (): Service[] => {
    const startIndex = currentSlide * itemsPerSlide;
    return filteredServices.slice(startIndex, startIndex + itemsPerSlide);
  };

  // Variants for slide animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  return (
    <section className="py-20 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-lime-500 font-semibold">WHAT WE OFFER</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to meet your business needs and drive innovation
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-lime-500 text-white shadow-md'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
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

        {/* Carousel Layer */}
        <div className="relative max-w-6xl mx-auto px-10" ref={carouselRef}>
          {/* Carousel Controls */}
          <div className="absolute inset-y-0 left-0 flex items-center z-10">
            <motion.button
              className="bg-gray-900/80 backdrop-blur-sm p-2 rounded-full shadow-md text-gray-200 hover:bg-lime-500 hover:text-white transition-colors duration-300"
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={filteredServices.length <= itemsPerSlide}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
          </div>
          
          <div className="relative overflow-hidden" 
            onMouseEnter={() => setIsPaused(true)} 
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {getCurrentSlideItems().map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="rounded-xl overflow-hidden bg-gray-900 cursor-pointer group h-[350px] relative transform -rotate-2 hover:rotate-0"
                    onClick={() => openModal(item.id)}
                    whileHover={{ 
                      y: -10, 
                      transition: { duration: 0.3 },
                      boxShadow: "0 10px 30px rgba(132, 204, 22, 0.3)"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="h-full w-full overflow-hidden">
                      <div className="relative h-full w-full">
                        {/* Fallback div if image is not available */}
                        <div className="absolute inset-0 bg-gradient-to-br from-lime-900 to-gray-800"></div>
                        
                        <div className="absolute inset-0 flex items-center justify-center text-lime-500 opacity-20 scale-150">
                          <div className="w-32 h-32">
                            {item.icon}
                          </div>
                        </div>
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
                          <p className="text-gray-300 text-sm mb-3 line-clamp-2">{item.description}</p>
                          <div className="flex items-center gap-2">
                            <span className="inline-block px-3 py-1 bg-lime-500/80 text-white text-xs rounded-full">
                              {item.category}
                            </span>
                            <span className="text-white/80 text-sm">View Details</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center z-10">
            <motion.button
              className="bg-gray-900/80 backdrop-blur-sm p-2 rounded-full shadow-md text-gray-200 hover:bg-lime-500 hover:text-white transition-colors duration-300"
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={filteredServices.length <= itemsPerSlide}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </div>
          
          {/* Play/Pause Button */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
            {totalSlides > 1 && (
              <motion.button
                className="bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-md text-gray-200 hover:bg-lime-500 hover:text-white transition-colors duration-300"
                onClick={() => setAutoplay(!autoplay)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {autoplay ? (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </motion.button>
            )}
            
            {/* Pagination Dots */}
            <div className="flex items-center gap-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <motion.button
                  key={index}
                  className={`h-2.5 rounded-full transition-all ${
                    currentSlide === index ? 'w-8 bg-lime-500' : 'w-2.5 bg-gray-700 hover:bg-gray-600'
                  }`}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-lime-500 to-lime-600 text-white rounded-lg font-semibold hover:from-lime-600 hover:to-lime-700 transition-all duration-300 shadow-lg inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Services
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.button
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-lime-500/70 transition-colors z-10"
              onClick={closeModal}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <AnimatePresence mode="wait">
              {services.find(item => item.id === selectedService) && (
                <motion.div
                  key={selectedService}
                  className="relative max-w-4xl bg-gray-900 rounded-lg overflow-hidden"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  onClick={(e: React.MouseEvent) => e.stopPropagation()}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8 flex flex-col justify-center">
                      <div className="text-lime-500 w-16 h-16 mb-4">
                        {services.find(item => item.id === selectedService)?.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {services.find(item => item.id === selectedService)?.title}
                      </h3>
                      <p className="text-gray-300 mb-6">
                        {services.find(item => item.id === selectedService)?.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="inline-block px-3 py-1 bg-lime-500/80 text-white text-xs rounded-full">
                          {services.find(item => item.id === selectedService)?.category}
                        </span>
                      </div>
                      <motion.button
                        className="px-6 py-3 bg-lime-500 text-white rounded-lg font-semibold hover:bg-lime-600 transition-all duration-300 shadow-lg inline-flex items-center w-fit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Get Started
                        <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.button>
                    </div>
                    <div className="bg-gradient-to-br from-lime-900 to-gray-800 flex items-center justify-center p-10">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-32 h-32 text-lime-500 opacity-80">
                          {services.find(item => item.id === selectedService)?.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;