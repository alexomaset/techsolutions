import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Graphics portfolio data
const graphics = [
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
];

// Define the GraphicItem type
type GraphicItem = typeof graphics[0];

// Define the OrbitItem type
interface OrbitItem extends GraphicItem {
  angle: number;
  initialAngle: number;
  x: number;
  y: number;
  scale: number;
  depth: number;
}

// Category filters
const categories = [
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

const OrbitalGraphicsPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [orbitItems, setOrbitItems] = useState<OrbitItem[]>([]);
  const [focused, setFocused] = useState<number | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const orbitRef = useRef(null);

  // Filter graphics based on selected category
  const filteredGraphics = activeCategory === 'All' 
    ? graphics 
    : graphics.filter(item => item.category === activeCategory);

  useEffect(() => {
    // Set up orbit positions
    const itemCount = Math.min(filteredGraphics.length, 8); // Show max 8 items in orbit
    const newOrbitItems = filteredGraphics.slice(0, itemCount).map((item, index) => {
      const angle = (index / itemCount) * 2 * Math.PI;
      return {
        ...item,
        angle: angle,
        initialAngle: angle,
        x: Math.cos(angle),
        y: Math.sin(angle),
        scale: 1,
        depth: 0,
      };
    });

    setOrbitItems(newOrbitItems as OrbitItem[]);
    setFocused(null);
  }, [filteredGraphics]);

  // Auto-rotate effect
  useEffect(() => {
    if (!autoRotate || focused !== null) return;
    const interval = setInterval(() => {
      setOrbitItems((prev: OrbitItem[]) => {
        return prev.map(item => {
          const newAngle = item.angle + 0.005;
          return {
            ...item,
            angle: newAngle,
            x: Math.cos(newAngle),
            y: Math.sin(newAngle),
          };
        });
      });
    }, 16);
    
    return () => clearInterval(interval);
  }, [autoRotate, focused]);

  const handleFocus = (id: number) => {
    if (focused === id) {
      setFocused(null);
      return;
    }
    setFocused(id);
    // Bring the focused item to the front
    setOrbitItems((prev: OrbitItem[]) => {
      return prev.map(item => {
        if (item.id === id) {
          return { ...item, scale: 1.5, depth: 10 };
        }
        return { ...item, scale: 0.8, depth: 0 };
      });
    });
  };

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    setIsLightboxOpen(true);
    setAutoRotate(false);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setAutoRotate(true);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredGraphics.findIndex(item => item.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredGraphics.length;
      setSelectedImage(filteredGraphics[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredGraphics.findIndex(item => item.id === selectedImage);
      const prevIndex = (currentIndex - 1 + filteredGraphics.length) % filteredGraphics.length;
      setSelectedImage(filteredGraphics[prevIndex].id);
    }
  };

  return (
    <section className="py-20 bg-gray-100 text-gray-800 overflow-hidden relative">
      {/* Soft blue accent */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 font-semibold">OUR CREATIVE WORK</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Graphics Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive showcase of our creative design projects delivered with precision and artistic excellence
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
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
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

        {/* Orbital Display */}
        <div className="relative h-[600px] w-full" ref={orbitRef}>
          {/* Orbit lines */}
          <motion.div 
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-gray-300 opacity-30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Orbit points */}
          <motion.div 
            className="absolute left-1/2 top-0 transform -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />

          {/* Orbital items */}
          {orbitItems.map((item) => {
            // Calculate position based on angle
            const orbitRadius = 240; // Radius of orbit in pixels
            const leftPos = `calc(50% + ${item.x * orbitRadius}px)`;
            const topPos = `calc(50% + ${item.y * orbitRadius}px)`;
            
            return (
              <motion.div
                key={item.id}
                className="absolute"
                style={{ 
                  left: leftPos, 
                  top: topPos,
                  zIndex: item.depth
                }}
                animate={{ 
                  x: `-50%`,
                  y: `-50%`,
                  scale: item.scale || 1,
                  transition: { duration: 0.3 }
                }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div 
                  className="cursor-pointer group"
                  onClick={() => handleFocus(item.id)}
                  onDoubleClick={() => openLightbox(item.id)}
                >
                  <div className="relative w-48 h-40 rounded-lg overflow-hidden border border-gray-300 shadow-lg">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="192px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-gray-800 text-sm font-medium text-center p-1">
                        {item.title}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected item details */}
        <AnimatePresence>
          {focused !== null && (
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-800">
                {orbitItems.find(item => item.id === focused)?.title}
              </h3>
              <p className="text-blue-600 mt-2">
                {orbitItems.find(item => item.id === focused)?.category}
              </p>
              <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                Double-click on any item to view in fullscreen.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Controls */}
        <div className="mt-12 flex justify-center gap-4">
          <motion.button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              autoRotate 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setAutoRotate(!autoRotate)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {autoRotate ? 'Pause Rotation' : 'Resume Rotation'}
          </motion.button>
          <motion.button
            className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-white text-gray-700 hover:bg-gray-200"
            onClick={() => setFocused(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reset View
          </motion.button>
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-semibold hover:from-blue-500 hover:to-blue-300 transition-all duration-300 shadow-lg inline-flex items-center"
            whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)" }}
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
            className="fixed inset-0 bg-gray-900/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.button
              className="absolute top-4 right-4 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors z-10"
              onClick={closeLightbox}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <motion.button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 p-3 rounded-full hover:bg-black/50 transition-colors z-10"
              onClick={(e) => {
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
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 p-3 rounded-full hover:bg-black/50 transition-colors z-10"
              onClick={(e) => {
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
                  className="relative max-w-5xl max-h-[80vh] bg-white rounded-lg overflow-hidden"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  onClick={(e) => e.stopPropagation()}
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
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold text-gray-800">
                      {graphics.find(item => item.id === selectedImage)?.title}
                    </h3>
                    <p className="text-blue-600">{graphics.find(item => item.id === selectedImage)?.category}</p>
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

export default OrbitalGraphicsPortfolio;