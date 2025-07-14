import { motion } from "framer-motion";
import { CheckCircle, Plane, TrendingUp, Home, MapPin, Zap } from "lucide-react";

const investmentPoints = [
  {
    icon: CheckCircle,
    title: "100% RERA Approved",
    description: "Fully compliant with all regulatory requirements for your peace of mind"
  },
  {
    icon: Plane,
    title: "Airport Connectivity",
    description: "Strategic location with excellent connectivity to Telangana Airport"
  },
  {
    icon: TrendingUp,
    title: "Assured Returns",
    description: "Premium investment opportunity with guaranteed appreciation potential"
  },
  {
    icon: Home,
    title: "Residential Zones",
    description: "Surrounded by established residential communities and amenities"
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Located in the fast-growing corridor of Telangana's expansion"
  },
  {
    icon: Zap,
    title: "Smart Infrastructure",
    description: "Modern amenities with future-ready infrastructure development"
  }
];

const WhyInvest = () => {
  return (
    <section id="why-invest" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Why Invest in <span className="gradient-text">NISAA SEZ TOWN</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the advantages that make our township the perfect investment choice for your future
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {investmentPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-glow group cursor-pointer"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <point.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3 text-center">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-heading font-bold gradient-text mb-2">220+</div>
            <div className="text-muted-foreground">Premium Plots</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-heading font-bold gradient-text mb-2">22</div>
            <div className="text-muted-foreground">Acres</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-heading font-bold gradient-text mb-2">100%</div>
            <div className="text-muted-foreground">RERA Approved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-heading font-bold gradient-text mb-2">₹11,999</div>
            <div className="text-muted-foreground">Per Sq. Yds</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyInvest;