import GradientCircles from "@/components/GradientCircles";
import { ArrowLeft, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { useNavigate } from "react-router-dom";

const Contact = () => {
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
            <Mail className="w-8 h-8" />
            <h1 className="text-4xl font-bold">Contact Us</h1>
          </div>

          <div className="glass p-8 rounded-xl space-y-6">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Get in Touch</h2>
              <p className="text-gray-300">
                {"Have questions or feedback? We'd love to hear from you. Fill out the form below or reach out to us directly."}
              </p>
            </section>

            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-white/10 rounded-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 bg-white/10 rounded-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;