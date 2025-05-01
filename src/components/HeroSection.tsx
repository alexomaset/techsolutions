import Link from 'next/link';
import { motion, MotionValue } from 'framer-motion';


// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const fadeInDelay = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3 } }
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};



// Staggered children animation
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};


// Parallax prop to control vertical offset
interface HeroSectionProps {
  parallaxY?: MotionValue<string | number>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ parallaxY }) => {
  return (
    <motion.section
      className="relative w-full min-h-screen flex items-center overflow-hidden rounded-xl"
      style={{ y: parallaxY ?? 0 }}
    >
      {/* Background video */}
      <video
        src="/Intro.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover object-center brightness-90 -z-10 w-full h-full"
      />
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-yellow-300 blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 left-2/3 w-64 h-64 rounded-full bg-amber-500 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-yellow-400 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10 overflow-visible">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Text content column - left side */}
          <motion.div
            className="md:col-span-7 text-center md:text-left px-2 md:px-4 py-8 mx-auto md:mx-0 overflow-visible"
            initial="hidden"
            animate="visible"
            variants={slideFromLeft}
          >
            <motion.div
              className="inline-block mb-4 px-4 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 text-sm font-medium"
              variants={fadeIn}
            >
              Innovative Tech Solutions
            </motion.div>

            {/* Simplified, highly visible hero title */}
            <motion.div
              className="mb-6"
              variants={fadeInDelay}
            >
              <h1 className="font-extrabold leading-tight tracking-tight">
                <span className="block text-4xl md:text-5xl lg:text-6xl text-yellow-300 mb-2 drop-shadow-md">Transform</span>
                <span className="block text-4xl md:text-5xl lg:text-6xl text-yellow-200 mb-2 drop-shadow-md">Your Business</span>
                <span className="block text-4xl md:text-5xl lg:text-6xl">
                  <span className="text-yellow-200">with</span>
                  <span className="text-lime-400 ml-3">Technology</span>
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-gray-200 text-lg md:text-xl mb-8 max-w-lg md:max-w-xl"
              variants={fadeInDelay}
            >
              We deliver cutting-edge technology solutions that drive innovation, streamline operations, and accelerate growth.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
              variants={fadeInDelay}
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-yellow-700 hover:bg-yellow-600 text-gray-900 font-semibold rounded-full shadow-lg transition transform hover:scale-105 hover:shadow-yellow-500/20 hover:shadow-xl"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-transparent border-2 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 font-semibold rounded-full shadow-lg transition"
              >
                Our Solutions
              </Link>
            </motion.div>

            {/* Tech keywords */}
            <motion.div
              className="hidden md:flex flex-wrap gap-2 max-w-md"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {['AI', 'Cloud', 'IoT', 'DevOps', 'Security', 'Data'].map((tag, index) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1 bg-yellow-900/30 text-yellow-400 text-xs font-medium rounded-full border border-yellow-700/30"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { delay: 0.5 + (index * 0.1) }
                    }
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Empty right column for spacing */}
          <div className="md:col-span-5"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;