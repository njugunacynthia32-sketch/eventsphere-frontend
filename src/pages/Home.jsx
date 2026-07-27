import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import CTA from "../components/landing/CTA";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;
