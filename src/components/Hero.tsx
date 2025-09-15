import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transform Your Business with{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Expert IT Solutions
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Empower your organization with cutting-edge technology solutions, 
                comprehensive IT support, and strategic digital transformation services.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all duration-200 transform hover:scale-105 shadow-medium"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6">
            <div className="bg-gradient-card p-6 rounded-xl shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Enterprise Security</h3>
                  <p className="text-muted-foreground">Advanced cybersecurity solutions to protect your business data and infrastructure.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card p-6 rounded-xl shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-tech-blue/10 p-3 rounded-lg">
                  <Zap className="h-6 w-6 text-tech-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Lightning Fast Performance</h3>
                  <p className="text-muted-foreground">Optimized systems and cloud solutions for maximum efficiency and speed.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card p-6 rounded-xl shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-success-green/10 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-success-green" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Expert Support Team</h3>
                  <p className="text-muted-foreground">Dedicated professionals ready to assist you around the clock.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;