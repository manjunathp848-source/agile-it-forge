import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: December 2024</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using the services provided by BNS IT Consultancy LLC ("Company", "we", "us", or "our"), you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
            <p className="text-muted-foreground mb-4">
              BNS IT Consultancy LLC provides comprehensive IT solutions including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>IT consulting and strategic planning</li>
              <li>Cloud solutions and migration services</li>
              <li>Cybersecurity implementation and monitoring</li>
              <li>Software development and integration</li>
              <li>Technical support and maintenance</li>
              <li>Digital transformation services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Client Responsibilities</h2>
            <p className="text-muted-foreground mb-4">
              As a client, you agree to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Cooperate with our team during project implementation</li>
              <li>Make timely payments as agreed upon</li>
              <li>Maintain confidentiality of proprietary information</li>
              <li>Follow security protocols and recommendations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
            <p className="text-muted-foreground mb-4">
              Payment terms will be specified in individual service agreements. Generally:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Invoices are due within 30 days of receipt</li>
              <li>Late payments may incur additional charges</li>
              <li>Services may be suspended for non-payment</li>
              <li>All prices are exclusive of applicable taxes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All intellectual property rights in our services, methodologies, and proprietary solutions remain with BNS IT Consultancy LLC. Custom developments will be subject to specific licensing agreements as outlined in individual contracts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Confidentiality</h2>
            <p className="text-muted-foreground">
              We maintain strict confidentiality regarding all client information and business data. Both parties agree to protect confidential information and not disclose it to third parties without written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              Our liability is limited to the amount paid for the specific service in question. We are not liable for indirect, consequential, or punitive damages arising from the use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Service Level Agreements</h2>
            <p className="text-muted-foreground mb-4">
              We strive to provide:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>99.9% uptime for hosted services</li>
              <li>24/7 emergency support availability</li>
              <li>Response times as specified in individual agreements</li>
              <li>Regular system monitoring and maintenance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
            <p className="text-muted-foreground">
              Either party may terminate services with appropriate notice as specified in individual agreements. Upon termination, all outstanding fees become immediately due and payable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
            <p className="text-muted-foreground">
              These terms are governed by the laws of the United Arab Emirates. Any disputes will be resolved through arbitration in Dubai, UAE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
            <p className="text-muted-foreground">
              For questions regarding these terms, please contact us:
            </p>
            <div className="bg-secondary/30 p-4 rounded-lg mt-4">
              <p className="text-foreground"><strong>BNS IT Consultancy LLC</strong></p>
              <p className="text-muted-foreground">Email: gdsmailbox@proton.me</p>
              <p className="text-muted-foreground">Phone: +971 55 4958584</p>
              <p className="text-muted-foreground">Address: AHMED KASSIM DARWISH FAKHROO, 128-AL KHABAISI, PO Box: 64027, Dubai, UAE</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;