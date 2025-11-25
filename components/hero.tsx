import { Play } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-sky-50 to-white py-16 overflow-hidden">
      {/* Wavy background */}
      <div className="absolute inset-0 top-0 h-96 bg-gradient-to-b from-sky-50 via-sky-25 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              PURE WATER
              <br />
              <span className="text-[#003367]">DELIVERY SERVICE</span>
            </h1>

            <p className="text-gray-600 mb-8 leading-relaxed max-w-md">
              We now deliver different types of bottled water. To drink the best water please come to us and give us an
              order and take safe and sound water for you.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-8">
              <button className="bg-[#003367] hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition">
                Order Now
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-[#003367] hover:text-[#003367] transition">
                Read More
              </button>
              <button className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#003367] hover:bg-blue-50 transition">
                <Play size={20} className="text-gray-700 ml-1" fill="currentColor" />
              </button>
              <span className="text-xs text-gray-500 ml-2">See how we extract water</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative h-96 md:h-full md:min-h-96 flex items-center justify-center">
            <div className=" ">
              <Image src="/miawa.png" alt="Pure water glass" fill className="object-contain" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
