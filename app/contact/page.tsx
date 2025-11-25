"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const heroRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)
  
  const heroInView = useInView(heroRef, { once: true })
  const formInView = useInView(formRef, { once: true, amount: 0.2 })
  const infoInView = useInView(infoRef, { once: true, amount: 0.2 })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Menagesha, Oromia Region, Ethiopia."],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+251-116 663650"],
    },
    // {
    //   icon: Mail,
    //   title: "Email Us",
    //   details: ["info@miawawater.com", "support@miawawater.com", "sales@miawawater.com"],
    // },
    // {
    //   icon: Clock,
    //   title: "Business Hours",
    //   details: ["Monday - Friday: 8AM - 8PM", "Saturday: 9AM - 6PM", "Sunday: 10AM - 4PM"],
    // },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="bg-white">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 z-0  bg-[#003367] ">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-300 rounded-full blur-3xl" />
          </div>
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
                Get in <span className="text-sky-300">Touch</span>
              </motion.h1>
              <motion.p 
                className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We'd love to hear from you. Send us a message!
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-sky-50/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Send us a <span className="text-[#003367]">Message</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-[#003367] hover:bg-blue-600 text-white py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: 50 }}
              animate={infoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Contact <span className="text-[#003367]">Information</span>
                  </h2>
                  <p className="text-gray-600">
                    Reach out to us through any of these channels
                  </p>
                </div>

                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon className="w-6 h-6 text-[#003367]" />
                        </motion.div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2 text-lg">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find <span className="text-[#003367]">Us</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Visit our location or schedule a pickup
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] bg-gray-200 flex items-center justify-center"
          >
            {/* Placeholder for map - You can integrate Google Maps API here */}
            <div className="text-center">
              <MapPin className="w-16 h-16 text-[#003367] mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Menagesha, Oromia Region, Ethiopia.</p>
              <p className="text-gray-500 text-sm mt-2">Map integration available</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#003367] relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Water <span className="text-sky-300">Now?</span>
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Call us for immediate assistance or place an order online
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="tel:+251-116 663650"
                className="bg-white text-[#003367] px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
              <motion.button 
                className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#003367] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Order Online
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
