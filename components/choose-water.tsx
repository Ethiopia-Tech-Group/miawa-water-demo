import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function ChooseWater() {
  const products = [
    {
      id: 1,
      name: "Small Bottle",
      image: "/water-bottle-small-three-pack.jpg",
      badge: "SALE",
    },
    {
      id: 2,
      name: "Large Jug",
      image: "/large-water-jug-bottle-gallon.jpg",
      featured: true,
    },
    {
      id: 3,
      name: "Portable Bottle",
      image: "/portable-water-bottle-with-handle.jpg",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            CHOOSE YOUR <span className="text-[#003367]">WATER</span>
          </h2>
          <p className="text-gray-500 text-sm tracking-widest">BOTTLES WE DELIVER</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`relative rounded-2xl overflow-hidden transition transform hover:scale-105 ${
                product.featured ? "md:scale-110 md:col-span-1" : ""
              }`}
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-[#003367] text-white px-4 py-1 rounded-full">{product.badge}</Badge>
                </div>
              )}

              {/* Card Background */}
              <div
                className={`${
                  product.featured ? "bg-white shadow-lg" : "bg-white shadow"
                } p-8 rounded-2xl flex flex-col items-center justify-center h-80 md:h-96`}
              >
                <div className="relative w-40 h-48 mb-6">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
