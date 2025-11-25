"use client"

import { MapPin, Phone, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('header')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    // { name: "Services", href: "/services" },
    { name: "Water Composition", href: "/#composition" },
    // { name: "Delivery", href: "/#delivery" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-white">
      {/* Top Info Bar - Not Sticky */}
      <div className="bg-[#003367] px-4 py-2 text-xs text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6 flex-wrap">
            <div className="flex items-center gap-1 transition-colors hover:text-gray-200">
              <MapPin size={14} className="text-white" />
              <span>Menagesha, Oromia Region, Ethiopia</span>
            </div>
            <div className="flex items-center gap-1 transition-colors hover:text-gray-200">
              <Phone size={14} className="text-white" />
              <span>+251-116 663650</span>
            </div>
          </div>
          <span className="hidden sm:inline-block transition-colors hover:text-gray-200 cursor-pointer">
            Call Us
          </span>
        </div>
      </div>

      {/* Main Navigation - Sticky */}
      {/* <div className={`sticky top-0 z-50 bg-white border-b border-gray-100 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-sm"
      }`}> */}
      <header className={`fixed  left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background  top-0 border-b border-gray-800' 
          : 'bg-transparent text-white top-10'
      }`}>
        <div className="px-6 ">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
           

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 items-center flex-1 ml-12">
              {navigationItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`${isScrolled? 'text-gray-700' : 'text-white'} text-sm  hover:text-[#003367] font-medium transition-colors duration-200 relative group`}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003367] transition-all duration-200 group-hover:w-full"></span>
                </motion.a>
              ))}
            </nav>

            {/* logo */}
            <motion.div 
              className={`${isScrolled ? 'w-18' : 'w-24'}  hidden md:block transition-transform hover:scale-105`}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src='/logo2.png' 
                alt="Company Logo" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
        </header>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        {/* Backdrop */}
        {isOpen && (
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />
        )}
        
        {/* Navigation Panel */}
        <div className="absolute top-0 right-0 w-80 h-full bg-white shadow-xl">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <div className="w-12">
              <img 
                src='/logo2.png' 
                alt="Company Logo" 
                className="w-full h-auto"
              />
            </div>
            <button 
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="p-6 space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-lg text-gray-700 hover:text-[#003367] font-medium py-2 transition-colors duration-200 border-b border-gray-100"
                onClick={handleLinkClick}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="/contact"
              className="block w-full mt-8 bg-[#003367] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#00274d] transition-colors duration-200 text-center"
              onClick={handleLinkClick}
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}