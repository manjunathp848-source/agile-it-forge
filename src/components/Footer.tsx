import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                BNS IT Consultancy
              </h3>
              <p className="text-background/80 text-lg mb-6">
                Empowering businesses with innovative technology solutions. 
                Your trusted partner for digital transformation and IT excellence.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-background/90">gd@bnsitservices.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-background/90">+971 55 4958584</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-background/90">AHMED KASSIM DARWISH FAKHROO, 128-AL KHABAISI, PO Box: 64027, Dubai, UAE</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-background/80 hover:text-primary hover:bg-background/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background/80 hover:text-primary hover:bg-background/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background/80 hover:text-primary hover:bg-background/10">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-background">Quick Links</h4>
            <nav className="space-y-3">
              <a href="#home" className="block text-background/80 hover:text-primary transition-colors duration-200">
                Home
              </a>
              <a href="#services" className="block text-background/80 hover:text-primary transition-colors duration-200">
                Services
              </a>
              <a href="#about" className="block text-background/80 hover:text-primary transition-colors duration-200">
                About Us
              </a>
              <a href="#contact" className="block text-background/80 hover:text-primary transition-colors duration-200">
                Contact
              </a>
              <a 
                href="#contact" 
                className="block text-background/80 hover:text-primary transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Support
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-background">Services</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-background/80 hover:text-primary transition-colors duration-200">
                Cloud Solutions
              </a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors duration-200">
                Cybersecurity
              </a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors duration-200">
                IT Infrastructure
              </a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors duration-200">
                Mobile Development
              </a>
              <a href="#" className="block text-background/80 hover:text-primary transition-colors duration-200">
                24/7 Support
              </a>
            </nav>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div>
              <h4 className="text-lg font-semibold text-background mb-2">Stay Updated</h4>
              <p className="text-background/80">Subscribe to our newsletter for the latest tech insights.</p>
            </div>
            <div className="flex space-x-4">
              <Badge variant="secondary" className="bg-background/10 text-background border-background/20">
                Newsletter Coming Soon
              </Badge>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-background/20">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-background/80 text-sm">
                © 2024 BNS IT consultancy LLC. All rights reserved.
              </p>
            <div className="flex items-center space-x-6">
              <a href="/privacy-policy" className="text-background/80 hover:text-primary text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-background/80 hover:text-primary text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-background/80 hover:text-primary hover:bg-background/10"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;