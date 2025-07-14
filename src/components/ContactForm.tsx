import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    plotSize: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      plotSize: formData.plotSize,
      message: formData.message,
      subject: "New Enquiry from NISAA Realtors Website",
      from_name: formData.name
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Thank you for your interest!",
          description: "Our team will contact you within 24 hours."
        });
        setFormData({ name: "", phone: "", email: "", plotSize: "", message: "" });
      } else {
        toast({
          title: "Submission failed",
          description: result.message || "Something went wrong. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send enquiry. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to invest? Contact our expert team for personalized guidance and site visits
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <a href="tel:9963627722" className="text-muted-foreground hover:underline block">9963627722</a>
                    <a href="https://wa.me/919963627722" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline block">WhatsApp</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">nissasezztown@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Address</h4>
                    <p className="text-muted-foreground">NISAA SEZ TOWN, Telangana, Chhattisgarh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="card-glow">
              <h4 className="font-heading font-semibold text-foreground mb-4">Office Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday:</span>
                  <span className="text-foreground">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday:</span>
                  <span className="text-foreground">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday:</span>
                  <span className="text-foreground">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="card-glow space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-foreground">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="mt-1"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    className="mt-1"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="mt-1"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="plotSize" className="text-foreground">Preferred Plot Size</Label>
                <Select onValueChange={(value) => handleChange("plotSize", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select plot size preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30x40">30' × 40' - Compact Premium</SelectItem>
                    <SelectItem value="40x60">40' × 60' - Family Comfort</SelectItem>
                    <SelectItem value="50x80">50' × 80' - Luxury Estate</SelectItem>
                    <SelectItem value="60x90">60' × 90' - Grand Villa</SelectItem>
                    <SelectItem value="custom">Custom Requirements</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="mt-1"
                  placeholder="Tell us about your requirements or any questions you have..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full text-lg py-6" variant="premium" size="xl" disabled={submitting}>
                <MessageSquare className="w-5 h-5 mr-2" />
                {submitting ? "Sending..." : "Send Enquiry"}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </motion.div>
        </div>

        {/* WhatsApp Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <a href="https://wa.me/919963627722" target="_blank" rel="noopener noreferrer">
            <Button
              className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg animate-pulse"
              size="icon"
            >
              <MessageSquare className="w-6 h-6" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
