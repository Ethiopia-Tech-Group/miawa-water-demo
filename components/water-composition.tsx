"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function WaterComposition() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const minerals = [
    {
      name: "Calcium Ca²⁺",
      value: "240 mg/L",
      description: "About 99% of the calcium in our bodies is in our bones and teeth.",
    },
    {
      name: "Magnesium Mg²⁺",
      value: "42 mg/L",
      description: "Magnesium is a nutrient that the body needs to stay healthy.",
    },
    {
      name: "Sodium Na⁺",
      value: "5.2 mg/L",
      description: "Essential for proper muscle and nerve function.",
    },
    {
      name: "Sulfate SO₄²⁻",
      value: "400 mg/L",
      description: "Sulfate is among the most important macronutrients in cells.",
    },
    {
      name: "Nitrate NO₃⁻",
      value: "4.4 mg/L",
      description: "Optimal for cardiovascular health at levels under 10 mg/L.",
    },
    {
      name: "Bicarbonate HCO₃⁻",
      value: "384 mg/L",
      description: "Bicarbonate helps maintain pH balance and aids digestion.",
    },
  ]

  // Water Droplet SVG Icon
  const WaterDropletIcon = ({ className = "" }) => (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M12 2.69L17.66 8.35C19.78 10.47 19.78 13.88 17.66 16C15.54 18.12 12.13 18.12 10 16C7.88 13.88 7.88 10.47 10 8.35L12 6.35L14 8.35C14.39 8.74 14.39 9.37 14 9.76C13.61 10.15 12.98 10.15 12.59 9.76L12 9.17L11.41 9.76C9.5 11.67 9.5 14.67 11.41 16.58C13.32 18.49 16.32 18.49 18.23 16.58C20.14 14.67 20.14 11.67 18.23 9.76L12 3.53L5.77 9.76C3.86 11.67 3.86 14.67 5.77 16.58C7.68 18.49 10.68 18.49 12.59 16.58C13.39 15.78 13.39 14.46 12.59 13.66C12.2 13.27 11.57 13.27 11.18 13.66C10.79 14.05 10.79 14.68 11.18 15.07C12.15 16.04 13.85 16.04 14.82 15.07C15.79 14.1 15.79 12.4 14.82 11.43L12 8.61L9.18 11.43C8.21 12.4 8.21 14.1 9.18 15.07C9.57 15.46 9.57 16.09 9.18 16.48C8.79 16.87 8.16 16.87 7.77 16.48C5.86 14.57 5.86 11.57 7.77 9.66L12 5.43L16.23 9.66C17.46 10.89 17.46 12.89 16.23 14.12C15 15.35 13 15.35 11.77 14.12C10.54 12.89 10.54 10.89 11.77 9.66L12 9.43L12.23 9.66C12.62 10.05 12.62 10.68 12.23 11.07C11.84 11.46 11.21 11.46 10.82 11.07L10.35 10.6C9.54 9.79 9.54 8.47 10.35 7.66L12 6.01L13.65 7.66C14.46 8.47 14.46 9.79 13.65 10.6C13.26 10.99 13.26 11.62 13.65 12.01C14.04 12.4 14.67 12.4 15.06 12.01C16.68 10.39 16.68 7.87 15.06 6.25L12 3.19L8.94 6.25C7.32 7.87 7.32 10.39 8.94 12.01C9.33 12.4 9.33 13.03 8.94 13.42C8.55 13.81 7.92 13.81 7.53 13.42C5.5 11.39 5.5 8.07 7.53 6.04L12 1.57L16.47 6.04C18.5 8.07 18.5 11.39 16.47 13.42C14.44 15.45 11.12 15.45 9.09 13.42C8.7 13.03 8.07 13.03 7.68 13.42C7.29 13.81 7.29 14.44 7.68 14.83C10.31 17.46 14.25 17.46 16.88 14.83C19.51 12.2 19.51 8.26 16.88 5.63L12 0.75L6.12 6.63C3.49 9.26 3.49 13.2 6.12 15.83C8.75 18.46 12.69 18.46 15.32 15.83C17.95 13.2 17.95 9.26 15.32 6.63L12 3.31Z" 
        fill="currentColor"
      />
    </svg>
  )

  return (
    <section id="composition" ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white via-sky-50/10 to-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-100/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            Water <span className="text-[#003367]">Composition</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-[#003367] to-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-500 text-sm font-medium tracking-wide">Essential Mineral Profile</p>
        </motion.div>

        {/* Mobile Layout */}
        <div className="block md:hidden">
          <motion.div 
            className="flex justify-center mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-48 h-48">
              <Image
                src="/miawa.png"
                alt="Water composition"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          <div className="space-y-5">
            {minerals.map((mineral, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 transition-all duration-300 group relative overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Water Droplet Watermark */}
                <div className="absolute top-2 right-2 opacity-5 text-[#003367]">
                  <WaterDropletIcon className="w-16 h-16" />
                </div>
                
                <div className="flex justify-between items-start mb-3 relative z-10">
                  <h3 className="font-semibold text-gray-800 text-base tracking-tight group-hover:text-[#003367] transition-colors">
                    {mineral.name}
                  </h3>
                  <span className="text-[#003367] font-bold text-lg bg-blue-50/50 px-3 py-1 rounded-full">
                    {mineral.value}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed font-light relative z-10">{mineral.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop/Tablet Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-10 items-center">
          {/* Left Column */}
          <div className="space-y-2 pt-4">
            {minerals.slice(0, 3).map((mineral, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-7 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ x: -3, scale: 1.02 }}
              >
                {/* Water Droplet Watermark */}
                <div className="absolute top-4 right-4 opacity-10 text-blue-500">
                  <WaterDropletIcon className="w-30 h-30" />
                </div>

                <div className="text-right relative z-10">
                  <h3 className="font-semibold text-gray-800 text-lg mb-1 group-hover:text-[#003367] transition-colors tracking-tight">
                    {mineral.name}
                  </h3>
                  <div className="inline-block  text-blue-600  font-bold  text-sm rounded-full mb-3">
                    {mineral.value}
                  </div>
                  <p className="text-gray-600 h-sm text-right pr-2 border-r-2 border-blue-500  text-sm leading-relaxed pl-16 font-light">
                    {mineral.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-96 h-96">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <Image
                  src="/miawa.png"
                  alt="Water composition analysis"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-2 pt-4">
            {minerals.slice(3, 6).map((mineral, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-7 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ x: 3, scale: 1.02 }}
              >
                {/* Water Droplet Watermark */}
                <div className="absolute top-4 left-4 opacity-10 text-blue-500">
                  <WaterDropletIcon className="w-30 h-30" />
                </div>

                <div className="text-left relative z-10">
                  <h3 className="font-semibold text-gray-800 text-lg mb-1 group-hover:text-[#003367] transition-colors tracking-tight">
                    {mineral.name}
                  </h3>
                  <div className="inline-block  text-blue-600  font-bold  text-sm rounded-full mb-3">
                    {mineral.value}
                  </div>
                  <p className="text-gray-600 h-sm pl-2 border-l-2 border-blue-500  text-sm leading-relaxed w-3/4 font-light">
                    {mineral.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Professional Footer Note */}
        <motion.div 
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-400 text-sm font-light tracking-wide">
            Laboratory tested and certified • Meets international quality standards
          </p>
        </motion.div>
      </div>
    </section>
  )
}