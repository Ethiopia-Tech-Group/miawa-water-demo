"use client"

import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <footer ref={ref} className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {/* <h3 className="text-2xl font-bold text-blue-400 mb-4">Miawa Water</h3> */}
            <img src='/logo2.png' className="w-40"/>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for pure, safe, and refreshing water delivery service.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <motion.a 
                  href="/" 
                  className="text-gray-400 hover:text-blue-400 transition text-sm"
                  whileHover={{ x: 5 }}
                >
                  Home
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="/about" 
                  className="text-gray-400 hover:text-blue-400 transition text-sm"
                  whileHover={{ x: 5 }}
                >
                  About Us
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="/services" 
                  className="text-gray-400 hover:text-blue-400 transition text-sm"
                  whileHover={{ x: 5 }}
                >
                  Services
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="/contact" 
                  className="text-gray-400 hover:text-blue-400 transition text-sm"
                  whileHover={{ x: 5 }}
                >
                  Contact
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="/faq" 
                  className="text-gray-400 hover:text-blue-400 transition text-sm"
                  whileHover={{ x: 5 }}
                >
                  FAQ
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3">
              <motion.div 
                className="flex items-start gap-2"
                whileHover={{ x: 5 }}
              >
                <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">Menagesha, Oromia Region, Ethiopia.</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+251-116 663650</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@miawawater.com</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <motion.div 
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Miawa Water. Powered By Ethiopia Tech Group.</p>
          <div className="flex gap-4">
            <motion.a 
              href="https://www.facebook.com/miawawater/" 
              className="text-gray-400 hover:text-blue-400 transition"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Facebook size={20} />
            </motion.a>
            {/* <motion.a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter size={20} />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} />
            </motion.a> */}
            <motion.a 
              href="https://www.instagram.com/miawa.water/?hl=en" 
              className="text-gray-400 hover:text-blue-400 transition"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
