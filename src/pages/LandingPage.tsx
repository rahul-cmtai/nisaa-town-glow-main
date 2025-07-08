import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyInvest from "@/components/WhyInvest";
import PlotCards from "@/components/PlotCards";
import Gallery from "@/components/Gallery";
import MapSection from "@/components/MapSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyInvest />
      <PlotCards />
      <Gallery />
      <MapSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LandingPage;