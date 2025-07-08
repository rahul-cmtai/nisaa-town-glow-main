import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import plotSample from "@/assets/plot-sample.jpg";

const plotSizes = [
  {
    title: "Compact Premium",
    dimensions: "30' × 40'",
    area: "1200 Sq. Ft",
    price: "₹14.4 Lakhs",
    features: ["Corner Plot Available", "East Facing", "Ready to Build"]
  },
  {
    title: "Family Comfort",
    dimensions: "40' × 60'",
    area: "2400 Sq. Ft", 
    price: "₹28.8 Lakhs",
    features: ["Premium Location", "Wide Road Access", "Park Facing"],
    popular: true
  },
  {
    title: "Luxury Estate",
    dimensions: "50' × 80'",
    area: "4000 Sq. Ft",
    price: "₹48 Lakhs",
    features: ["Prime Corner", "Multiple Road Access", "Premium Amenities"]
  },
  {
    title: "Grand Villa",
    dimensions: "60' × 90'",
    area: "5400 Sq. Ft",
    price: "₹64.8 Lakhs",
    features: ["Exclusive Location", "Boulevard Facing", "Private Garden Space"]
  }
];

const PlotCards = () => {
  return (
    <section id="plots" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Choose Your Perfect <span className="gradient-text">Plot Size</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From compact premium plots to grand villa estates - find the perfect space for your dream home
          </p>
        </motion.div>
        
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max md:grid md:grid-cols-2 lg:grid-cols-4 md:min-w-0">
            {plotSizes.map((plot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex-shrink-0 w-80 md:w-auto relative ${plot.popular ? 'transform scale-105' : ''}`}
              >
                {plot.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`card-glow h-full ${plot.popular ? 'border-accent/50 shadow-accent' : ''}`}>
                  <div className="relative mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={plotSample} 
                      alt={`${plot.title} Plot`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-2xl font-heading font-bold">{plot.dimensions}</div>
                      <div className="text-sm opacity-90">{plot.area}</div>
                    </div>
                  </div>
                  
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      {plot.title}
                    </h3>
                    <div className="text-3xl font-heading font-bold gradient-text mb-4">
                      {plot.price}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {plot.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plot.popular ? 'bg-gradient-primary text-white shadow-primary hover:shadow-elegant hover:-translate-y-0.5 transition-all duration-300' : ''}`}
                    variant={plot.popular ? 'default' : 'outline'}
                  >
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            * All prices are starting prices and subject to plot location and availability
          </p>
          <a href="#contact">
            <Button size="lg" variant="premium" className="px-8">
              Schedule Site Visit
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PlotCards;