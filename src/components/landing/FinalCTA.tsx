import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import GlassButton from "../GlassButton";

const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-32 relative z-10">
      <div className="max-w-4xl mx-auto relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 blur-3xl" /> */}
        {/* <div className="relative backdrop-blur-lg rounded-3xl border border-white/10 p-16"> */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Start Your Private Chat
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Experience secure, ephemeral messaging that puts your privacy first. No logs, no traces, just private conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <GlassButton
                onClick={() => navigate("/create")}
                className="flex items-center group text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
              >
                <span>Create Private Room</span>
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </GlassButton>
              {/* <GlassButton
                variant="secondary"
                onClick={() => navigate("/join")}
                className="group text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
              >
                Join Existing Room
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </GlassButton> */}
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default FinalCTA;