'use client'
import { Truck, Home, Building2, Beaker, Clock, Shield, Droplet, Phone } from "lucide-react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const Process = () =>{
    const processRef = useRef(null)
    const processInView = useInView(processRef, { once: true, amount: 0.2 })
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
    return(
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
    )
}

export default Process;