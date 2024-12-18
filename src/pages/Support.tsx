import GradientCircles from "@/components/GradientCircles";
import { ArrowLeft, LifeBuoy } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigator = useNavigate();
  return (
    <div className="min-h-screen gradient-background text-white relative">
      <GradientCircles />
      
      <div className="container min-h-screen mx-auto px-4 py-12 relative z-10">
        <button
          onClick={() => navigator(-1)}
          className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <LifeBuoy className="w-8 h-8" />
            <h1 className="text-4xl font-bold">Support</h1>
          </div>

          <div className="glass p-8 rounded-xl space-y-6">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">How do I create a chat room?</h3>
                  <p className="text-gray-300">{'Click on "Start Chatting Now" and choose "Create Room" to generate a unique room ID.'}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Are my messages secure?</h3>
                  <p className="text-gray-300">Yes, all messages are end-to-end encrypted and automatically deleted when you close the room.</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact Support</h2>
              <p className="text-gray-300">
                Need help? Our support team is available 24/7. Email us at support@whisperglass.com
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;