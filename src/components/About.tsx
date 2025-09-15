import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Award, 
  Clock, 
  Users, 
  Target,
  ArrowRight 
} from "lucide-react";

const achievements = [
  { label: "Years of Experience", value: "15+", icon: Clock },
  { label: "Satisfied Clients", value: "500+", icon: Users },
  { label: "Projects Completed", value: "1000+", icon: Target },
  { label: "Industry Awards", value: "25+", icon: Award },
];

const whyChooseUs = [
  {
    title: "Proven Expertise",
    description: "Over 15 years of experience delivering cutting-edge IT solutions across various industries."
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support to ensure your business never stops running."
  },
  {
    title: "Scalable Solutions",
    description: "Future-proof technology solutions that grow with your business needs."
  },
  {
    title: "Cost-Effective",
    description: "Maximize your ROI with efficient, budget-friendly IT strategies and implementations."
  },
  {
    title: "Security First",
    description: "Enterprise-grade security measures to protect your valuable business data."
  },
  {
    title: "Innovation Focus",
    description: "Stay ahead of the competition with the latest technology trends and innovations."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="mb-4">About TechSolutions</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Our Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're passionate about leveraging technology to solve complex business challenges 
            and drive sustainable growth for organizations of all sizes.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-card p-6 rounded-xl shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300">
                <achievement.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                  {achievement.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Your Trusted Technology Partner
              </h3>
              <p className="text-muted-foreground text-lg">
                At TechSolutions, we understand that technology is not just about tools—it's about 
                transforming the way you do business. Our team of certified experts brings together 
                deep technical knowledge and strategic thinking to deliver solutions that matter.
              </p>
            </div>

            <div className="space-y-4">
              {whyChooseUs.slice(0, 3).map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-success-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Features Grid */}
          <div className="space-y-4">
            {whyChooseUs.slice(3).map((item, index) => (
              <div key={index} className="bg-gradient-card p-6 rounded-xl shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-success-green flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-gradient-primary rounded-2xl p-8 lg:p-12 text-center shadow-large">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
            Our Mission
          </h3>
          <p className="text-primary-foreground/90 text-lg max-w-4xl mx-auto">
            To empower businesses with innovative technology solutions that drive growth, 
            enhance efficiency, and create competitive advantages in today's digital landscape. 
            We're committed to being your long-term technology partner, not just a service provider.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;