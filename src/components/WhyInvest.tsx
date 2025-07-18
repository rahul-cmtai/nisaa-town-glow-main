import { motion } from "framer-motion";
import { CheckCircle, Plane, TrendingUp, Home, MapPin, Zap, Shield, Leaf, Droplet } from "lucide-react";

const investmentPoints = [
  {
    icon: CheckCircle,
    title: "MUDA, DTCP & RERA Approved",
    description: "Fully compliant with all regulatory requirements for your peace of mind"
  },
  {
    icon: Plane,
    title: "Strategic Location",
    description: "Near Polepally SEZ, just 2 km from NH 44 Bengaluru Highway"
  },
  {
    icon: Home,
    title: "Ready to Build Plots",
    description: "Premium plots with clear title and spot registration available"
  },
  {
    icon: Shield,
    title: "Gated Community",
    description: "Secure compound wall, 24/7 security and modern amenities"
  },
  {
    icon: Zap,
    title: "Complete Infrastructure",
    description: "Underground drainage, electricity, water connection and street lights"
  },
  {
    icon: Leaf,
    title: "Premium Lifestyle",
    description: "Club house, swimming pool, landscaped gardens and jogging track"
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
            A verdant investment destination with endless growth opportunities
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
            <div className="text-4xl font-heading font-bold gradient-text mb-2">60 ft</div>
            <div className="text-muted-foreground">Road Width</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-heading font-bold gradient-text mb-2">100%</div>
            <div className="text-muted-foreground">RERA Approved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-heading font-bold gradient-text mb-2">24/7</div>
            <div className="text-muted-foreground">Security</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-heading font-bold gradient-text mb-2">BT</div>
            <div className="text-muted-foreground">Roads</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyInvest;