"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 12
    } 
  }
};

export default function ServicesPage() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      title: "Web Development",
      description: "Custom-built, responsive websites and web applications that engage visitors and drive business growth.",
      icon: (
        <svg className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "blue" as ColorName,
      features: [
        "Responsive design",
        "CMS integration",
        "E-commerce functionality",
        "Performance optimization",
        "SEO-friendly structure"
      ]
    },
    {
      title: "Mobile App Development",
      description: "Intuitive, feature-rich mobile applications for iOS and Android that extend your reach to mobile users.",
      icon: (
        <svg className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: "purple" as ColorName,
      features: [
        "Native and cross-platform apps",
        "User-friendly interfaces",
        "Offline functionality",
        "Push notifications",
        "App store optimization"
      ]
    },
    {
      title: "UI/UX Design",
      description: "Thoughtfully designed user interfaces and experiences that enhance usability and user satisfaction.",
      icon: (
        <svg className="h-10 w-10 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      color: "pink" as ColorName,
      features: [
        "User research",
        "Wireframing and prototyping",
        "Visual design",
        "Usability testing",
        "Design systems"
      ]
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that increase brand awareness, drive traffic, and convert visitors into customers.",
      icon: (
        <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      color: "green" as ColorName,
      features: [
        "SEO optimization",
        "Content marketing",
        "Social media management",
        "Email marketing",
        "Analytics and reporting"
      ]
    },
    {
      title: "E-commerce Solutions",
      description: "End-to-end e-commerce solutions that simplify online selling and enhance customer shopping experiences.",
      icon: (
        <svg className="h-10 w-10 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "yellow" as ColorName,
      features: [
        "Product catalog management",
        "Secure payment integration",
        "Inventory management",
        "Customer account management",
        "Order processing and fulfillment"
      ]
    },
    {
      title: "IT Consulting",
      description: "Expert guidance on leveraging technology to optimize operations, reduce costs, and achieve business objectives.",
      icon: (
        <svg className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      color: "red" as ColorName,
      features: [
        "Technology assessment",
        "Digital transformation strategy",
        "Process optimization",
        "System integration",
        "IT infrastructure planning"
      ]
    }
  ];

  type ColorName = 'blue' | 'purple' | 'pink' | 'green' | 'yellow' | 'red';
  
  const getColorClasses = (color: ColorName) => {
    const colorMap = {
      blue: {
        light: 'bg-blue-50',
        medium: 'bg-blue-100',
        dark: 'bg-blue-600',
        border: 'border-blue-200',
        text: 'text-blue-600',
        hover: 'hover:bg-blue-600 hover:text-white'
      },
      purple: {
        light: 'bg-purple-50',
        medium: 'bg-purple-100',
        dark: 'bg-purple-600',
        border: 'border-purple-200',
        text: 'text-purple-600',
        hover: 'hover:bg-purple-600 hover:text-white'
      },
      pink: {
        light: 'bg-pink-50',
        medium: 'bg-pink-100',
        dark: 'bg-pink-600',
        border: 'border-pink-200',
        text: 'text-pink-600',
        hover: 'hover:bg-pink-600 hover:text-white'
      },
      green: {
        light: 'bg-green-50',
        medium: 'bg-green-100',
        dark: 'bg-green-600',
        border: 'border-green-200',
        text: 'text-green-600',
        hover: 'hover:bg-green-600 hover:text-white'
      },
      yellow: {
        light: 'bg-yellow-50',
        medium: 'bg-yellow-100',
        dark: 'bg-yellow-600',
        border: 'border-yellow-200',
        text: 'text-yellow-600',
        hover: 'hover:bg-yellow-600 hover:text-white'
      },
      red: {
        light: 'bg-red-50',
        medium: 'bg-red-100',
        dark: 'bg-red-600',
        border: 'border-red-200',
        text: 'text-red-600',
        hover: 'hover:bg-red-600 hover:text-white'
      }
    };
    
    return colorMap[color] || colorMap.blue;
  };

  // Create refs individually instead of in a map callback
  const service0Ref = useInView({ triggerOnce: true, threshold: 0.1 });
  const service1Ref = useInView({ triggerOnce: true, threshold: 0.1 });
  const service2Ref = useInView({ triggerOnce: true, threshold: 0.1 });
  const service3Ref = useInView({ triggerOnce: true, threshold: 0.1 });
  const service4Ref = useInView({ triggerOnce: true, threshold: 0.1 });
  const service5Ref = useInView({ triggerOnce: true, threshold: 0.1 });
  
  // Array to easily access the refs by index
  const serviceRefs = [
    service0Ref,
    service1Ref,
    service2Ref,
    service3Ref,
    service4Ref,
    service5Ref
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section 
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-20 bg-gradient-to-br from-indigo-50 to-white relative overflow-hidden"
      >
        <div className="absolute right-0 top-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-100 rounded-full opacity-60"></div>
        <div className="absolute left-0 bottom-0 -ml-16 -mb-16 w-80 h-80 bg-blue-100 rounded-full opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={fadeIn} className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-700 text-sm font-semibold mb-6">
              Our Services
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Digital Solutions for Your Business
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-gray-700 mb-10 leading-relaxed">
              We offer a wide range of services designed to help your business thrive in the digital landscape. From web development to digital marketing, we have the expertise to meet your needs.
            </motion.p>
            <motion.div variants={fadeIn}>
              <div className="flex justify-center space-x-4">
                <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
                <div className="h-1 w-10 bg-blue-400 rounded-full"></div>
                <div className="h-1 w-5 bg-blue-300 rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const serviceRef = serviceRefs[index];
                
                const colorClasses = getColorClasses(service.color);
                
                return (
                  <motion.div
                    key={index}
                    ref={serviceRef[0]}
                    initial="hidden"
                    animate={serviceRef[1] ? "visible" : "hidden"}
                    variants={cardVariant}
                    className={`${colorClasses.light} border ${colorClasses.border} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <div className="p-8">
                      <div className={`${colorClasses.medium} h-16 w-16 rounded-full flex items-center justify-center mb-6`}>
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-8">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <svg className={`h-5 w-5 ${colorClasses.text} mr-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact" className={`inline-block px-6 py-3 rounded-lg border ${colorClasses.border} ${colorClasses.text} font-semibold ${colorClasses.hover} transition-colors duration-300`}>
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-700">
              Our streamlined approach ensures that we deliver high-quality solutions that meet your business needs and exceed your expectations.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
              
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="md:flex items-center">
                  <motion.div 
                    className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                      <h3 className="text-xl font-bold text-blue-600 mb-2">1. Discovery</h3>
                      <p className="text-gray-700">
                        We start by understanding your business objectives, target audience, and specific requirements to create a solid foundation for your project.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="md:w-1/2 flex justify-start md:justify-center relative"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                      1
                    </div>
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-200 transform -translate-y-1/2 hidden md:block"></div>
                  </motion.div>
                </div>
                
                {/* Step 2 */}
                <div className="md:flex items-center">
                  <motion.div 
                    className="md:w-1/2 flex justify-end md:justify-center relative order-1 md:order-none"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="h-16 w-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                      2
                    </div>
                    <div className="absolute top-1/2 right-0 w-full h-1 bg-blue-200 transform -translate-y-1/2 hidden md:block"></div>
                  </motion.div>
                  <motion.div 
                    className="md:w-1/2 mb-8 md:mb-0 md:pl-12 order-none md:order-1"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                      <h3 className="text-xl font-bold text-green-600 mb-2">2. Planning</h3>
                      <p className="text-gray-700">
                        We create a detailed project plan, including timelines, milestones, and deliverables to ensure a smooth development process.
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                {/* Step 3 */}
                <div className="md:flex items-center">
                  <motion.div 
                    className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                      <h3 className="text-xl font-bold text-purple-600 mb-2">3. Design</h3>
                      <p className="text-gray-700">
                        Our designers create wireframes, mockups, and prototypes to visualize the solution before development begins, ensuring alignment with your vision.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="md:w-1/2 flex justify-start md:justify-center relative"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="h-16 w-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                      3
                    </div>
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-200 transform -translate-y-1/2 hidden md:block"></div>
                  </motion.div>
                </div>
                
                {/* Step 4 */}
                <div className="md:flex items-center">
                  <motion.div 
                    className="md:w-1/2 flex justify-end md:justify-center relative order-1 md:order-none"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="h-16 w-16 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                      4
                    </div>
                    <div className="absolute top-1/2 right-0 w-full h-1 bg-blue-200 transform -translate-y-1/2 hidden md:block"></div>
                  </motion.div>
                  <motion.div 
                    className="md:w-1/2 mb-8 md:mb-0 md:pl-12 order-none md:order-1"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                      <h3 className="text-xl font-bold text-pink-600 mb-2">4. Development</h3>
                      <p className="text-gray-700">
                        Our experienced developers build your solution using the latest technologies and best practices, with regular updates and progress reports.
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                {/* Step 5 */}
                <div className="md:flex items-center">
                  <motion.div 
                    className="md:w-1/2 mb-8 md:mb-0 md:pr-12 md:text-right"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                      <h3 className="text-xl font-bold text-yellow-600 mb-2">5. Testing</h3>
                      <p className="text-gray-700">
                        We conduct thorough testing to ensure your solution is robust, secure, and performs optimally across all devices and platforms.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="md:w-1/2 flex justify-start md:justify-center relative"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="h-16 w-16 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                      5
                    </div>
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-200 transform -translate-y-1/2 hidden md:block"></div>
                  </motion.div>
                </div>
                
                {/* Step 6 */}
                <div className="md:flex items-center">
                  <motion.div 
                    className="md:w-1/2 flex justify-end md:justify-center relative order-1 md:order-none"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="h-16 w-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                      6
                    </div>
                    <div className="absolute top-1/2 right-0 w-full h-1 bg-blue-200 transform -translate-y-1/2 hidden md:block"></div>
                  </motion.div>
                  <motion.div 
                    className="md:w-1/2 mb-8 md:mb-0 md:pl-12 order-none md:order-1"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md inline-block">
                      <h3 className="text-xl font-bold text-red-600 mb-2">6. Launch & Support</h3>
                      <p className="text-gray-700">
                        We deploy your solution and provide ongoing support and maintenance to ensure its continued success and optimal performance.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-700">
              Don&apos;t just take our word for it - hear what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                className="bg-gray-50 p-8 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  &quot;TechSolutions transformed our outdated website into a modern, mobile-friendly platform that perfectly represents our brand. Their expertise and attention to detail were impressive throughout the project.&quot;
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    JD
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Jane Doe</h4>
                    <p className="text-gray-600">CEO, MarketEdge</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 p-8 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  &quot;Their SEO and content marketing strategy has significantly increased our online visibility. We&apos;re now ranking on the first page for our key search terms. Couldn&apos;t be happier with the results!&quot;
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    RS
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Robert Smith</h4>
                    <p className="text-gray-600">Marketing Director, TechGrowth</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gray-50 p-8 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  &quot;As a small business owner, I&apos;m always looking for cost-effective solutions. TechSolutions delivered a beautiful e-commerce site within our budget and timeframe.&quot;
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    AJ
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Amanda Johnson</h4>
                    <p className="text-gray-600">Operations Manager, InnovateCorp</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
              <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
                Contact us today to discuss how our services can help your business achieve its goals and stay ahead of the competition.
              </p>
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg inline-flex items-center gap-2"
              >
                Get Started Today
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 