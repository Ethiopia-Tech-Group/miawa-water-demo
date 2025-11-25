import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Wavio</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for pure, safe, and refreshing water delivery service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">
                  Water Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">
                  Bulk Orders
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">
                  Corporate
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">25 W 51st St, New York, NY 10019</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">212-203-2290</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@wavio.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Wavio. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
