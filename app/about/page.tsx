"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Droplet, Award, Users, Globe, CheckCircle, TrendingUp } from "lucide-react"

// export const metadata = {
//   title: "About Us - Miawa Water | Premium Water Delivery Since 2008",
//   description: "Learn about Miawa Water's commitment to quality, purity, and customer satisfaction. Delivering premium water since 2008 with advanced nano-filtration technology.",
// }

export default function AboutPage() {
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const statsRef = useRef(null)
  
  const heroInView = useInView(heroRef, { once: true })
  const storyInView = useInView(storyRef, { once: true, amount: 0.2 })
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 })
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 })

  const values = [
    {
      icon: Droplet,
      title: "Pure Quality",
      description: "We ensure the highest quality water through rigorous testing and advanced filtration systems.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering excellence in every bottle and every customer interaction.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your health and satisfaction are at the heart of everything we do.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "We're dedicated to protecting our environment through eco-friendly practices.",
    },
  ]

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "50K+", label: "Bottles Delivered" },
    { number: "15+", label: "Years Experience" },
    { number: "99.9%", label: "Purity Level" },
  ]

  return (
    <main className="bg-white">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/mountain-landscape-water-pure-nature.jpg" 
            alt="About Miawa Water" 
            fill 
            className="object-cover brightness-75" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-sky-900/50" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                About <span className="text-sky-300">Miawa Water</span>
              </motion.h1>
              <motion.p 
                className="text-white/90 text-md md:text-lg max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Delivering pure, healthy water to your doorstep 
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-[#003367]">Story</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">Miawa Spring Water, a product of Miawa Import and Export PLC, is committed to providing safe, high-quality hydration sourced from the abundant natural springs of Menagesha, Oromia Region, Ethiopia. We believe in the fundamental importance of clean water for health and socio-economic development. </p>
              <br />
              <p className="text-gray-600 leading-relaxed">
                
                Our state-of-the-art bottling facility adheres to stringent quality control measures, ensuring every bottle of Miawa water meets the highest standards of purity. As a proud Ethiopian company, we are deeply invested in our community, prioritizing local employment—with 85% of our staff hired from the surrounding area—and aiming to make a tangible, positive impact on the lives of our consumers and neighbors.</p> 
              <br/>
              <p className="text-gray-600 leading-relaxed">
                Today, we proudly serve thousands of homes and businesses, maintaining our commitment to 
                quality, service, and sustainability. Every bottle we deliver represents our dedication 
                to your health and well-being.
              </p>
            </motion.div>
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/water-jug-bottle-professional.jpg" 
                  alt="Miawa Water Quality" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section ref={valuesRef} className="py-20 md:py-32 bg-gradient-to-b from-sky-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#003367]">Values</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These core principles guide everything we do at Miawa Water
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -10 }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-8 h-8 text-[#003367]" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 md:py-32 bg-[#003367] relative overflow-hidden">
        {/* Decorative Background */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-sky-300">Impact</span>
            </h2>
            <p className="text-white/80 text-lg">
              Numbers that tell our story
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div 
                  className="text-5xl md:text-6xl font-bold text-sky-300 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/90 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-sky-50/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-[#003367]">Journey</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Experience the difference that pure, quality water can make in your life
            </p>
            <motion.button 
              className="bg-[#003367] hover:bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
