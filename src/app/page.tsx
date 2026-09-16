import FeaturedWork from "@/components/FeaturedWork";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/ServicesSection";
import TrustStrip from "@/components/TrustStrip";
import WhyStoneNGrow from "@/components/WhyStoneNGrow";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TrustStrip />
        <IntroSection />
        <ServicesSection />
        <FeaturedWork />
        <WhyStoneNGrow />
        <Footer />
      </main>
    </>
  )
}