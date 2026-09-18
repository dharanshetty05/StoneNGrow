import FeaturedWork from "@/components/FeaturedWork";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import Process from "@/components/Process";
import ServiceArea from "@/components/ServiceArea";
import ServicesSection from "@/components/ServicesSection";
import TrustStrip from "@/components/TrustStrip";
import StoneGroveNavbar from "@/components/ui/resizable-navbar";
import WhyStoneNGrow from "@/components/WhyStoneNGrow";

export default function Home() {
  return (
    <>
      <StoneGroveNavbar />
      
      <main>
        <Hero />
        <TrustStrip />
        <IntroSection />
        <ServicesSection />
        <FeaturedWork />
        <WhyStoneNGrow />
        <Process />
        <ServiceArea />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}