"use client"

import { Droplet, Truck, Zap, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Features() {
  const featuresRef = useRef(null)
  const highlightsRef = useRef(null)
  const aboutRef = useRef(null)
  const waterRef = useRef(null)
  
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 })
  const highlightsInView = useInView(highlightsRef, { once: true, amount: 0.2 })
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.2 })
  const waterInView = useInView(waterRef, { once: true, amount: 0.2 })

  const features = [
    {
      icon: Droplet,
      title: "Great Composition",
      description:
        "Our refreshing purified bottled water can be delivered directly to your door with our water delivery service.",
    },
    {
      icon: Truck,
      title: "Fast shipping",
      description:
        "Our refreshing purified bottled water can be delivered directly to your door with our water delivery service.",
    },
    {
      icon: Zap,
      title: "Nano Filtration",
      description:
        "Our refreshing purified bottled water can be delivered directly to your door with our water delivery service.",
    },
  ]

  const highlights = [
    { icon: CheckCircle, text: "Laboratory tested" },
    { icon: CheckCircle, text: "Great composition" },
    { icon: CheckCircle, text: "Nano Filtration" },
  ]

  return (
    <>
      {/* Features Grid Section */}
      <section ref={featuresRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div 
                  key={index} 
                  className="text-center p-6 hover:bg-sky-50 rounded-xl transition group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-8 h-8 text-[#003367]" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#003367] transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{feature.description}</p>
                  <motion.a
                    href="#"
                    className="text-[#003367] hover:text-blue-600 font-semibold text-sm inline-flex items-center gap-1"
                    whileHover={{ x: 5 }}
                  >
                    Learn more <ArrowRight size={16} />
                  </motion.a>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="delivery" ref={highlightsRef} className="py-16 md:py-24 bg-sky-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Image */}
            <motion.div 
              className="flex-1 order-2 md:order-1"
              initial={{ opacity: 0, x: -50 }}
              animate={highlightsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-64 h-80 mx-auto">
                <Image src="/water-jug-bottle-professional.jpg" alt="Water bottle highlights" fill className="object-contain drop-shadow-2xl" />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              className="flex-1 order-1 md:order-2"
              initial={{ opacity: 0, x: 50 }}
              animate={highlightsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                READY TO GET
                <br />
                <span className="text-[#003367]">HYDRATED?</span>
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed">
                To drink the best water please come to us and give us an order.
              </p>

              {/* Highlights */}
              <div className="space-y-4 mb-8">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon
                  return (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={highlightsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#003367]" />
                      </div>
                      <span className="text-gray-700 font-medium">{highlight.text}</span>
                    </motion.div>
                  )
                })}
              </div>

              <motion.button 
                className="bg-[#003367] hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Order Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Content */}
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                LEADER IN
                <br />
                <span className="text-[#003367]">INDUSTRY</span>
              </h2>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">ABOUT US</p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Our refreshing purified bottled water can be delivered directly to your door with our water delivery
                service. Core feedback validates areas to be an partner with you. Sed tempore vitae fermentum. Vivamus
                lacus tortor fermentum. Velit ante, pretium at fellas ac, tempor id est. Sed aliqua cum. Cum lorem
                maximus fringilla leo sed bibendum fringilla justo.
              </p>

              <motion.a 
                href="/about" 
                className="text-[#003367] hover:text-blue-600 font-semibold inline-flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                Read more <ArrowRight size={18} />
              </motion.a>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-80 h-96 mx-auto">
                <Image src="/man-with-water-bottles-professional-portrait.jpg" alt="Industry leader" fill className="object-contain drop-shadow-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Water Section */}
      <section ref={waterRef} className="py-16 md:py-24 bg-sky-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Content */}
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              animate={waterInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                OUR DRINKING
                <br />
                <span className="text-[#003367]">WATER</span>
              </h2>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">ABOUT PRODUCTS</p>

              <p className="text-gray-600 leading-relaxed">
                Our refreshing purified bottled water can now be delivered directly to your door with our water delivery
                service. Core feedback validates areas to be an partner with you. Sed tempore vitae fermentum. Vivamus
                lacus tortor fermentum. Velit ante, pretium at fellas ac, tempor id est. Sed aliqua cum.
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: 50 }}
              animate={waterInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-80 h-96 mx-auto">
                <Image src="/mountain-landscape-water-pure-nature.jpg" alt="Drinking water source" fill className="object-contain drop-shadow-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
