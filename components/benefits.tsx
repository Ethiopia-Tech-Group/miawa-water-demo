'use client'
import { Truck, Home, Building2, Beaker, Clock, Shield, Droplet, Phone } from "lucide-react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const Benefits = () => {
  const benefitsRef = useRef(null)
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 })
  const benefits = [
    "99.9% pure water quality",
    "Essential minerals preserved",
    "Eco-friendly packaging",
    "Same-day delivery available",
    "Flexible subscription plans",
    "No contracts required",
  ]
  return (
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
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={benefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-[#003367]">
              <Image
                src="/miawa.png"
                alt="Miawa Water Benefits"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  )
}

export default Benefits;