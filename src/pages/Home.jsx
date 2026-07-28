import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import Reviews from "../components/landing/Reviews";
import CTA from "../components/landing/CTA";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Reviews />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;