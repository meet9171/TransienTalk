import { useNavigate } from "react-router-dom";
import GradientCircles from "@/components/GradientCircles";
import GlassButton from "@/components/GlassButton";
import { ArrowRight, Lock, MessageSquare, Shield, Timer, Zap } from "lucide-react";
import Features from "@/components/landing/Features";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-background text-white relative overflow-hidden">
      <GradientCircles />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center relative z-10">
        <div className="max-w-4xl text-center space-y-8 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
            <span className="text-sm">🔒 End-to-End Encrypted Chats</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Private Conversations, Zero Traces
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Create ephemeral chat rooms that disappear without a trace. Perfect for sensitive discussions, quick alignments, or private conversations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <GlassButton 
              onClick={() => navigate("/create")} 
              className="flex items-center group text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
            >
              <span>Start Chatting Now</span>
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </GlassButton>
            {/* <GlassButton
              variant="secondary"
              onClick={() => navigate("/join")}
              className="group text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
            >
              Join a Chat
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </GlassButton> */}
          </div>
          <div className="pt-12 flex items-center justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Encrypted
            </div>
            <div className="flex items-center">
              <Timer className="w-4 h-4 mr-2" />
              Auto-Delete
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Real-Time
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Features />

      {/* How It Works Section - Keeping existing code */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
        <div className="max-w-5xl mx-auto">
          {[
            {
              step: "1",
              title: "Generate a unique link",
              description: "Create a secure chat room in one click.",
            },
            {
              step: "2",
              title: "Share it securely",
              description: "Send the link to your contact.",
            },
            {
              step: "3",
              title: "Start chatting",
              description: "Begin your private conversation instantly.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="relative flex items-center gap-8 mb-16 last:mb-0 animate-slide-up group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-lg group-hover:bg-white/10 transition-all duration-300">
                <span className="text-4xl font-bold">{step.step}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Section */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute inset-0 bg-white/5 rounded-3xl blur-3xl" />
          <div className="relative backdrop-blur-lg rounded-3xl border border-white/10 p-16">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Security First, Always
                </h2>
                <p className="text-xl text-gray-300">
                  We've built TransienTalk with security and privacy as our foundation. Every feature is designed to protect your conversations.
                </p>
                <ul className="space-y-8">
                  <li className="flex items-center gap-6 group">
                    <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                      <Shield className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">End-to-End Encryption</h3>
                      <p className="text-gray-300">Your messages are encrypted and can't be intercepted</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 group">
                    <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                      <MessageSquare className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">No Message Storage</h3>
                      <p className="text-gray-300">Messages exist only in your current session</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-6 group">
                    <div className="p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                      <Timer className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Auto-Deletion</h3>
                      <p className="text-gray-300">All traces vanish when you close the chat</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-500" />
                  <Lock className="w-64 h-64 relative animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
