import { motion } from "framer-motion";
import { MapPin, Plane, Train, Car, Building, Home } from "lucide-react";

const locationPoints = [
  {
    icon: Plane,
    title: "Telangana Airport",
    distance: "15 km",
    color: "text-blue-500"
  },
  {
    icon: Train,
    title: "Railway Station",
    distance: "8 km", 
    color: "text-green-500"
  },
  {
    icon: Car,
    title: "Ring Road",
    distance: "2 km",
    color: "text-purple-500"
  },
  {
    icon: Building,
    title: "IT Park",
    distance: "12 km",
    color: "text-orange-500"
  },
  {
    icon: Home,
    title: "Residential Hub",
    distance: "1 km",
    color: "text-pink-500"
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
            Perfectly positioned in Telangana's growth corridor with excellent connectivity to all major landmarks
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
                Connectivity Advantages
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                NISAA SEZ TOWN offers unparalleled connectivity to Telangana's key destinations, 
                making it the perfect choice for modern living with easy access to work, travel, and leisure.
              </p>
            </div>
            
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
                  <p className="text-muted-foreground text-sm">Easy access via well-connected roads</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-heading font-bold gradient-text">{point.distance}</div>
                  <div className="text-xs text-muted-foreground">distance</div>
                </div>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-primary rounded-xl text-white"
            >
              <h4 className="font-heading font-semibold mb-2">Location Highlight</h4>
              <p className="text-sm opacity-90">
                Positioned on the rapidly developing Telangana-Bilaspur highway corridor, 
                ensuring excellent appreciation potential and future growth prospects.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;