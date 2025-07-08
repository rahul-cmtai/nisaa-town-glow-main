import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Download } from "lucide-react";
import nisaaLogo from "@/assets/nisaa-logo.png";
import brochurePdf from "@/assets/NISAA SEZ TOWN BROCHURE.pdf";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <img src={nisaaLogo} alt="NISAA Logo" className="w-12 h-12" />
              <div>
                <h3 className="text-2xl font-heading font-bold">NISAA</h3>
                <p className="text-sm opacity-80">SEZ TOWN</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Creating premium residential communities with world-class infrastructure 
              and sustainable living solutions. Your trusted partner in real estate investment.
            </p>
            <div className="flex items-center gap-4">
              <a href={brochurePdf} download target="_blank" rel="noopener noreferrer">
                <Button
                  variant="accent"
                  size="lg"
                  className="px-6 py-3 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Brochure
                </Button>
              </a>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#plots" className="text-primary-foreground/80 hover:text-white transition-colors duration-300">Plot Sizes</a></li>
              <li><a href="#gallery" className="text-primary-foreground/80 hover:text-white transition-colors duration-300">Gallery</a></li>
              <li><a href="#location" className="text-primary-foreground/80 hover:text-white transition-colors duration-300">Location</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-white transition-colors duration-300">Contact</a></li>
              <li><a href="/privacy-policy" className="text-primary-foreground/80 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-heading font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-accent" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">
                    NISAA SEZ TOWN<br />
                    Raipur, Chhattisgarh<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:9963627722" className="text-primary-foreground/80 text-sm hover:underline">9963627722</a>
                <a href="https://wa.me/919963627722" target="_blank" rel="noopener noreferrer" className="ml-2 text-green-400 hover:underline">WhatsApp</a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <p className="text-primary-foreground/80 text-sm">nissasezztown@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* RERA Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 mt-12 pt-8"
        >
          <div className="bg-primary-foreground/10 rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h4 className="font-heading font-semibold text-accent mb-2">RERA Registration Details</h4>
                <p className="text-sm text-primary-foreground/80">
                  TLP NO: 67486/LP/GP/205292/0006/2025 | RERA APPROVED
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-primary-foreground/80">
                  All information provided is subject to change and verification.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>
              © {currentYear} NISAA Realtors. All rights reserved.
            </p>
            <p>
              Designed with excellence for premium living
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;