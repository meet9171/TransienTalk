import { Shield, Zap, Timer, Lock, Users, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "End-to-End Privacy",
      description: "Your messages are completely private and secure, visible only to you and your chat partner.",
    },
    {
      icon: Timer,
      title: "Auto-Disappearing Messages",
      description: "Messages vanish when the chat ends, leaving no digital footprint behind.",
    },
    {
      icon: Zap,
      title: "Instant Messaging",
      description: "Experience real-time communication with zero lag or delays.",
    },
    {
      icon: Lock,
      title: "No Data Storage",
      description: "We never store your messages or personal information on our servers.",
    },
    {
      icon: Users,
      title: "One-to-One Chat",
      description: "Private conversations between two people, ensuring focused communication.",
    },
    {
      icon: Sparkles,
      title: "Modern Interface",
      description: "Clean, intuitive design that makes private messaging a pleasure.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-32 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Why Choose TransienTalk?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the perfect blend of security, privacy, and modern design in every conversation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl blur-xl group-hover:bg-white/20 transition-all duration-300" />
              <div className="relative backdrop-blur-sm rounded-3xl border border-white/10 p-8 h-full">
                <feature.icon className="w-12 h-12 mb-6 text-white group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;