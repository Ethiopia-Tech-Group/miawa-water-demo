"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function ChooseWater() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const products = [
    {
      id: 1,
      name: "0.5 L ",
      image: "/0.5 L.jpg",
      badge: "SALE",
    },
    {
      id: 2,
      name: "1 L",
      image: "/1l.jpg",
      featured: true,
    },
    {
      id: 3,
      name: "Portable Bottle",
      image: "/portable-water-bottle-with-handle.jpg",
    },
  ]

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            CHOOSE YOUR <span className="text-[#003367]">WATER</span>
          </h2>
          <p className="text-gray-500 text-sm tracking-widest">BOTTLES WE DELIVER</p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
              
              className={`relative rounded-2xl overflow-hidden transition-all md:scale-105`}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale:  1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ 
                scale:  1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Badge */}
              {/* {product.badge && (
                <motion.div 
                  className="absolute top-4 left-4 z-10"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                >
                  <Badge className="bg-[#003367] text-white px-4 py-1 rounded-full">{product.badge}</Badge>
                </motion.div>
              )} */}

              {/* Card Background */}
              <div
                className={` bg-white shadow-xl
                 p-8 rounded-2xl flex flex-col items-center justify-center h-80 md:h-96 hover:shadow-2xl transition-shadow`}
              >
                <motion.div 
                  className="relative w-40 h-40 mb-6"
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Image src="/0.5 L.jpg" alt="" fill className="object-contain" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 text-center">0.5 L</h3>
              </div>
            </motion.div>
        <motion.div
              
              className={`relative rounded-2xl overflow-hidden transition-all md:scale-105`}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale:  1.05 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 1.15 }}
              whileHover={{ 
                scale:  1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
        

              {/* Card Background */}
              <div
                className={` bg-white shadow-xl
                 p-8 rounded-2xl flex flex-col items-center justify-center h-80 md:h-96 hover:shadow-2xl transition-shadow`}
              >
                <motion.div 
                  className="relative w-64 h-56 mb-6"
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Image src="/0.5 L.jpg" alt="" fill className="object-contain w-64" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 text-center">2 L</h3>
              </div>
            </motion.div>
        <motion.div
              
              className={`relative rounded-2xl overflow-hidden transition-all md:scale-105`}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale:  1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ 
                scale:  1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Badge */}
              {/* {product.badge && (
                <motion.div 
                  className="absolute top-4 left-4 z-10"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                >
                  <Badge className="bg-[#003367] text-white px-4 py-1 rounded-full">{product.badge}</Badge>
                </motion.div>
              )} */}

              {/* Card Background */}
              <div
                className={` bg-white shadow-xl
                 p-8 rounded-2xl flex flex-col items-center justify-center h-80 md:h-96 hover:shadow-2xl transition-shadow`}
              >
                <motion.div 
                  className="relative w-40 h-48 mb-6"
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Image src="/0.5 L.jpg" alt="" fill className="object-contain" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 text-center">1 L</h3>
              </div>
            </motion.div>
          {/* {products.map((product, index) => (
            
          ))} */}
        </div>
      </div>
    </section>
  )
}
