import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';

// Define types for graphics items
interface GraphicItem {
  id: number;
  src: string;
  title: string;
  category: string;
}

// Graphics portfolio data
const graphics: GraphicItem[] = [
  { id: 1, src: '/images/graphics/g1.jpeg', title: 'Brand Identity', category: 'Branding' },
  { id: 2, src: '/images/graphics/g2.jpeg', title: 'Minimalist Logo', category: 'Logo Design' },
  { id: 3, src: '/images/graphics/g3.jpeg', title: 'Product Showcase', category: 'Marketing' },
  { id: 4, src: '/images/graphics/g4.jpeg', title: 'UI Elements', category: 'Web Design' },
  { id: 5, src: '/images/graphics/g5.jpeg', title: 'Social Media Kit', category: 'Marketing' },
  { id: 6, src: '/images/graphics/g6.jpeg', title: 'App Interface', category: 'UI/UX' },
  { id: 7, src: '/images/graphics/g7.jpeg', title: 'Event Poster', category: 'Print' },
  { id: 8, src: '/images/graphics/g8.jpeg', title: 'Corporate Brochure', category: 'Print' },
  { id: 9, src: '/images/graphics/g9.jpeg', title: 'E-commerce Graphics', category: 'Web Design' },
  { id: 10, src: '/images/graphics/g10.jpeg', title: 'Illustration Set', category: 'Illustration' },
  { id: 11, src: '/images/graphics/g11.jpeg', title: 'Package Design', category: 'Branding' },
  { id: 12, src: '/images/graphics/g12.jpeg', title: 'Motion Graphics', category: 'Animation' },
  { id: 13, src: '/images/graphics/g13.jpeg', title: 'Billboard Design', category: 'Print' },
  { id: 14, src: '/images/graphics/g14.jpeg', title: 'Creative Concept', category: 'Illustration' },
];

// Category filters
const categories: string[] = [
  'All',
  'Branding',
  'Logo Design',
  'Web Design',
  'UI/UX',
  'Marketing',
  'Print',
  'Illustration',
  'Animation'
];

const GraphicsPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [autoplay, setAutoplay] = useState<boolean>(true);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [direction, setDirection] = useState<number>(0); // -1 for left, 1 for right
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Filter graphics based on selected category
  const filteredGraphics = activeCategory === 'All' 
    ? graphics 
    : graphics.filter(item => item.category === activeCategory);

  // Items to show per slide based on screen size
  const getItemsPerSlide = (): number => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 3; // xl screens - changed from 4 to 3
      if (window.innerWidth >= 1024) return 2; // lg screens - changed from 3 to 2
      if (window.innerWidth >= 640) return 2;  // md screens
      return 1; // sm screens
    }
    return 3; // Default to desktop size - changed from 4 to 3
  };

  const [itemsPerSlide, setItemsPerSlide] = useState<number>(3); // changed default from 4 to 3
  const totalSlides = Math.ceil(filteredGraphics.length / itemsPerSlide);

  useEffect(() => {
    const handleResize = (): void => {
      setItemsPerSlide(getItemsPerSlide());
    };

    // Set initial items per slide
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update total slides when filtered graphics or items per slide changes
  useEffect(() => {
    // Reset to first slide when category changes
    setCurrentSlide(0);
  }, [filteredGraphics.length, itemsPerSlide]);

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
    }, 3000);

    return () => clearInterval(interval);
  }, [autoplay, isPaused, nextSlide]);

  const openLightbox = (id: number): void => {
    setSelectedImage(id);
    setIsLightboxOpen(true);
    setAutoplay(false);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback((): void => {
    setIsLightboxOpen(false);
    setAutoplay(true);
    document.body.style.overflow = 'auto';
  }, []);

  const nextImage = useCallback((): void => {
    if (selectedImage !== null) {
      const currentIndex = filteredGraphics.findIndex(item => item.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredGraphics.length;
      setSelectedImage(filteredGraphics[nextIndex].id);
    }
  }, [selectedImage, filteredGraphics]);

  const prevImage = useCallback((): void => {
    if (selectedImage !== null) {
      const currentIndex = filteredGraphics.findIndex(item => item.id === selectedImage);
      const prevIndex = (currentIndex - 1 + filteredGraphics.length) % filteredGraphics.length;
      setSelectedImage(filteredGraphics[prevIndex].id);
    }
  }, [selectedImage, filteredGraphics]);

  // Add key event listeners for lightbox navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (!isLightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, selectedImage, closeLightbox, nextImage, prevImage]);

  // Get current slides
  const getCurrentSlideItems = (): GraphicItem[] => {
    const startIndex = currentSlide * itemsPerSlide;
    return filteredGraphics.slice(startIndex, startIndex + itemsPerSlide);
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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-pink-500 font-semibold">OUR CREATIVE WORK</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">Portfolio</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of our creative design projects delivered with precision and artistic excellence
          </p>
        </motion.div>

        {/* Category Filter - Updated for dark theme */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-pink-500 text-white shadow-md'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
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

        {/* Carousel Layer - Updated for dark theme */}
        <div className="relative max-w-6xl mx-auto px-10" ref={carouselRef}>
          {/* Carousel Controls */}
          <div className="absolute inset-y-0 left-0 flex items-center z-10">
            <motion.button
              className="bg-gray-900/80 backdrop-blur-sm p-2 rounded-full shadow-md text-gray-200 hover:bg-pink-500 hover:text-white transition-colors duration-300"
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={filteredGraphics.length <= itemsPerSlide}
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
                    className="rounded-xl overflow-hidden bg-gray-900 cursor-pointer group h-[350px] relative transform -rotate-3 hover:rotate-0"
                    onClick={() => openLightbox(item.id)}
                    whileHover={{ 
                      y: -10, 
                      transition: { duration: 0.3 },
                      boxShadow: "0 10px 30px rgba(236, 72, 153, 0.3)"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="h-full w-full overflow-hidden">
                      <div className="relative h-full w-full">
                        <Image
                          src={item.src}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
                          <div className="flex items-center gap-2">
                            <span className="inline-block px-3 py-1 bg-pink-500/80 text-white text-xs rounded-full">
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
              className="bg-gray-900/80 backdrop-blur-sm p-2 rounded-full shadow-md text-gray-200 hover:bg-pink-500 hover:text-white transition-colors duration-300"
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={filteredGraphics.length <= itemsPerSlide}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
          
          {/* Play/Pause Button */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
            {totalSlides > 1 && (
              <motion.button
                className="bg-gray-800/80 backdrop-blur-sm p-2 rounded-full shadow-md text-gray-200 hover:bg-pink-500 hover:text-white transition-colors duration-300"
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
                    currentSlide === index ? 'w-8 bg-pink-500' : 'w-2.5 bg-gray-700 hover:bg-gray-600'
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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg inline-flex items-center"
            whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(236, 72, 153, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            View Complete Portfolio
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.button
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-pink-500/70 transition-colors z-10"
              onClick={closeLightbox}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <motion.button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-pink-500/70 transition-colors z-10"
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                prevImage();
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-pink-500/70 transition-colors z-10"
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                nextImage();
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            <AnimatePresence mode="wait">
              {graphics.find(item => item.id === selectedImage) && (
                <motion.div
                  key={selectedImage}
                  className="relative max-w-5xl max-h-[80vh] bg-gray-900 rounded-lg overflow-hidden"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  onClick={(e: React.MouseEvent) => e.stopPropagation()}
                >
                  <div className="relative h-[70vh] w-full">
                    <Image
                      src={graphics.find(item => item.id === selectedImage)?.src || ''}
                      alt={graphics.find(item => item.id === selectedImage)?.title || ''}
                      fill
                      sizes="80vw"
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6 bg-gray-900">
                    <h3 className="text-xl font-bold text-white">
                      {graphics.find(item => item.id === selectedImage)?.title}
                    </h3>
                    <p className="text-pink-500">{graphics.find(item => item.id === selectedImage)?.category}</p>
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

export default GraphicsPortfolio;