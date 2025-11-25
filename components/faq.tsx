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


const FAQ = () => {
    const faqRef = useRef(null)
    const categoriesRef = useRef(null)
    
    // const heroInView = useInView(heroRef, { once: true })
    const faqInView = useInView(faqRef, { once: true, amount: 0.2 })
    const categoriesInView = useInView(categoriesRef, { once: true, amount: 0.2 })

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
            {
                q: "How fast is delivery?",
                a: "Standard delivery takes 2-3 business days. We also offer same-day delivery for orders placed before 12 PM (available in select areas) and express 2-hour delivery for urgent needs with an additional fee.",
              },
              {
                q: "What bottle sizes do you offer?",
                a: "We offer 500ml bottles (24-pack), 1-liter bottles (12-pack), 5-gallon jugs, and commercial dispensers. All bottles are BPA-free and made from recyclable materials.",
              },
          ],
        },
       
     
      ]
    return (
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
    )
}

export default FAQ;