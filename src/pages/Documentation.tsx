import GradientCircles from "@/components/GradientCircles";
import { ArrowLeft, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { useNavigate } from "react-router-dom";

const Documentation = () => {
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
            <FileText className="w-8 h-8" />
            <h1 className="text-4xl font-bold">Documentation</h1>
          </div>

          <div className="glass p-8 rounded-xl space-y-6">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Getting Started</h2>
              <p className="text-gray-300">
                TransienTalk is a secure, temporary chat application designed for private conversations. 
                Learn how to use our platform effectively with this comprehensive guide.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Features</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>End-to-end encrypted messaging</li>
                <li>Temporary chat rooms</li>
                <li>No message storage</li>
                <li>Real-time communication</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
              <p className="text-gray-300">
                Create or join a chat room using the unique room ID. Messages are temporary and will disappear when you close the room.
                Share the room ID securely with your contact to begin chatting.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Documentation;