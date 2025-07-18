import { motion } from "framer-motion";
import { MapPin, Plane, Train, Car, Building, Home, BookOpen, Trees, Navigation } from "lucide-react";

const locationPoints = [
  {
    icon: Plane,
    title: "Rajiv Gandhi International Airport",
    distance: "Hyderabad",
    color: "text-blue-500"
  },
  {
    icon: Navigation,
    title: "Outer Ring Road",
    distance: "Shamshabad", 
    color: "text-purple-500"
  },
  {
    icon: MapPin,
    title: "Penjerla Road",
    distance: "Kothur-Shadnagar X Road",
    color: "text-orange-500"
  },
  {
    icon: Car,
    title: "Hyderabad-Bengaluru NH 44",
    distance: "2 km",
    color: "text-purple-500"
  },
  {
    icon: Train,
    title: "MMTS & Railway Stations",
    distance: "Shadnagar, Jadcherla", 
    color: "text-green-500"
  },
  {
    icon: Building,
    title: "Jadcherla IT Park",
    distance: "15 min away",
    color: "text-orange-500"
  },
  {
    icon: BookOpen,
    title: "Educational Institutions",
    distance: "NMIMS, Symbiosis",
    color: "text-pink-500"
  },
  {
    icon: Trees,
    title: "Mayuri Eco Park",
    distance: "Nearby",
    color: "text-green-500"
  }
];

const MapSection = () => {
  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Strategic <span className="gradient-text">Location</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Located at Polepally, Jadcherla (2 km from NH 44) near Polepally Special Economic Zone
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-subtle rounded-2xl p-8 shadow-elegant">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center relative overflow-hidden p-0 m-0">
                  {/* Google Maps Embed - Full Cover */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.128198892417!2d78.1219406828775!3d16.8199950775983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca31baba293809%3A0x5497ef3132f0d1d!2sNISAA%20SEZ%20TOWN!5e0!3m2!1sen!2sin!4v1751956583930!5m2!1sen!2sin"
                    style={{ border: 0, borderRadius: '0.75rem', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full rounded-lg shadow-md"
                    title="NISAA SEZ TOWN Location Map"
                  ></iframe>
                  {/* Location Label */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    NISAA SEZ TOWN
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    Interactive map showing strategic location and connectivity
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Location Points */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Connectivity & Accessibility
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                NISAA SEZ TOWN offers unparalleled connectivity to key destinations, 
                making it the perfect choice for modern living with easy access to work, education, and leisure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {locationPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 card-glow"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center`}>
                    <point.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-foreground">{point.title}</h4>
                    <p className="text-muted-foreground text-sm">{point.distance}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-primary rounded-xl text-white"
            >
              <h4 className="font-heading font-semibold mb-2">Industries & Institutions Nearby</h4>
              <p className="text-sm opacity-90">
                Surrounded by major pharma companies like Aurobindo, Hetero Drugs, Mylan Labs, 
                educational institutions like NMIMS and Symbiosis, and tech facilities including Microsoft Data Center.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;