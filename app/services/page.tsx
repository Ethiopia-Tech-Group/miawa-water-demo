"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Truck, Home, Building2, Beaker, Clock, Shield, Droplet, Phone } from "lucide-react"

export default function ServicesPage() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const processRef = useRef(null)
  const benefitsRef = useRef(null)
  
  const heroInView = useInView(heroRef, { once: true })
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 })
  const processInView = useInView(processRef, { once: true, amount: 0.2 })
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 })

  const services = [
    {
      icon: Home,
      title: "Home Delivery",
      description: "Fresh, pure water delivered directly to your home on a flexible schedule that suits your needs.",
      features: ["Flexible scheduling", "Same-day delivery", "Contactless delivery", "24/7 support"],
    },
    {
      icon: Building2,
      title: "Office Solutions",
      description: "Keep your workplace hydrated with our corporate water delivery and dispenser rental services.",
      features: ["Bulk discounts", "Free dispenser rental", "Dedicated account manager", "Regular maintenance"],
    },
    {
      icon: Beaker,
      title: "Laboratory Testing",
      description: "Every batch undergoes rigorous laboratory testing to ensure the highest quality standards.",
      features: ["pH balance testing", "Mineral content analysis", "Purity certification", "Quality reports"],
    },
    {
      icon: Truck,
      title: "Express Delivery",
      description: "Need water urgently? Our express delivery service gets pure water to you in record time.",
      features: ["2-hour delivery", "Priority handling", "GPS tracking", "SMS updates"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Natural Sourcing",
      description: "We source our water from pristine natural springs in protected mountain regions.",
      icon: Droplet,
    },
    {
      step: "02",
      title: "Advanced Filtration",
      description: "Multi-stage nano-filtration removes impurities while preserving essential minerals.",
      icon: Beaker,
    },
    {
      step: "03",
      title: "Quality Testing",
      description: "Rigorous laboratory testing ensures every bottle meets our strict quality standards.",
      icon: Shield,
    },
    {
      step: "04",
      title: "Fast Delivery",
      description: "Temperature-controlled delivery ensures water arrives fresh and ready to enjoy.",
      icon: Truck,
    },
  ]

  const benefits = [
    "99.9% pure water quality",
    "Essential minerals preserved",
    "Eco-friendly packaging",
    "Same-day delivery available",
    "Flexible subscription plans",
    "No contracts required",
  ]

  return (
    <main className="bg-white">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/water-jug-bottle-professional.jpg" 
            alt="Our Services" 
            fill 
            className="object-cover brightness-75" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-sky-900/60" />
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
                Our <span className="text-sky-300">Services</span>
              </motion.h1>
              <motion.p 
                className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Premium water delivery solutions for every need
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We <span className="text-[#003367]">Offer</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive water delivery solutions tailored to your lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white to-sky-50/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -10 }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-8 h-8 text-[#003367]" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#003367] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-[#003367] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 md:py-32 bg-gradient-to-b from-sky-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#003367]">Process</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From source to delivery, quality at every step
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all h-full group">
                    <div className="text-6xl font-bold text-sky-100 mb-4">{item.step}</div>
                    <motion.div 
                      className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon className="w-6 h-6 text-[#003367]" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 md:py-32 bg-[#003367] relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-sky-300">Miawa Water?</span>
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Experience the benefits of premium water delivery service
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={benefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-sky-300 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#003367]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: 50 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/miawa.png" 
                  alt="Miawa Water Benefits" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </motion.div>
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
              Ready to Get <span className="text-[#003367]">Started?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Contact us today and experience the Miawa Water difference
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button 
                className="bg-[#003367] hover:bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Order Now
              </motion.button>
              <motion.a
                href="/contact"
                className="border-2 border-[#003367] text-[#003367] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#003367] hover:text-white transition-all inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
