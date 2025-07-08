import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import nisaaLogo from "@/assets/nisaa-logo.png";

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "Why Invest", href: "#why-invest" },
  { name: "Plot Sizes", href: "#plots" },
  { name: "Gallery", href: "#gallery" },
  { name: "Location", href: "#location" },
  { name: "Contact", href: "#contact" }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-elegant border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("#home")}
          >
            <img src={nisaaLogo} alt="NISAA Logo" className="w-10 h-10 lg:w-12 lg:h-12" />
            <div>
              <h1 className={`text-xl lg:text-2xl font-heading font-bold ${
                isScrolled ? "text-primary" : "text-white"
              }`}>
                NISAA
              </h1>
              <p className={`text-xs lg:text-sm ${
                isScrolled ? "text-muted-foreground" : "text-white/80"
              }`}>
                SEZ TOWN
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className={`relative font-medium transition-colors duration-300 ${
                  activeSection === item.href.substring(1)
                    ? isScrolled 
                      ? "text-primary" 
                      : "text-white"
                    : isScrolled
                      ? "text-foreground hover:text-primary"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      isScrolled ? "bg-primary" : "bg-white"
                    }`}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a href="tel:9963627722">
              <Button
                variant={isScrolled ? "premium" : "hero"}
                size="sm"
                className="hidden sm:flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
            <a href="https://wa.me/919963627722" target="_blank" rel="noopener noreferrer">
              <Button
                variant={isScrolled ? "premium" : "hero"}
                size="sm"
                className="hidden sm:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white"
              >
                WhatsApp
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                isScrolled 
                  ? "text-foreground hover:bg-muted" 
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isMobileMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md rounded-b-xl shadow-lg"
        >
          <nav className="py-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "bg-primary text-white"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="px-4 pt-2">
              <a href="tel:9963627722">
                <Button variant="premium" size="sm" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </a>
              <a href="https://wa.me/919963627722" target="_blank" rel="noopener noreferrer">
                <Button variant="premium" size="sm" className="w-full mt-2 bg-green-500 hover:bg-green-600 text-white">
                  WhatsApp
                </Button>
              </a>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;