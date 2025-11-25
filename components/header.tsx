"use client"

import { MapPin, Phone, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Water Composition", href: "/#composition" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="bg-[#003367] px-4 py-2 text-xs text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex flex-wrap gap-4">
            <div className=" hidden md:flex items-center gap-1">
              <MapPin size={14} />
              <span>Menagesha, Oromia Region, Ethiopia</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>+251-116 663650</span>
            </div>
          </div>
          <span className="hidden sm:inline-block cursor-pointer">
            Call Us
          </span>
        </div>
      </div>

      {/* Sticky Navbar */}
      <div
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white top-0 shadow-md" : "bg-transparent top-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6  flex items-center justify-between">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`w-16  ${isScrolled ? "w-18" : "w-20"}`}
          >
            <img src="/logo2.png" alt="Miawa Logo" className="w-full" />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {navigationItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`${
                  isScrolled ? "text-gray-800" : "text-white"
                } text-sm font-medium relative group`}
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#003367] transition-all duration-200 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#003367]"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsOpen(false)}
        />

        {/* Panel */}
        <div className="absolute top-0 right-0 w-72 h-full bg-white shadow-xl p-6">
          <div className="flex justify-between items-center border-b pb-4">
            <img src="/logo2.png" className="w-14" alt="Logo" />
            <button onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <nav className="mt-6 space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-lg font-medium border-b"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <a
              href="/contact"
              className="block text-center mt-8 bg-[#003367] text-white py-3 rounded-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
