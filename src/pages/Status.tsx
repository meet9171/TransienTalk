import GradientCircles from "@/components/GradientCircles";
import { ArrowLeft, Server } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { useNavigate } from "react-router-dom";

const Status = () => {
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
            <Server className="w-8 h-8" />
            <h1 className="text-4xl font-bold">System Status</h1>
          </div>

          <div className="glass p-8 rounded-xl space-y-6">
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">All Systems Operational</h2>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-300">Updated 1 minute ago</span>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Services</h2>
              <div className="space-y-4">
                {[
                  { name: "Chat Service", status: "Operational", uptime: "99.99%" },
                  { name: "Authentication", status: "Operational", uptime: "99.99%" },
                  { name: "Encryption System", status: "Operational", uptime: "100%" },
                ].map((service) => (
                  <div key={service.name} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <span className="font-medium">{service.name}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-300">Uptime: {service.uptime}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-300">{service.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Status;