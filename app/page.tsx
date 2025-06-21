"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { CatalogueSection } from "@/components/sections/CatalogueSection"
import { ServicesSection } from "@/components/sections/services"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { LocationSection } from "@/components/sections/location"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { Toaster } from "react-hot-toast"

const Home = () => {
  return (
    <main className="min-h-screen">
      <Toaster />
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <ServicesSection />
      <CatalogueSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default Home