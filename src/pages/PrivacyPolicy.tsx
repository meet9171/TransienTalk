import GradientCircles from "@/components/GradientCircles";
import { ArrowLeft, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
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
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>

          <div className="glass p-8 rounded-xl space-y-6">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Data Collection</h2>
              <p className="text-gray-300">
                TransienTalk is designed with privacy at its core. We do not store any messages or conversation data. 
                All communications are temporary and exist only in your current session.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">How We Protect Your Privacy</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>No message storage or logging</li>
                <li>End-to-end encryption for all communications</li>
                <li>No personal data collection</li>
                <li>Automatic message deletion</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <p className="text-gray-300">
                For privacy-related inquiries, please contact our privacy team at privacy@whisperglass.com
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;