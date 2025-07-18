import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import plotSample from "@/assets/plot-sample.jpg";
import img1 from "@/assets/gallery/IMG-20250707-WA0009.jpg";
import img2 from "@/assets/gallery/IMG-20250707-WA0010.jpg";

import img4 from "@/assets/gallery/IMG-20250707-WA0012.jpg";
import img3 from "@/assets/gallery/IMG-20250707-WA0011.jpg";
import galleryVideo from "@/assets/gallery/VID-20250707-WA0002.mp4";
import heroVideo from "@/assets/hero.mp4";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const galleryImages = [
  {
    src: heroBg,
    type: "image",
    title: "Premium Residential Plots",
    category: "Master Plan"
  },
  {
    src: img1,
    type: "image",
    title: "Gated Community Layout",
    category: "Infrastructure"
  },
  {
    src: img2,
    type: "image",
    title: "60ft & 40ft Road Network",
    category: "Roads"
  },
  {
    src: plotSample,
    type: "image",
    title: "Ready to Build Plots",
    category: "Plots"
  },
  {
    src: img4,
    type: "image",
    title: "Landscaped Gardens",
    category: "Amenities"
  },
  {
    src: img3,
    type: "image",
    title: "Underground Drainage",
    category: "Utilities"
  },
  {
    src: galleryVideo,
    type: "video",
    title: "Project Walkthrough",
    category: "Virtual Tour"
  },
  {
    src: heroVideo,
    type: "video",
    title: "Aerial View",
    category: "Overview"
  }
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<null | typeof galleryImages[0]>(null);

  const handleOpen = (image: typeof galleryImages[0]) => {
    setSelected(image);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

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
            Explore NISAA SEZ TOWN's premium infrastructure and amenities
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
              onClick={() => handleOpen(image)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                {image.type === "image" ? (
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <video
                    src={image.src}
                    controls
                    autoPlay
                    muted
                    loop
                    className="w-full h-64 object-cover"
                  />
                )}
                
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

        {/* Fullscreen Dialog */}
        <Dialog open={open} onOpenChange={(v) => { if (!v) handleClose(); }}>
          <DialogContent className="max-w-4xl w-full bg-black p-0 flex items-center justify-center">
            {selected && selected.type === "image" ? (
              <img src={selected.src} alt={selected.title} className="w-full h-[80vh] object-contain bg-black" />
            ) : selected && selected.type === "video" ? (
              <video src={selected.src} controls autoPlay muted loop className="w-full h-[80vh] object-contain bg-black" />
            ) : null}
          </DialogContent>
        </Dialog>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Experience our meticulously landscaped areas, black top roads, and pollution-free environment
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