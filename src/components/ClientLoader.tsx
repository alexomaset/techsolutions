'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ClientLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate minimum loading time
    const minLoadTime = setTimeout(() => {
      setLoading(false)
    }, 2000)

    // Detect when the page is fully loaded
    const handleLoad = () => {
      clearTimeout(minLoadTime)
      setTimeout(() => setLoading(false), 500)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    // Add no-scroll class to body
    if (loading) {
      document.body.classList.add('no-scroll')
    }

    return () => {
      clearTimeout(minLoadTime)
      window.removeEventListener('load', handleLoad)
      document.body.classList.remove('no-scroll')
    }
  }, [loading])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900"
        >
          <div className="relative w-28 h-28 md:w-40 md:h-40">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0.8, scale: 0.8 }}
                animate={{ 
                  opacity: [0.8, 1, 0.8],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-yellow-500/20 backdrop-blur-sm"
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg className="w-24 h-24 md:w-32 md:h-32" viewBox="0 0 100 100">
                <circle 
                  cx="50" cy="50" r="40" 
                  stroke="#FFCB05" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  strokeDasharray="120 240" 
                  fill="none" 
                />
              </svg>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-yellow-400 font-bold text-2xl">TS</span>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <h3 className="text-yellow-300 text-xl font-semibold mb-2">Tech Solutions</h3>
            <div className="flex space-x-2 justify-center">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "loop",
                  times: [0, 0.5, 1],
                  delay: 0
                }}
                className="h-3 w-3 bg-yellow-300 rounded-full"
              />
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "loop",
                  times: [0, 0.5, 1],
                  delay: 0.2
                }}
                className="h-3 w-3 bg-yellow-300 rounded-full"
              />
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "loop",
                  times: [0, 0.5, 1],
                  delay: 0.4
                }}
                className="h-3 w-3 bg-yellow-300 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 