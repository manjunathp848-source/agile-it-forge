import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cloud, 
  Shield, 
  Monitor, 
  Smartphone, 
  Database, 
  Headphones,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    title: "Cloud Solutions",
    description: "Migrate and optimize your infrastructure with scalable cloud services for enhanced performance and cost efficiency.",
    icon: Cloud,
    features: ["Cloud Migration", "AWS/Azure Management", "Backup & Recovery", "Cost Optimization"],
    color: "text-primary"
  },
  {
    title: "Cybersecurity",
    description: "Protect your business with comprehensive security solutions including threat detection and compliance management.",
    icon: Shield,
    features: ["Threat Detection", "Firewall Management", "Compliance Audits", "Security Training"],
    color: "text-destructive"
  },
  {
    title: "IT Infrastructure",
    description: "Build and maintain robust IT infrastructure that supports your business growth and operational excellence.",
    icon: Monitor,
    features: ["Network Setup", "Server Management", "Hardware Procurement", "System Integration"],
    color: "text-tech-blue"
  },
  {
    title: "Mobile Development",
    description: "Create powerful mobile applications that engage users and drive business growth across all platforms.",
    icon: Smartphone,
    features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App Store Optimization"],
    color: "text-success-green"
  },
  {
    title: "Data Management",
    description: "Optimize your data strategy with advanced analytics, storage solutions, and business intelligence tools.",
    icon: Database,
    features: ["Data Analytics", "Database Design", "Business Intelligence", "Data Migration"],
    color: "text-purple-600"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support to ensure your systems run smoothly and your team stays productive.",
    icon: Headphones,
    features: ["Help Desk Support", "Remote Assistance", "Emergency Response", "Preventive Maintenance"],
    color: "text-orange-600"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">IT Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to streamline your operations, 
            enhance security, and drive digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card border border-border/50 hover:shadow-large transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg bg-background/50 ${service.color}`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mt-2">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card p-8 rounded-2xl shadow-medium border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every business is unique. Let's discuss how we can create a tailored IT strategy 
              that perfectly fits your specific needs and goals.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity duration-200">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;