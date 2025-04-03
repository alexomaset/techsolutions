import Link from 'next/link';
import { motion } from 'framer-motion';

// Featured projects to showcase our best work
const featuredProjects = [
  {
    title: "E-commerce Platform Redesign",
    client: "FashionForward",
    type: "Web Development",
    description: "Complete redesign of an e-commerce platform resulting in 43% increase in conversions and 68% higher average order value.",
    color: "bg-gradient-to-r from-blue-500 to-indigo-600"
  },
  {
    title: "Social Media Campaign",
    client: "EcoFriendly Products",
    type: "Digital Marketing",
    description: "Strategic social media campaign that generated 2.5M impressions, 350K engagements, and a 215% ROI within 3 months.",
    color: "bg-gradient-to-r from-green-500 to-teal-500"
  },
  {
    title: "Corporate Brand Identity",
    client: "TechInnovate",
    type: "Graphic Design",
    description: "Complete brand overhaul including logo, typography, color palette, and marketing materials that increased brand recognition by 37%.",
    color: "bg-gradient-to-r from-purple-500 to-pink-500"
  },
  {
    title: "Mobile App Development",
    client: "HealthTrack",
    type: "Mobile Development",
    description: "Developed a health tracking app with 4.8-star rating and over 500,000 downloads across iOS and Android platforms.",
    color: "bg-gradient-to-r from-red-500 to-orange-500"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p 
            className="text-blue-600 font-semibold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            PORTFOLIO HIGHLIGHTS
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A selection of our most successful client work
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className={`p-8 ${project.color} text-white h-full`}>
                <div className="mb-6">
                  <span className="px-3 py-1 bg-white bg-opacity-20 rounded text-sm font-medium">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">Client: {project.client}</p>
                <p className="mb-6 opacity-90">{project.description}</p>
                <div className="flex justify-between items-center">
                  <Link href="/services" className="text-white hover:underline font-semibold flex items-center">
                    View Details
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    {index === 0 && (
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    )}
                    {index === 3 && (
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services" className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 