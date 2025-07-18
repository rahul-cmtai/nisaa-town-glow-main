import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, MapPin, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroVideo from "@/assets/hero.mp4";
import brochurePdf from "@/assets/NISAA SEZ TOWN BROCHURE.pdf";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero Section">
      {/* Background Video with Overlay */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        aria-hidden="true"
      >
        <video
          className="w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          aria-label="Background video of NISAA SEZ TOWN"
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        {/* Optional: keep or remove the gradient overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80 pointer-events-none" /> */}
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Elegance Elevated. Connectivity Redefined.
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-body font-light mb-2">
              NISAA SEZ TOWN
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-4 text-lg" aria-label="Approvals">
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" aria-hidden="true" />
                <span>MUDA Approved</span>
              </span>
              <span className="hidden md:block" aria-hidden="true">•</span>
              <span>DTCP Approved</span>
              <span className="hidden md:block" aria-hidden="true">•</span>
              <span>RERA Approved</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#contact" className="min-w-[200px]" aria-label="Contact us for enquiry">
              <Button 
                size="xl" 
                variant="premium"
                className="w-full"
              >
                Enquire Now
              </Button>
            </a>
            <a href={brochurePdf} download target="_blank" rel="noopener noreferrer" className="min-w-[200px]" aria-label="Download NISAA SEZ TOWN brochure">
              <Button 
                size="xl" 
                variant="hero" 
                className="w-full"
              >
                <Download className="w-5 h-5 mr-2" aria-hidden="true" />
                Download Brochure
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - now just below content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center mt-20"
        >
          <a href="#about" aria-label="Scroll down for more information">
            <ArrowDown className="w-6 h-6 animate-bounce" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full floating" aria-hidden="true" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-primary-glow/30 rounded-full floating" style={{animationDelay: '1s'}} aria-hidden="true" />
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-white/20 rounded-full floating" style={{animationDelay: '2s'}} aria-hidden="true" />
    </section>
  );
};

export default Hero;
