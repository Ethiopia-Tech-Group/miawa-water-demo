"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-sky-100">
      {/* Main Logo Container */}
      <motion.div
        className="relative mb-8"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        {/* Outer Ring Animation */}
        <motion.div
          className="absolute -inset-8 rounded-full border-4 border-blue-200/50"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Logo */}
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <Image
            src="/logo2.png"
            alt="Miawa Logo"
            fill
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>

        {/* Water Droplet Animation */}
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, -8, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-500">
            <path 
              d="M12 2.69L17.66 8.35C19.78 10.47 19.78 13.88 17.66 16C15.54 18.12 12.13 18.12 10 16C7.88 13.88 7.88 10.47 10 8.35L12 6.35L14 8.35C14.39 8.74 14.39 9.37 14 9.76C13.61 10.15 12.98 10.15 12.59 9.76L12 9.17L11.41 9.76C9.5 11.67 9.5 14.67 11.41 16.58C13.32 18.49 16.32 18.49 18.23 16.58C20.14 14.67 20.14 11.67 18.23 9.76L12 3.53L5.77 9.76C3.86 11.67 3.86 14.67 5.77 16.58C7.68 18.49 10.68 18.49 12.59 16.58C13.39 15.78 13.39 14.46 12.59 13.66C12.2 13.27 11.57 13.27 11.18 13.66C10.79 14.05 10.79 14.68 11.18 15.07C12.15 16.04 13.85 16.04 14.82 15.07C15.79 14.1 15.79 12.4 14.82 11.43L12 8.61L9.18 11.43C8.21 12.4 8.21 14.1 9.18 15.07C9.57 15.46 9.57 16.09 9.18 16.48C8.79 16.87 8.16 16.87 7.77 16.48C5.86 14.57 5.86 11.57 7.77 9.66L12 5.43L16.23 9.66C17.46 10.89 17.46 12.89 16.23 14.12C15 15.35 13 15.35 11.77 14.12C10.54 12.89 10.54 10.89 11.77 9.66L12 9.43L12.23 9.66C12.62 10.05 12.62 10.68 12.23 11.07C11.84 11.46 11.21 11.46 10.82 11.07L10.35 10.6C9.54 9.79 9.54 8.47 10.35 7.66L12 6.01L13.65 7.66C14.46 8.47 14.46 9.79 13.65 10.6C13.26 10.99 13.26 11.62 13.65 12.01C14.04 12.4 14.67 12.4 15.06 12.01C16.68 10.39 16.68 7.87 15.06 6.25L12 3.19L8.94 6.25C7.32 7.87 7.32 10.39 8.94 12.01C9.33 12.4 9.33 13.03 8.94 13.42C8.55 13.81 7.92 13.81 7.53 13.42C5.5 11.39 5.5 8.07 7.53 6.04L12 1.57L16.47 6.04C18.5 8.07 18.5 11.39 16.47 13.42C14.44 15.45 11.12 15.45 9.09 13.42C8.7 13.03 8.07 13.03 7.68 13.42C7.29 13.81 7.29 14.44 7.68 14.83C10.31 17.46 14.25 17.46 16.88 14.83C19.51 12.2 19.51 8.26 16.88 5.63L12 0.75L6.12 6.63C3.49 9.26 3.49 13.2 6.12 15.83C8.75 18.46 12.69 18.46 15.32 15.83C17.95 13.2 17.95 9.26 15.32 6.63L12 3.31Z" 
              fill="currentColor"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Loading Text */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-white mb-2"
          animate={{
            background: [
              "linear-gradient(45deg, #003367, #0369a1)",
              "linear-gradient(45deg, #0369a1, #003367)",
              "linear-gradient(45deg, #003367, #0369a1)",
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        //   style={{
        //     backgroundClip: "text",
        //     WebkitBackgroundClip: "text",
        //     color: "transparent",
        //   }}
        >
          Miawa
        </motion.h2>
        <p className="text-gray-600 text-sm md:text-base">Spring Water PLC</p>
      </motion.div>

      {/* Animated Progress Bar */}
      <div className="w-64 md:w-80 bg-gray-200 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Loading Dots */}
      <motion.div className="flex space-x-2 mt-6">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-2 h-2 bg-blue-500 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Skeleton Content Preview */}
    

      {/* Background Water Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-200/20"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-50px',
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
            }}
            animate={{
              y: [-50, -500],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0.8],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Loader