import Header from "@/components/header"
import Hero from "@/components/hero"
import WaterComposition from "@/components/water-composition"
import ChooseWater from "@/components/choose-water"
import Features from "@/components/features"
import Footer from "@/components/footer"
import Process from "@/components/process"
import Benefits from "@/components/benefits"
import FAQ from "@/components/faq"

export const metadata = {
  title: "Miawa Water - Pure Water Delivery Service | Premium Quality Water",
  description: "Order pure bottled water delivery service with laboratory tested water and nano filtration. Fast delivery, flexible schedules, and premium quality guaranteed.",
}

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <WaterComposition />
      <Process />
      <Benefits />
      <ChooseWater />
      <FAQ />
      {/* <Features /> */}
      <Footer />
    </main>
  )
}
