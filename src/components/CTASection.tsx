import Link from 'next/link';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Digital Presence?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
              Contact us today for a free consultation and discover how our services can transform your business.
            </p>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-yellow-600 rounded-lg font-semibold hover:bg-yellow-50 transition duration-300 shadow-lg inline-flex items-center"
            >
              Start Your Project
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 