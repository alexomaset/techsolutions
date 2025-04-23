import Link from 'next/link';
import Image from 'next/image';
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

const slideFromRight = {
  hidden: { opacity: 0, x: 50 },
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

interface AnimatedLetterProps {
  text: string;
  index: number;
}

const AnimatedLetter: React.FC<AnimatedLetterProps> = ({ text, index }) => {
  return (
    <motion.span
      custom={index}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.06,
            duration: 0.5
          }
        })
      }}
      initial="hidden"
      animate="visible"
      className="inline-block"
    >
      {text}
    </motion.span>
  );
};

interface AnimatedTitleProps {
  text: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ text }) => {
  const words = text.split(" ");
  
  return (
    <div className="overflow-visible w-full flex flex-col">
      {words.map((word, wordIndex) => (
        <div key={wordIndex} className="overflow-hidden">
          <motion.div
            className={`inline-block ${wordIndex === 0 ? "text-yellow-300" : wordIndex === words.length - 1 ? "text-amber-400" : ""}`}
            variants={{
              hidden: { y: 100, opacity: 0 },
              visible: { 
                y: 0, 
                opacity: 1,
                transition: { 
                  delay: wordIndex * 0.15,
                  duration: 0.5,
                  ease: "easeOut"
                }
              }
            }}
          >
            {word}
            {wordIndex !== words.length - 1 && <span>&nbsp;</span>}
          </motion.div>
        </div>
      ))}
    </div>
  );
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
      {/* Background image */}
      <Image
        src="/bg.webp"
        alt="Hero background"
        fill
        priority
        className="absolute inset-0 object-cover object-center brightness-90 -z-10"
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
          {/* Text content column - full width on mobile, 8/12 on larger screens to ensure more space */}
          <motion.div
            className="md:col-span-8 text-center md:text-left px-2 md:px-4 py-8 mx-auto md:mx-0 overflow-visible"
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
                  <span className="text-yellow-400 ml-3">Technology</span>
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-gray-200 text-lg md:text-xl mb-8 max-w-lg"
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
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-full shadow-lg transition transform hover:scale-105 hover:shadow-yellow-500/20 hover:shadow-xl"
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

          {/* Right column - can be used for an image or another element */}
          <motion.div
            className="hidden md:block md:col-span-4"
            initial="hidden"
            animate="visible"
            variants={slideFromRight}
          >
            {/* You can add an image or another element here if needed */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;