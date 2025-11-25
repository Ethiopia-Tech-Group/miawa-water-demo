"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle, Droplet, Truck, CreditCard, Phone } from "lucide-react"

export default function FAQPage() {
  const heroRef = useRef(null)
  const faqRef = useRef(null)
  const categoriesRef = useRef(null)
  
  const heroInView = useInView(heroRef, { once: true })
  const faqInView = useInView(faqRef, { once: true, amount: 0.2 })
  const categoriesInView = useInView(categoriesRef, { once: true, amount: 0.2 })

  const categories = [
    {
      icon: Droplet,
      title: "Water Quality",
      description: "Learn about our purification process",
    },
    {
      icon: Truck,
      title: "Delivery",
      description: "Shipping and delivery information",
    },
    {
      icon: CreditCard,
      title: "Billing",
      description: "Payment and pricing details",
    },
    {
      icon: Phone,
      title: "Support",
      description: "Customer service and help",
    },
  ]

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What makes Miawa Water different from other water delivery services?",
          a: "Miawa Water uses advanced nano-filtration technology and sources water from pristine natural springs. Every batch undergoes rigorous laboratory testing to ensure 99.9% purity while preserving essential minerals. We also offer flexible delivery schedules, eco-friendly packaging, and exceptional customer service.",
        },
        {
          q: "What areas do you deliver to?",
          a: "We currently deliver throughout New York City and surrounding areas within a 50-mile radius. For specific location availability, please contact our customer service team or check our coverage map on the website.",
        },
        {
          q: "How do I place an order?",
          a: "You can place orders through our website, mobile app, or by calling our customer service line at +251-116 663650. Simply select your preferred water type, bottle size, quantity, and delivery schedule.",
        },
      ],
    },
    {
      category: "Water Quality",
      questions: [
        {
          q: "How is your water purified?",
          a: "Our water goes through a multi-stage purification process including pre-filtration, nano-filtration, UV sterilization, and ozonation. This ensures the removal of 99.9% of contaminants while preserving beneficial minerals like calcium and magnesium.",
        },
        {
          q: "Is your water tested for quality?",
          a: "Yes, every batch is tested in our certified laboratory for pH balance, mineral content, and purity. We provide quality reports upon request and maintain certifications from leading health and safety organizations.",
        },
        {
          q: "What minerals are in your water?",
          a: "Our water contains essential minerals including Calcium (240 mg/L), Magnesium (42 mg/L), Sodium (5.2 mg/L), Sulfate (400 mg/L), Nitrate (4.4 mg/L), and Bicarbonate (384 mg/L). These minerals are naturally present and beneficial for health.",
        },
      ],
    },
    {
      category: "Delivery & Shipping",
      questions: [
        {
          q: "How fast is delivery?",
          a: "Standard delivery takes 2-3 business days. We also offer same-day delivery for orders placed before 12 PM (available in select areas) and express 2-hour delivery for urgent needs with an additional fee.",
        },
        {
          q: "Can I schedule recurring deliveries?",
          a: "Absolutely! We offer flexible subscription plans where you can schedule weekly, bi-weekly, or monthly deliveries. You can modify or pause your subscription at any time through your account dashboard.",
        },
        {
          q: "What if I'm not home during delivery?",
          a: "We offer contactless delivery and can leave your order in a designated safe location. You can also schedule a specific delivery window or request signature confirmation if preferred.",
        },
        {
          q: "Do you offer free delivery?",
          a: "Yes, we offer free delivery on orders over $50. For smaller orders, a nominal delivery fee of $5-10 applies depending on your location.",
        },
      ],
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, PayPal, and for corporate accounts, we also accept purchase orders and bank transfers.",
        },
        {
          q: "Are there any subscription discounts?",
          a: "Yes! Subscription customers receive 10% off all orders, free delivery, priority customer service, and can pause or modify their plan anytime without penalties.",
        },
        {
          q: "What is your refund policy?",
          a: "We offer a 100% satisfaction guarantee. If you're not completely satisfied with your order, contact us within 7 days for a full refund or replacement. Damaged or defective products are replaced immediately at no charge.",
        },
      ],
    },
    {
      category: "Products & Bottles",
      questions: [
        {
          q: "What bottle sizes do you offer?",
          a: "We offer 500ml bottles (24-pack), 1-liter bottles (12-pack), 5-gallon jugs, and commercial dispensers. All bottles are BPA-free and made from recyclable materials.",
        },
        {
          q: "Can I return empty bottles?",
          a: "Yes! We have a bottle return and recycling program. Return empty 5-gallon jugs for a $2 credit per bottle. We sanitize and reuse them or recycle them responsibly.",
        },
        {
          q: "Do you rent water dispensers?",
          a: "Yes, we offer complimentary dispenser rental with ongoing water delivery subscriptions for both home and office use. Options include hot & cold, room temperature, and countertop models.",
        },
      ],
    },
  ]

  return (
    <main className="bg-white">
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#003367] to-blue-600">
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
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6"
                initial={{ scale: 0 }}
                animate={heroInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <HelpCircle className="w-10 h-10 text-white" />
              </motion.div>
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Frequently Asked <span className="text-sky-300">Questions</span>
              </motion.h1>
              <motion.p 
                className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Find answers to common questions about our water delivery service
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section ref={categoriesRef} className="py-20 bg-gradient-to-b from-white to-sky-50/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={categoriesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by <span className="text-[#003367]">Category</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={categoriesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-200 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-7 h-7 text-[#003367]" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section ref={faqRef} className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Common <span className="text-[#003367]">Questions</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to know about Miawa Water
            </p>
          </motion.div>

          <div className="space-y-8">
            {faqs.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-1 h-8 bg-[#003367] rounded-full" />
                  {section.category}
                </h3>
                <Accordion type="single" collapsible className="space-y-4">
                  {section.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${sectionIndex}-${faqIndex}`}
                      className="bg-gradient-to-br from-white to-sky-50/20 border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-all"
                    >
                      <AccordionTrigger className="text-left text-gray-900 font-semibold hover:text-[#003367] py-5">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-gradient-to-br from-[#003367] to-blue-600 relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
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
              Still Have <span className="text-sky-300">Questions?</span>
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Our customer support team is here to help you 24/7
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-white text-[#003367] px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.a>
              <motion.a
                href="tel:+251-116 663650"
                className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#003367] transition-all inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
