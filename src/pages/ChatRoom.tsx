import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GradientCircles from "@/components/GradientCircles";
import GlassButton from "@/components/GlassButton";
import { Send, Copy, LogOut, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  sender: "me" | "other";
  timestamp: number;
}

const ChatRoom = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [showInfo, setShowInfo] = useState(true);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleCopyRoomId = () => {
    navigator.clipboard.writeText(roomId || "");
    toast({
      title: "Room ID copied!",
      description: "Share this with your contact to join the chat.",
    });
  };

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Math.random().toString(36).substring(7),
      text: newMessage,
      sender: "me",
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, message]);
    setNewMessage("");
    setShowInfo(false);

    // Simulate received message
    setIsTyping(true);
    setTimeout(() => {
      const response: Message = {
        id: Math.random().toString(36).substring(7),
        text: "This is a simulated response.",
        sender: "other",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="h-screen w-screen gradient-background text-white flex flex-col">
      <GradientCircles />
      
      <div className="flex-1 flex flex-col relative">
        {/* Header */}
        <div className="glass border-b border-white/10 p-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-semibold">TransienTalk</h2>
              <button
                onClick={handleCopyRoomId}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                title="Copy Room ID"
              >
                <span className="text-sm font-mono">{roomId}</span>
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <GlassButton
              variant="secondary"
              onClick={() => navigate("/create")}
              className="px-4 py-2 flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Leave Room
            </GlassButton>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto container mx-auto px-4 py-6">
          {showInfo && (
            <div className="flex justify-center mb-8">
              <div className="glass p-4 rounded-lg max-w-md text-center space-y-2">
                <Info className="w-6 h-6 mx-auto mb-2" />
                <p className="text-sm text-gray-300">
                  Messages in this chat are temporary and will disappear when you close the room.
                  Share the room ID with your contact to start chatting.
                </p>
              </div>
            </div>
          )}
          
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] p-4 rounded-2xl animate-slide-up ${
                    message.sender === "me"
                      ? "bg-white/20 ml-auto rounded-tr-none"
                      : "bg-black/20 rounded-tl-none"
                  }`}
                >
                  <p className="break-words">{message.text}</p>
                  <span className="text-xs text-white/60 mt-1 block">
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-black/20 p-4 rounded-2xl rounded-tl-none animate-pulse">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-white/60"></div>
                    <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="glass border-t border-white/10 p-4">
          <div className="container mx-auto">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 p-3 bg-white/10 rounded-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <GlassButton 
                onClick={handleSend} 
                className="px-6 hover:scale-105 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
              </GlassButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;