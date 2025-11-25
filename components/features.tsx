import { Droplet, Truck, Zap, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Features() {
  const features = [
    {
      icon: Droplet,
      title: "Great Composition",
      description:
        "Our refreshing purified bottled water can be delivered directly to your door with our water delivery service.",
    },
    {
      icon: Truck,
      title: "Fast shipping",
      description:
        "Our refreshing purified bottled water can be delivered directly to your door with our water delivery service.",
    },
    {
      icon: Zap,
      title: "Nano Filtration",
      description:
        "Our refreshing purified bottled water can be delivered directly to your door with our water delivery service.",
    },
  ]

  const highlights = [
    { icon: CheckCircle, text: "Laboratory tested" },
    { icon: CheckCircle, text: "Great composition" },
    { icon: CheckCircle, text: "Nano Filtration" },
  ]

  return (
    <>
      {/* Features Grid Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center p-6 hover:bg-sky-50 rounded-xl transition">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-[#003367]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{feature.description}</p>
                  <a
                    href="#"
                    className="text-[#003367] hover:text-blue-600 font-semibold text-sm inline-flex items-center gap-1"
                  >
                    Learn more <ArrowRight size={16} />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-24 bg-sky-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Image */}
            <div className="flex-1 order-2 md:order-1">
              <div className="relative w-64 h-80">
                <Image src="/water-jug-bottle-professional.jpg" alt="Water bottle highlights" fill className="object-contain" />
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                READY TO GET
                <br />
                <span className="text-[#003367]">HYDRATED?</span>
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed">
                To drink the best water please come to us and give us an order.
              </p>

              {/* Highlights */}
              <div className="space-y-4 mb-8">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#003367]" />
                      </div>
                      <span className="text-gray-700 font-medium">{highlight.text}</span>
                    </div>
                  )
                })}
              </div>

              <button className="bg-[#003367] hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                LEADER IN
                <br />
                <span className="text-[#003367]">INDUSTRY</span>
              </h2>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">ABOUT US</p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Our refreshing purified bottled water can be delivered directly to your door with our water delivery
                service. Core feedback validates areas to be an partner with you. Sed tempore vitae fermentum. Vivamus
                lacus tortor fermentum. Velit ante, pretium at fellas ac, tempor id est. Sed aliqua cum. Cum lorem
                maximus fringilla leo sed bibendum fringilla justo.
              </p>

              <a href="#" className="text-[#003367] hover:text-blue-600 font-semibold inline-flex items-center gap-2">
                Read more <ArrowRight size={18} />
              </a>
            </div>

            {/* Right Image */}
            <div className="flex-1">
              <div className="relative w-80 h-96">
                <Image src="/man-with-water-bottles-professional-portrait.jpg" alt="Industry leader" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Water Section */}
      <section className="py-16 md:py-24 bg-sky-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                OUR DRINKING
                <br />
                <span className="text-[#003367]">WATER</span>
              </h2>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">ABOUT PRODUCTS</p>

              <p className="text-gray-600 leading-relaxed">
                Our refreshing purified bottled water can now be delivered directly to your door with our water delivery
                service. Core feedback validates areas to be an partner with you. Sed tempore vitae fermentum. Vivamus
                lacus tortor fermentum. Velit ante, pretium at fellas ac, tempor id est. Sed aliqua cum.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-1">
              <div className="relative w-80 h-96">
                <Image src="/mountain-landscape-water-pure-nature.jpg" alt="Drinking water source" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
