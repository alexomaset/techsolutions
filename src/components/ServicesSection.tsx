import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import React from 'react';

// Define Service interface
interface Service {
  title: string;
  icon?: React.ReactNode;
  size: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  subtitle?: string;
  special?: boolean;
  buttonText?: string;
  color?: string;
}

// Define services with enhanced responsiveness
const services = [
  {
    title: "Web Development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    size: {
      mobile: "col-span-12",
      tablet: "col-span-6",
      desktop: "col-span-3"
    },
    color: "#4F46E5",
  },
  {
    title: "Mobile App Development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    size: {
      mobile: "col-span-12",
      tablet: "col-span-6",
      desktop: "col-span-3"
    },
    color: "#06B6D4",
  },
  {
    title: "Digital Marketing",
    subtitle: "and Growth",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    size: {
      mobile: "col-span-12",
      tablet: "col-span-6",
      desktop: "col-span-3"
    },
    color: "#8B5CF6",
  },
  {
    title: "Graphic & Video Design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
    size: {
      mobile: "col-span-12",
      tablet: "col-span-6",
      desktop: "col-span-3"
    },
    color: "#EC4899",
  },
  {
    title: "Software Licenses",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    size: {
      mobile: "col-span-12",
      tablet: "col-span-6",
      desktop: "col-span-3"
    },
    color: "#10B981",
  },
  {
    title: "IT Consulting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    size: {
      mobile: "col-span-12",
      tablet: "col-span-6",
      desktop: "col-span-3"
    },
    color: "#F59E0B",
  },
  {
    title: "Start Now",
    subtitle: "Contact Us",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    size: {
      mobile: "col-span-12",
      tablet: "col-span-12",
      desktop: "col-span-6"
    },
    color: "#3B82F6",
  },
  {
    title: "CTA",
    buttonText: "Get Started",
    size: {
      mobile: "col-span-12",
      tablet: "col-span-6",
      desktop: "col-span-3"
    },
    color: "#4F46E5",
  },
];

// Extract the CTA card and remove it from the services array to be used separately
const ctaCard = services.find(service => service.title === "CTA");
const serviceCards = services.filter(service => service.title !== "CTA");

const RotatingServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const [screenSize, setScreenSize] = useState('desktop');
  const [isPaused, setIsPaused] = useState(false);
  const rotationControls = useAnimation();
  
  // Simplified viewport detection with debounce
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 768) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };
    
    // Initial check
    checkScreenSize();
    
    // Debounced resize listener to prevent excessive re-renders
    let resizeTimer: number | undefined;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(checkScreenSize, 100) as number;
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Start the rotation animation when component mounts
  useEffect(() => {
    if (!isPaused) {
      rotationControls.start({
        rotate: 360,
        transition: {
          duration: 40,
          ease: "linear",
          repeat: Infinity
        }
      });
    } else {
      rotationControls.stop();
    }
  }, [isPaused, rotationControls]);

  // Calculate positions for each card in the circle
  const calculatePosition = (index: number, total: number) => {
    const radius = screenSize === 'mobile' ? 140 : screenSize === 'tablet' ? 200 : 260;
    const angle = (index / total) * 2 * Math.PI;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y, angle: (angle * 180) / Math.PI };
  };

  // More stable gradient text for SERVICES title
  const GradientText = () => {
    return (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <svg className="w-full h-3/4" viewBox="0 0 400 100">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="50%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="url(#gradient)"
              fontWeight="bold"
              fontSize={screenSize === 'mobile' ? "30" : "48"}
              fontFamily="sans-serif"
              letterSpacing="2"
            >
              SERVICES
            </text>
          </svg>
        </div>
      </div>
    );
  };

  // Simplified tilt effect with hover stability
  const Tilt = React.memo(({ children, color }: { children: React.ReactNode; color?: string }) => {
    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${color || '#4F46E5'}15, rgba(255,255,255,0.9) 100%)`,
        }}
        className="h-full w-full rounded-lg will-change-transform"
      >
        {children}
      </div>
    );
  });
  Tilt.displayName = 'Tilt';

  // Simplified card background
  const CardBackground = ({ color }: { color?: string }) => {
    return (
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path 
                d="M 20 0 L 0 0 0 20" 
                fill="none" 
                stroke={color || "#4F46E5"} 
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect width="80" height="80" fill="url(#smallGrid)" />
              <path 
                d="M 80 0 L 0 0 0 80" 
                fill="none" 
                stroke={color || "#4F46E5"} 
                strokeWidth="1"
                opacity="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    );
  };

  // Service card component for the orbiting cards
  const ServiceCard = ({ service }: { service: Service }) => {
    return (
      <div className="relative overflow-hidden rounded-lg shadow-lg w-full h-full">
        <CardBackground color={service.color} />
        
        <Tilt color={service.color}>
          <div className="p-3 h-full flex flex-col items-center justify-center text-center">
            <h3 className={`text-gray-800 font-bold mb-2 ${screenSize === 'mobile' ? 'text-xs' : screenSize === 'tablet' ? 'text-sm' : 'text-base'}`}>
              {service.title}
            </h3>
            
            {service.subtitle && (
              <p className={`text-gray-500 ${screenSize === 'mobile' ? 'text-xs' : 'text-sm'} mb-1`}>
                {service.subtitle}
              </p>
            )}
            
            {service.icon && (
              <div 
                className={`text-indigo-600 ${screenSize === 'mobile' ? 'w-8 h-8' : screenSize === 'tablet' ? 'w-10 h-10' : 'w-12 h-12'} mt-1`}
                style={{ color: service.color || '#4F46E5' }}
              >
                {service.icon}
              </div>
            )}
          </div>
        </Tilt>
      </div>
    );
  };

  // Service Card with rotation counter-logic to keep card upright
  const RotatingServiceCard = ({ service, index, total }: { service: Service; index: number; total: number }) => {
    const isHovered = hoveredIndex === index;
    const ref = useRef(null);
    
    // Calculate position
    const position = calculatePosition(index, total);
    
    // Card size based on screen
    const cardSize = screenSize === 'mobile' ? 
      'w-24 h-36' : 
      screenSize === 'tablet' ? 
      'w-32 h-44' : 
      'w-40 h-52';
    
    return (
      <div className="absolute" style={{ 
        transform: `translate(${position.x}px, ${position.y}px)`,
        zIndex: isHovered ? 50 : 10
      }}>
        <motion.div
          ref={ref}
          className={`${cardSize} origin-center`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: -position.angle, // Counter-rotate to keep upright while parent rotates
            transition: { 
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: index * 0.1
            }
          }}
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
          onMouseEnter={() => {
            setHoveredIndex(index);
            setIsPaused(true);
          }}
          onMouseLeave={() => {
            setHoveredIndex(null);
            setIsPaused(false);
          }}
        >
          <ServiceCard service={service} />
          
          {/* Border highlight on hover */}
          <div 
            className="absolute inset-0 rounded-lg border-2 transition-opacity duration-200" 
            style={{ 
              borderColor: service.color || '#4F46E5',
              opacity: isHovered ? 1 : 0
            }}
          ></div>
        </motion.div>
      </div>
    );
  };
  
  // Center service card
  const CenterCard = () => {
    return (
      <motion.div
        className={`${screenSize === 'mobile' ? 'w-40 h-40' : screenSize === 'tablet' ? 'w-60 h-60' : 'w-80 h-80'} rounded-full bg-gradient-to-br from-indigo-50 to-blue-100 shadow-lg flex items-center justify-center z-20`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          transition: { 
            type: "spring", 
            stiffness: 100, 
            damping: 20,
            delay: 0.2
          }
        }}
      >
        <GradientText />
      </motion.div>
    );
  };
  
  // CTA button at the bottom
  const CTAButton = () => {
    if (!ctaCard) return null;
    
    return (
      <motion.div 
        className="mt-8 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 1, duration: 0.5 }
        }}
      >
        <motion.button
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-medium shadow-lg relative overflow-hidden text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {ctaCard.buttonText || "Get Started"}
        </motion.button>
      </motion.div>
    );
  };

  // Simplified particles background
  const ParticlesBackground = () => {
    return (
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
        {/* Static background patterns instead of animated particles */}
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#4F46E5" />
              <circle cx="10" cy="10" r="1" fill="#06B6D4" />
              <circle cx="18" cy="18" r="1" fill="#8B5CF6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-indigo-100 relative overflow-hidden"
      id="services"
    >
      <ParticlesBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto"></div>
        </div>
        
        {/* Rotating services container */}
        <div className="relative flex justify-center items-center" style={{ height: screenSize === 'mobile' ? '480px' : screenSize === 'tablet' ? '600px' : '700px' }}>
          {/* Center "SERVICES" card */}
          <div className="absolute z-20">
            <CenterCard />
          </div>
          
          {/* Rotating orbit with service cards */}
          <motion.div 
            className="absolute w-full h-full flex items-center justify-center"
            animate={rotationControls}
          >
            {serviceCards.map((service, index) => (
              <RotatingServiceCard 
                key={index}
                service={service}
                index={index}
                total={serviceCards.length}
              />
            ))}
          </motion.div>
        </div>
        
        {/* CTA Button */}
        <CTAButton />
      </div>
    </section>
  );
};

export default RotatingServicesSection;