import Image from "next/image"

export default function WaterComposition() {
  const minerals = [
    {
      name: "Calcium Ca2+",
      value: "240 mg/L",
      description: "About 99% of the calcium in our bodies is in our bones and teeth.",
      position: "top-0 left-0",
    },
    {
      name: "Magnesium Mg2+",
      value: "42 mg/L",
      description: "Magnesium is a nutrient that the body needs to stay healthy.",
      position: "top-0 right-0",
    },
    {
      name: "Sodium Na+",
      value: "5.2 mg/L",
      description: "It's an important component for particular muscle and nerve function.",
      position: "bottom-0 left-0",
    },
    {
      name: "Sulfate SO4(2-)",
      value: "400 mg/L",
      description: "Sulfate is among the most important macronutrients in cells.",
      position: "bottom-0 right-0",
    },
    {
      name: "Nitrate NO3-",
      value: "4.4 mg/L",
      description: "It's great for hearts to drink water with levels of nitrate under 10 mg/L.",
      position: "bottom-12 left-12",
    },
    {
      name: "Bicarbonate",
      value: "384 mg/L",
      description: "Bicarbonate is an antacid used to relieve heartburn and acid indigestion.",
      position: "bottom-12 right-12",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            WATER <span className="text-[#003367]">COMPOSITION</span>
          </h2>
          <p className="text-gray-500 text-sm tracking-widest">WHAT'S INSIDE?</p>
        </div>

        {/* Composition Layout */}
        <div className="relative">
          {/* Center Image */}
          <div className="flex justify-center mb-12 md:mb-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/water-droplets-circular-pattern.jpg"
                alt="Water composition circular"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Mineral Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-0">
            {/* Top Left */}
            <div className="text-center md:text-right md:col-span-1">
              <h3 className="font-bold text-gray-900 mb-1">{minerals[0].name}</h3>
              <p className="text-[#003367] font-semibold text-sm mb-2">{minerals[0].value}</p>
              <p className="text-gray-600 text-sm">{minerals[0].description}</p>
            </div>

            {/* Center Spacer */}
            <div className="hidden md:block" />

            {/* Top Right */}
            <div className="text-center md:text-left">
              <h3 className="font-bold text-gray-900 mb-1">{minerals[1].name}</h3>
              <p className="text-[#003367] font-semibold text-sm mb-2">{minerals[1].value}</p>
              <p className="text-gray-600 text-sm">{minerals[1].description}</p>
            </div>

            {/* Bottom Left */}
            <div className="text-center md:text-right">
              <h3 className="font-bold text-gray-900 mb-1">{minerals[2].name}</h3>
              <p className="text-[#003367] font-semibold text-sm mb-2">{minerals[2].value}</p>
              <p className="text-gray-600 text-sm">{minerals[2].description}</p>
            </div>

            {/* Center Spacer */}
            <div className="hidden md:block" />

            {/* Bottom Right */}
            <div className="text-center md:text-left">
              <h3 className="font-bold text-gray-900 mb-1">{minerals[3].name}</h3>
              <p className="text-[#003367] font-semibold text-sm mb-2">{minerals[3].value}</p>
              <p className="text-gray-600 text-sm">{minerals[3].description}</p>
            </div>

            {/* Bottom Extended Left */}
            <div className="text-center md:text-right">
              <h3 className="font-bold text-gray-900 mb-1">{minerals[4].name}</h3>
              <p className="text-[#003367] font-semibold text-sm mb-2">{minerals[4].value}</p>
              <p className="text-gray-600 text-sm">{minerals[4].description}</p>
            </div>

            {/* Center Spacer */}
            <div className="hidden md:block" />

            {/* Bottom Extended Right */}
            <div className="text-center md:text-left">
              <h3 className="font-bold text-gray-900 mb-1">{minerals[5].name}</h3>
              <p className="text-[#003367] font-semibold text-sm mb-2">{minerals[5].value}</p>
              <p className="text-gray-600 text-sm">{minerals[5].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
