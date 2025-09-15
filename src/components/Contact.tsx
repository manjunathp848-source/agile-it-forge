import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Calendar
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+971 55 4958584",
    description: "Available 24/7 for emergency support"
  },
  {
    icon: Mail,
    title: "Email",
    value: "gdsmailbox@proton.me",
    description: "We'll respond within 2 hours"
  },
  {
    icon: MapPin,
    title: "Office",
    value: "AHMED KASSIM DARWISH FAKHROO, 128-AL KHABAISI, PO Box: 64027, Dubai, UAE",
    description: "Visit us for in-person consultations"
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon-Fri: 9AM-6PM GST",
    description: "Emergency support available 24/7"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your technology needs and create a customized solution 
            that drives your business forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card shadow-medium border border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                <MessageSquare className="h-6 w-6 text-primary mr-3" />
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <Input placeholder="John" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <Input placeholder="Doe" className="bg-background" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="john@company.com" className="bg-background" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Company</label>
                <Input placeholder="Your Company Name" className="bg-background" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Phone</label>
                <Input placeholder="+1 (555) 123-4567" className="bg-background" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell us about your project and how we can help..."
                  className="bg-background min-h-[120px]"
                />
              </div>
              
              <Button size="lg" className="w-full bg-gradient-primary hover:opacity-90 transition-opacity duration-200">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gradient-card shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        <p className="text-foreground font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="bg-gradient-primary shadow-large border-0">
              <CardContent className="p-6 text-center space-y-4">
                <Calendar className="h-12 w-12 text-primary-foreground mx-auto" />
                <h3 className="text-xl font-bold text-primary-foreground">
                  Schedule a Free Consultation
                </h3>
                <p className="text-primary-foreground/90">
                  Book a 30-minute call to discuss your project requirements and get expert advice.
                </p>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-background text-foreground hover:bg-background/90 transition-colors duration-200"
                  onClick={() => window.open('https://calendly.com', '_blank')}
                >
                  Schedule Consultation
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <Card className="bg-destructive/5 border-destructive/20 shadow-soft">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Need Emergency IT Support?
              </h3>
              <p className="text-muted-foreground mb-4">
                Our emergency response team is available 24/7 for critical IT issues.
              </p>
              <Button variant="destructive" size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Emergency Hotline: +971554958584
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;