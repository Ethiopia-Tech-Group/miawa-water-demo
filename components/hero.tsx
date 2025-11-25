"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Noto_Sans_Ethiopic } from "next/font/google";

const notoEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  weight: ["400", "700"],
  variable: "--font-noto-ethiopic",
});

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/miawa.png" 
          alt="Pure water" 
          fill 
          className="object-cover" 
          priority 
        />
        {/* Enhanced Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003367]/80 via-[#003367]/70 to-transparent" />
        
        {/* Animated Water Bubbles Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: '-50px',
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
              }}
              animate={{
                y: [-50, -800],
                x: [0, Math.random() * 100 - 50],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0.8],
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Water Droplets */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white/20">
              <path 
                d="M12 2.69L17.66 8.35C19.78 10.47 19.78 13.88 17.66 16C15.54 18.12 12.13 18.12 10 16C7.88 13.88 7.88 10.47 10 8.35L12 6.35L14 8.35C14.39 8.74 14.39 9.37 14 9.76C13.61 10.15 12.98 10.15 12.59 9.76L12 9.17L11.41 9.76C9.5 11.67 9.5 14.67 11.41 16.58C13.32 18.49 16.32 18.49 18.23 16.58C20.14 14.67 20.14 11.67 18.23 9.76L12 3.53L5.77 9.76C3.86 11.67 3.86 14.67 5.77 16.58C7.68 18.49 10.68 18.49 12.59 16.58C13.39 15.78 13.39 14.46 12.59 13.66C12.2 13.27 11.57 13.27 11.18 13.66C10.79 14.05 10.79 14.68 11.18 15.07C12.15 16.04 13.85 16.04 14.82 15.07C15.79 14.1 15.79 12.4 14.82 11.43L12 8.61L9.18 11.43C8.21 12.4 8.21 14.1 9.18 15.07C9.57 15.46 9.57 16.09 9.18 16.48C8.79 16.87 8.16 16.87 7.77 16.48C5.86 14.57 5.86 11.57 7.77 9.66L12 5.43L16.23 9.66C17.46 10.89 17.46 12.89 16.23 14.12C15 15.35 13 15.35 11.77 14.12C10.54 12.89 10.54 10.89 11.77 9.66L12 9.43L12.23 9.66C12.62 10.05 12.62 10.68 12.23 11.07C11.84 11.46 11.21 11.46 10.82 11.07L10.35 10.6C9.54 9.79 9.54 8.47 10.35 7.66L12 6.01L13.65 7.66C14.46 8.47 14.46 9.79 13.65 10.6C13.26 10.99 13.26 11.62 13.65 12.01C14.04 12.4 14.67 12.4 15.06 12.01C16.68 10.39 16.68 7.87 15.06 6.25L12 3.19L8.94 6.25C7.32 7.87 7.32 10.39 8.94 12.01C9.33 12.4 9.33 13.03 8.94 13.42C8.55 13.81 7.92 13.81 7.53 13.42C5.5 11.39 5.5 8.07 7.53 6.04L12 1.57L16.47 6.04C18.5 8.07 18.5 11.39 16.47 13.42C14.44 15.45 11.12 15.45 9.09 13.42C8.7 13.03 8.07 13.03 7.68 13.42C7.29 13.81 7.29 14.44 7.68 14.83C10.31 17.46 14.25 17.46 16.88 14.83C19.51 12.2 19.51 8.26 16.88 5.63L12 0.75L6.12 6.63C3.49 9.26 3.49 13.2 6.12 15.83C8.75 18.46 12.69 18.46 15.32 15.83C17.95 13.2 17.95 9.26 15.32 6.63L12 3.31Z" 
                fill="currentColor"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Rotated Text on Right Side */}
      <motion.div 
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block"
        initial={{ opacity: 0, rotate: 90, x: 100 }}
        animate={{ opacity: 1, rotate: 90, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="flex items-center space-x-4">
          <motion.div 
            className="w-12 h-0.5 bg-sky-300"
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
          <motion.span 
            className="text-[#003367] font-light tracking-widest text-md uppercase whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            ጥምን የሚያረካ
          </motion.span>
          <motion.div 
            className="w-12 h-0.5 bg-sky-300"
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
        </div>
      </motion.div>

      {/* Hero Content - Right Aligned */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
          <div className="flex justify-start">
            <motion.div 
              className="max-w-2xl text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                
                <br />
                <motion.span 
                  className={`text-sky-300 inline-block ${notoEthiopic.variable}`}
                  animate={{ 
                    textShadow: [
                      "0 0 20px rgba(125, 211, 252, 0.5)",
                      "0 0 30px rgba(125, 211, 252, 0.8)",
                      "0 0 20px rgba(125, 211, 252, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  MIAWA WATER
                </motion.span>
              </motion.h1>

              <motion.p 
                className="text-white/90 text-md md:text-lg mb-8 leading-relaxed drop-shadow-lg max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We now deliver different types of bottled water. To drink the best water please come to us and give us an
                order and take safe and sound water for you.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4 items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button 
                  className="bg-[#003367] hover:bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all border-2 border-white/20 relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Button Ripple Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                  <span className="relative z-10">Order Now</span>
                </motion.button>

                {/* Secondary CTA */}
                <motion.button 
                  className="border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                className="flex flex-wrap gap-6 mt-8 text-white/80 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <span>✓</span>
                  </motion.div>
                  Certified Pure Water
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  24/7 Delivery
                </div>
                <div className="flex items-center gap-2">
                  <span>✓</span>
                  Eco-Friendly
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Animated Water Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <svg className="w-full h-32" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <motion.path
            d="M0,64 C320,96 640,32 960,64 C1280,96 1440,64 1440,64 L1440,120 L0,120 Z"
            fill="white"
            initial={{ d: "M0,64 C320,96 640,32 960,64 C1280,96 1440,64 1440,64 L1440,120 L0,120 Z" }}
            animate={{ 
              d: [
                "M0,64 C320,96 640,32 960,64 C1280,96 1440,64 1440,64 L1440,120 L0,120 Z",
                "M0,48 C320,80 640,48 960,80 C1280,48 1440,80 1440,80 L1440,120 L0,120 Z",
                "M0,64 C320,96 640,32 960,64 C1280,96 1440,64 1440,64 L1440,120 L0,120 Z"
              ]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}