import { motion } from 'framer-motion';
import Link from 'next/link';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const SoftwareSolutions = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-yellow-50 relative">
      {/* Authorized badge in corner */}
      <motion.div 
        className="absolute top-5 right-5 md:top-10 md:right-10 bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg shadow-lg transform rotate-6 z-10"
        initial={{ scale: 0, rotate: 12 }}
        whileInView={{ scale: 1, rotate: 6 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="uppercase text-xs tracking-wider">Authorized</div>
        <div className="uppercase text-sm tracking-wider">Reseller</div>
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInFromLeft} className="text-4xl font-bold text-gray-900 mb-6">
            Premium Software Solutions
          </motion.h2>
          <motion.p variants={fadeInFromRight} className="text-xl text-gray-600">
            As an authorized reseller, we provide legitimate software licenses at 
            competitive prices. Equip your business with industry-leading tools.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side with product list */}
          <div className="lg:col-span-2 space-y-6">
            {/* Microsoft 365 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden flex items-center p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-blue-100 rounded-full p-2 mr-4">
                <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.5 2.75h-8a.75.75 0 00-.75.75v8c0 .414.336.75.75.75h8a.75.75 0 00.75-.75v-8a.75.75 0 00-.75-.75zm0 10h-8a.75.75 0 00-.75.75v8c0 .414.336.75.75.75h8a.75.75 0 00.75-.75v-8a.75.75 0 00-.75-.75zm10-10h-8a.75.75 0 00-.75.75v8c0 .414.336.75.75.75h8a.75.75 0 00.75-.75v-8a.75.75 0 00-.75-.75zm0 10h-8a.75.75 0 00-.75.75v8c0 .414.336.75.75.75h8a.75.75 0 00.75-.75v-8a.75.75 0 00-.75-.75z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Microsoft 365</h3>
                <p className="text-gray-600 text-sm">Complete productivity suite for businesses of all sizes</p>
              </div>
            </motion.div>

            {/* Adobe Creative Cloud */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden flex items-center p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-red-100 rounded-full p-2 mr-4">
                <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Adobe Creative Cloud</h3>
                <p className="text-gray-600 text-sm">Professional creative tools for designers and content creators</p>
              </div>
            </motion.div>

            {/* Cloud Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden flex items-center p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-indigo-100 rounded-full p-2 mr-4">
                <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.636 4.636a9 9 0 010 12.728M12 5a7 7 0 010 14M18.364 4.636a9 9 0 010 12.728M8.172 8.172a5 5 0 010 7.656"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Cloud Services</h3>
                <p className="text-gray-600 text-sm">Secure cloud storage and computing solutions</p>
              </div>
            </motion.div>

            {/* Cybersecurity Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-md overflow-hidden flex items-center p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-green-100 rounded-full p-2 mr-4">
                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">Cybersecurity Solutions</h3>
                <p className="text-gray-600 text-sm">Enterprise-grade protection for your business data</p>
              </div>
            </motion.div>

            {/* View Software Catalog Button */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                href="/software-catalog" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                View Software Catalog
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right side with authorized reseller card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-indigo-600 rounded-2xl shadow-xl overflow-hidden text-white relative"
          >
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Authorized Reseller</h3>
                  <p className="text-indigo-200 text-sm">Official partner & certified provider</p>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <div className="flex justify-between items-center border-b border-indigo-500 pb-3">
                  <span>Microsoft 365 Business</span>
                  <span className="font-semibold">From $12.50/mo</span>
                </div>
                <div className="flex justify-between items-center border-b border-indigo-500 pb-3">
                  <span>Adobe Creative Cloud</span>
                  <span className="font-semibold">From $52.99/mo</span>
                </div>
                <div className="flex justify-between items-center border-b border-indigo-500 pb-3">
                  <span>Cloud Storage (1TB)</span>
                  <span className="font-semibold">From $9.99/mo</span>
                </div>
                <div className="flex justify-between items-center border-b border-indigo-500 pb-3">
                  <span>Security Suite</span>
                  <span className="font-semibold">From $15.99/mo</span>
                </div>
              </div>

              <div className="mt-8 bg-indigo-700 -mx-6 p-4 rounded-t-xl">
                <div className="text-indigo-200 font-semibold mb-1">Special Offer:</div>
                <div className="text-white">10% discount on annual subscriptions</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSolutions; 