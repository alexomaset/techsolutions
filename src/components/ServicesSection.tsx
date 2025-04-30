import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// Define Service interface
interface Service {
  title: string;
  icon?: React.ReactNode;
  size: string;
  subtitle?: string;
  special?: boolean;
  buttonText?: string;
}

// Define services
const services = [
  {
    title: "Web Development",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    size: "col-span-1 row-span-1",
  },
  {
    title: "Mobile App Development",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    size: "col-span-1 row-span-1",
  },
  {
    title: "Digital Marketing",
    subtitle: "and Growth",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    size: "col-span-1 row-span-1",
  },
  {
    title: "SERVICES",
    special: true,
    size: "col-span-2 row-span-2",
  },
  {
    title: "Graphic & Video Design",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
    size: "col-span-1 row-span-1",
  },
  {
    title: "Software Licenses",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    size: "col-span-1 row-span-1",
  },
  {
    title: "IT Consulting",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    size: "col-span-1 row-span-1",
  },
  {
    title: "CTA",
    buttonText: "Get Started",
    size: "col-span-1 row-span-1",
  },
  {
    title: "Start Now",
    subtitle: "Contact Us",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    size: "col-span-2 row-span-1",
  }
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  
  // Staggered animation for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      }
    }),
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3,
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      }
    },
    hover: {
      scale: 1.2,
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        times: [0, 0.3, 0.6, 1],
      }
    }
  };

  // Gradient text for SERVICES title
  const GradientText = () => {
    const [offset, setOffset] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setOffset((prevOffset) => (prevOffset + 1) % 100);
      }, 50);
      
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <svg className="w-full h-3/4" viewBox="0 0 400 100">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4F46E5">
                <animate 
                  attributeName="stop-color" 
                  values="#4F46E5; #06B6D4; #8B5CF6; #4F46E5" 
                  dur="4s" 
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stopColor="#06B6D4">
                <animate 
                  attributeName="stop-color" 
                  values="#06B6D4; #8B5CF6; #4F46E5; #06B6D4" 
                  dur="4s" 
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#8B5CF6">
                <animate 
                  attributeName="stop-color" 
                  values="#8B5CF6; #4F46E5; #06B6D4; #8B5CF6" 
                  dur="4s" 
                  repeatCount="indefinite"
                />
              </stop>
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                from={`${-100 + offset}%`}
                to={`${offset}%`}
                dur="3s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="url(#gradient)"
            fontWeight="bold"
            fontSize="60"
            fontFamily="sans-serif"
            letterSpacing="2"
          >
            SERVICES
          </text>
        </svg>
      </div>
    );
  };

  // 3D tilt effect on card hover
  const Tilt = ({ children }: { children: React.ReactNode }) => {
    const [tiltValues, setTiltValues] = useState({ x: 0, y: 0 });
    const ref = useRef<HTMLDivElement>(null);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      
      setTiltValues({ x: x * 5, y: -y * 5 });
    };
  
    const handleMouseLeave = () => {
      setTiltValues({ x: 0, y: 0 });
    };
  
    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tiltValues.y}deg) rotateY(${tiltValues.x}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
        className="h-full w-full"
      >
        {children}
      </div>
    );
  };

  const Card = ({ service, index }: { service: Service; index: number }) => {
    const isHovered = hoveredIndex === index;
    const ref = useRef<HTMLDivElement>(null);
    const cardInView = useInView(ref, { once: false, amount: 0.3 });
    const borderVariants = {
      initial: { 
        pathLength: 0,
        pathOffset: 0.5
      },
      animate: { 
        pathLength: 1,
        pathOffset: 0,
        transition: { 
          duration: 1.5, 
          ease: "easeInOut" 
        }
      }
    };
    
    if (service.special) {
      return (
        <motion.div
          ref={ref}
          className={`${service.size} flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 shadow-lg rounded-lg`}
          initial="hidden"
          animate={cardInView ? "visible" : "hidden"}
          custom={index}
          variants={cardVariants}
        >
          <GradientText />
        </motion.div>
      );
    }
    
    return (
      <motion.div
        ref={ref}
        className={`${service.size} relative overflow-hidden bg-white rounded-lg shadow-lg`}
        initial="hidden"
        animate={cardInView ? "visible" : "hidden"}
        whileHover="hover"
        custom={index}
        variants={cardVariants}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <Tilt>
          {service.buttonText ? (
            // CTA card
            <div className="flex items-center justify-center h-full bg-gradient-to-r from-blue-500 to-indigo-600">
              <motion.button
                className="px-6 py-3 bg-white text-indigo-600 rounded-full font-medium shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {service.buttonText}
              </motion.button>
            </div>
          ) : (
            <div className="p-6 h-full flex flex-col">
              <div className="flex-1">
                <h3 className="text-gray-800 text-xl md:text-2xl font-medium mb-1">{service.title}</h3>
                {service.subtitle && (
                  <p className="text-gray-500 text-sm">{service.subtitle}</p>
                )}
              </div>
              
              {service.icon && (
                <motion.div 
                  className="w-16 h-16 md:w-20 md:h-20 text-indigo-600"
                  variants={iconVariants}
                >
                  {service.icon}
                </motion.div>
              )}
            </div>
          )}
        </Tilt>
        
        {/* Animated border effect on hover */}
        <svg className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none" style={{ zIndex: 10 }}>
          <motion.rect
            width="100%"
            height="100%"
            fill="none"
            stroke={isHovered ? "url(#borderGradient)" : "transparent"}
            strokeWidth="2"
            initial="initial"
            animate={isHovered ? "animate" : "initial"}
            variants={borderVariants}
            rx="8"
            ry="8"
          />
          <defs>
            <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    );
  };

  // Floating particles background effect
  const ParticlesBackground = () => {
    return (
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => {
          const size = Math.random() * 10 + 5;
          const duration = Math.random() * 20 + 10;
          const delay = Math.random() * 10;
          const initialX = Math.random() * 100;
          const initialY = Math.random() * 100;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-200 opacity-30"
              style={{
                width: size,
                height: size,
                left: `${initialX}%`,
                top: `${initialY}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 40 - 20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    );
  };

  // Scroll-triggered section animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.section 
      ref={sectionRef}
      style={{ opacity, scale }}
      className="py-24 bg-gradient-to-b from-blue-50 to-indigo-100 relative overflow-hidden"
      id="services"
    >
      <ParticlesBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;