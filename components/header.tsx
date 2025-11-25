"use client"

import { MapPin, Phone, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

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
    { name: "Services", href: "/services" },
    { name: "Water Composition", href: "/#composition" },
    { name: "Delivery", href: "/#delivery" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className={`sticky top-0 z-50 bg-white border-b border-gray-100 transition-all duration-300 ${
      isScrolled ? "shadow-lg" : "shadow-sm"
    }`}>
      {/* Top Info Bar */}
      <div className="bg-[#003367] px-4 py-2 text-xs text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6 flex-wrap">
            <div className="flex items-center gap-1 transition-colors hover:text-gray-200">
              <MapPin size={14} className="text-white" />
              <span>25 W 51st St, New York, NY 10019</span>
            </div>
            <div className="flex items-center gap-1 transition-colors hover:text-gray-200">
              <Phone size={14} className="text-white" />
              <span>212-203-2290</span>
            </div>
          </div>
          <span className="hidden sm:inline-block transition-colors hover:text-gray-200 cursor-pointer">
            Call Us
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="w-16 transition-transform hover:scale-105">
            <img 
              src='/logo.jfif' 
              alt="Company Logo" 
              className="w-full h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center flex-1 ml-12">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-700 hover:text-[#003367] font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003367] transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex gap-4 items-center">
            <button className="hidden lg:block bg-[#003367] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#00274d] transition-colors duration-200 shadow-md hover:shadow-lg">
              Get Quote
            </button>
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

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
                src='/logo.jfif' 
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
            <button className="w-full mt-8 bg-[#003367] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#00274d] transition-colors duration-200">
              Get Quote
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}