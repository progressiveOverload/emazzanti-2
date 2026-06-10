import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import FeaturedServices from "./components/FeaturedServices";
import IndustrySolutions from "./components/IndustrySolutions";
import WhoWeAre from "./components/WhoWeAre";
import CaseStudy from "./components/CaseStudy";
import Events from "./components/Events";
import Partners from "./components/Partners";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <WhatWeDo />
        <FeaturedServices />
        <IndustrySolutions />
        <WhoWeAre />
        <CaseStudy />
        <Events />
        <Partners />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
