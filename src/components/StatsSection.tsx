import { motion } from 'framer-motion';
import { useState } from 'react';

// Stats to impress potential clients
const stats = [
  { value: "97", label: "Satisfied Clients", suffix: "%" },
  { value: "250", label: "Projects Completed", suffix: "+" },
  { value: "10", label: "Industry Experience", suffix: "yrs" },
  { value: "24", label: "Awards Won", suffix: "" }
];

const StatsSection = () => {
  const [statsVisible, setStatsVisible] = useState(false);

  return (
    <motion.section 
      className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white"
      onViewportEnter={() => setStatsVisible(true)}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">We Deliver Results</h2>
          <p className="text-xl opacity-90">Our track record speaks for itself</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={statsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={statsVisible ? { opacity: 1 } : {}}
                  transition={{ duration: 2 }}
                >
                  {stat.value}
                </motion.span>
                {stat.suffix}
              </div>
              <p className="text-lg opacity-80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection; 