import { useState } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import GradientCircles from "@/components/GradientCircles";
import GlassButton from "@/components/GlassButton";
import Footer from "@/components/landing/Footer";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Linkedin, MessageCircle, MoveLeft } from "lucide-react";
import { toast } from "sonner";

const CreateJoin = () => {
  const navigate = useNavigate();
  // const router = useRoutes();
  // const { toast } = useToast();
  const [roomId, setRoomId] = useState("");

  const handleCreate = () => {
    const newRoomId = Math.random().toString(36).substring(2, 8);
    navigate(`/chat/${newRoomId}`);
  };

  const handleJoin = () => {
    if (!roomId.trim()) {
      toast.error('Please enter room id');
      return;
    }
    navigate(`/chat/${roomId}`);
  };

  const handleGlobalJoin = () => {

    navigate(`/chat/global`);
  };

  return (
    <div className="min-h-screen gradient-background text-white relative">
      {/* <Header /> */}
      <GradientCircles />

      <div className="container min-h-screen mx-auto px-4 py-12 relative z-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <MessageCircle className="w-8 h-8" />
            <h1 className="text-4xl font-bold">Chat Room</h1>
          </div>

          <div className="container mx-auto px-4 pb-20 pt-10">

            <div className="glass p-8 rounded-xl animate-slide-up mb-10" style={{ animationDelay: "200ms" }}>
              <h2 className="text-2xl font-semibold mb-6">Join Global Room</h2>
              <p className="mb-6 text-gray-300">
                Connect with participants from around the world in a shared global room for open discussions and networking.
              </p>
              <GlassButton onClick={handleGlobalJoin}>
                Join Room
              </GlassButton>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Create Section */}
              <div className="glass p-8 rounded-xl animate-slide-up">
                <h2 className="text-2xl font-semibold mb-6">Create Room</h2>
                <p className="mb-6 text-gray-300">
                  Generate a unique room ID and share it with your contacts to start a private conversation.
                </p>
                <GlassButton onClick={handleCreate}>
                  Generate Room
                </GlassButton>
              </div>

              {/* Join Section */}
              <div className="glass p-8 rounded-xl animate-slide-up" style={{ animationDelay: "200ms" }}>
                <h2 className="text-2xl font-semibold mb-6">Join Room</h2>
                <input
                  type="text"
                  placeholder="Enter Room ID"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)} // Use clientChange for controlled input updates
                  className="w-full p-3 mb-4 bg-white/10 rounded-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <GlassButton onClick={handleJoin}>
                  Join Room
                </GlassButton>
              </div>
            </div>


          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateJoin;