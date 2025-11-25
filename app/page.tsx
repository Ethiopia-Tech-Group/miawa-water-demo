import Header from "@/components/header"
import Hero from "@/components/hero"
import WaterComposition from "@/components/water-composition"
import ChooseWater from "@/components/choose-water"
import Features from "@/components/features"
import Footer from "@/components/footer"

export const metadata = {
  title: "Wavio - Pure Water Delivery Service",
  description: "Order pure bottled water delivery service with laboratory tested water and nano filtration",
}

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <WaterComposition />
      <ChooseWater />
      <Features />
      <Footer />
    </main>
  )
}
