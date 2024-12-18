import GradientCircles from "@/components/GradientCircles";
import { ArrowLeft, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigator = useNavigate();
  
  return (
    <div className="min-h-screen gradient-background text-white relative">
      <GradientCircles />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <button
          onClick={() => navigator(-1)}
          className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Shield className="w-8 h-8" />
            <h1 className="text-4xl font-bold">Terms of Service</h1>
          </div>

          <div className="glass p-8 rounded-xl space-y-6">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Acceptance of Terms</h2>
              <p className="text-gray-300">
                By accessing or using TransienTalk, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Use License</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>{'Service is provided "as is"'}</li>
                <li>No guarantee of service availability</li>
                <li>Users responsible for message content</li>
                <li>No illegal or harmful content allowed</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Modifications</h2>
              <p className="text-gray-300">
                We reserve the right to modify or replace these terms at any time. Continued use of the service 
                constitutes acceptance of new terms.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;