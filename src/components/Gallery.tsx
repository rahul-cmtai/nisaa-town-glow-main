import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import plotSample from "@/assets/plot-sample.jpg";

const galleryImages = [
  {
    src: heroBg,
    title: "Aerial Township View",
    category: "Master Plan"
  },
  {
    src: plotSample,
    title: "Premium Plot Layout",
    category: "Plot Design"
  },
  {
    src: heroBg,
    title: "Infrastructure Development",
    category: "Construction"
  },
  {
    src: plotSample,
    title: "Sample Villa Design",
    category: "Architecture"
  },
  {
    src: heroBg,
    title: "Green Spaces",
    category: "Amenities"
  },
  {
    src: plotSample,
    title: "Road Network",
    category: "Infrastructure"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Project <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the vision and reality of NISAA SEZ TOWN through our comprehensive project gallery
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm font-semibold text-accent mb-2">
                    {image.category}
                  </div>
                  <h3 className="text-lg font-heading font-semibold">
                    {image.title}
                  </h3>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {image.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more? Schedule a site visit to experience NISAA SEZ TOWN in person
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              variant="premium"
              size="lg"
              className="px-8"
            >
              <a href="#contact">Schedule Site Visit</a>
            </Button>
            {/* <Button variant="outline" size="lg" className="px-8">
              View Virtual Tour
            </Button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;