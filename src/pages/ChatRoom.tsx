// import { useState, useEffect, useRef } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { io } from "socket.io-client";
// import GradientCircles from "@/components/GradientCircles";
// import GlassButton from "@/components/GlassButton";
// import { Send, Copy, LogOut, Info } from "lucide-react";
// import { toast } from "sonner";

// interface Message {
//   id: string;
//   text: string;
//   sender: string;
//   timestamp: number;
//   roomID: string;
// }

// // Initialize socket connection
// const socket = io("https://transientalk-socket.onrender.com/"); // Replace with your backend URL

// const ChatRoom = () => {
//   const { roomId } = useParams();
//   const navigate = useNavigate();
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState("");
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const [isTyping, setIsTyping] = useState(false);
//   const [showInfo, setShowInfo] = useState(true);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };
//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);
//   // Connect to the room
//   useEffect(() => {
//     if (roomId) {
//       socket.emit("joinRoom", roomId);
//       console.log(`Joined room: ${roomId}`);
//     }

//     return () => {
//       socket.disconnect(); // Disconnect when the component unmounts
//     };
//   }, [roomId]);

//   // Listen for incoming chat messages
//   useEffect(() => {
//     socket.on("chatMessage", (msg: Message) => {
//       setMessages((prev) => [...prev, msg]);
//     });

//     return () => {
//       socket.off("chatMessage");
//     };
//   }, []);

//   const handleSend = () => {
//     if (!newMessage.trim()) return;

//     const message: Message = {
//       id: Math.random().toString(36).substring(7),
//       text: newMessage,
//       sender: socket.id,
//       timestamp: Date.now(),
//       roomID: roomId || "",
//     };

//     // Emit the message to the server
//     socket.emit("chatMessage", message);

//     // Update local state
//     setNewMessage("");
//     setShowInfo(false);
//   };

//   return (
//     <div className="h-screen w-screen gradient-background text-white flex flex-col">
//       <GradientCircles />
//       <div className="flex-1 flex flex-col h-screen relative">
//         {/* Header */}
//         <div className="glass border-b border-white/10 p-4">
//           <div className="container mx-auto flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <h2 className="text-xl font-semibold">TransienTalk</h2>
//               <button
//                 onClick={() => {
//                   navigator.clipboard.writeText(roomId || "");
//                   toast.success("Room ID copied!" ,{position : "top-right"});
//                 }}
//                 className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
//                 title="Copy Room ID"
//               >
//                 <span className="text-sm font-mono">{roomId}</span>
//                 <Copy className="w-4 h-4" />
//               </button>
//             </div>
//             <GlassButton
//               variant="secondary"
//               onClick={() => navigate("/create")}
//               className="px-4 py-2 flex items-center gap-2 text-white"
//             >
//               <LogOut className="w-4 h-4" />
//               Leave Room
//             </GlassButton>
//           </div>
//         </div>

//         {/* Messages */}
//         <div className="flex-1 overflow-y-auto container mx-auto px-4 py-6">
//           {showInfo && (
//             <div className="flex justify-center mb-8">
//               <div className="glass p-4 rounded-lg max-w-md text-center space-y-2">
//                 <Info className="w-6 h-6 mx-auto mb-2" />
//                 <p className="text-sm text-gray-300">
//                   Messages in this chat are temporary and will disappear when you close the room.
//                   Share the room ID with your contact to start chatting.
//                 </p>
//               </div>
//             </div>
//           )}

//           <div className="space-y-4 ">
//             {messages.map((message) => (
//               <div
//                 key={message.id}
//                 className={`flex ${
//                   message.sender === socket.id ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`max-w-[70%] p-4 rounded-2xl animate-slide-up ${
//                     message.sender === socket.id
//                       ? "bg-white/20 ml-auto rounded-tr-none"
//                       : "bg-black/20 rounded-tl-none"
//                   }`}
//                 >
//                   <p className="break-words">{message.text}</p>
//                   <span className="text-xs text-white/60 mt-1 block">
//                     {new Date(message.timestamp).toLocaleTimeString()}
//                   </span>
//                 </div>
//               </div>
//             ))}
//             <div ref={messagesEndRef} />
//           </div>
//         </div>

//         {/* Input */}
//         <div className="glass border-t border-white/10 p-4">
//           <div className="container mx-auto">
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 onKeyPress={(e) => e.key === "Enter" && handleSend()}
//                 placeholder="Type your message..."
//                 className="flex-1 p-3 bg-white/10 rounded-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
//               />
//               <GlassButton 
//                 onClick={handleSend} 
//                 className="px-6 hover:scale-105 transition-all duration-300"
//               >
//                 <Send className="w-5 h-5" />
//               </GlassButton>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatRoom;



import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import GradientCircles from "@/components/GradientCircles";
import GlassButton from "@/components/GlassButton";
import { Send, Copy, LogOut, Info, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Grid } from "@giphy/react-components";


interface Message {
  id: string;
  text?: string;
  gifUrl?: string; // Add gifUrl for messages
  sender: string;
  timestamp: number;
  roomID: string;
}

// Initialize socket connection
const socket = io("https://devnode.coderkubes.com/"); // Replace with your backend URL

const gf = new GiphyFetch("vlOmO29Rx9nBbHwcWzZY8mq6rWTTBZmi"); // Replace with your Giphy API key
const API_KEY = "AIzaSyB2-eSDqxUUfGD2hRI25Cc3ebfcZ3us9jI"; // Replace with your API key

// const fetchGif = async () => {
//   try {
//     const response = await fetch(
//       `https://tenor.googleapis.com/v2/search?q=${SEARCH_TERM}&key=${API_KEY}&limit=2`
//     );
//     const data = await response.json();
//     console.log(data);

//     return data.results[0].media_formats.gif.url; // Get GIF URL
//   } catch (error) {
//     console.error("Error fetching GIF:", error);
//   }
// };

const ChatRoom = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [showGifPicker, setShowGifPicker] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showInfo, setShowInfo] = useState(true);

  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("trending");

  useEffect(() => {
    fetchGIFs(searchTerm);
  }, [searchTerm]);


  const fetchGIFs = async (query:any) => {
    
    try {
      const response = await fetch(
        `https://tenor.googleapis.com/v2/search?q=${query}&key=${API_KEY}&limit=99`
      );
      const data = await response.json();
      setGifs(data.results);
    } catch (error) {
      console.error("Error fetching GIFs:", error);
    }
  };

  // document.addEventListener("keyup", (e)=>{
  //   e.preventDefault();
  //   console.log(e.keyCode);

  //   if(e.keyCode == 44){
  //     alert("Screenshot not allowed")
  //   }
    
  // })

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Connect to the room
  useEffect(() => {
    if (roomId) {
      socket.emit("joinRoom", roomId);
      console.log(`Joined room: ${roomId}`);
    }

    return () => {
      socket.disconnect(); // Disconnect when the component unmounts
    };
  }, [roomId]);

  // Listen for incoming chat messages
  useEffect(() => {
    socket.on("chatMessage", (msg: Message) => {
      console.log(msg);
      
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("chatMessage");
    };
  }, []);

  const handleSend = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Math.random().toString(36).substring(7),
      text: newMessage,
      sender: socket.id,
      timestamp: Date.now(),
      roomID: roomId || "",
    };

    // Emit the message to the server
    socket.emit("chatMessage", message);

    // Update local state
    setNewMessage("");
    setShowInfo(false);
  };

  const sendGif = (gifUrl: string) => {
    const message: Message = {
      id: Math.random().toString(36).substring(7),
      gifUrl,
      sender: socket.id,
      timestamp: Date.now(),
      roomID: roomId || "",
    };

    // Emit the message to the server
    socket.emit("chatMessage", message);

    // Hide the GIF picker
    setShowGifPicker(false);
  };


 

  return (
    <div className="h-screen w-screen gradient-background text-white flex flex-col">
      <GradientCircles />
      <div className="flex-1 flex flex-col h-screen relative">
        {/* Header */}
        <div className="glass border-b border-white/10 p-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-semibold" onClick={() => navigate("/")}>TransienTalk</h2>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`https://transientalk.netlify.app/chat/${roomId}` || "");
                  toast.success("Room ID copied!", { position: "top-right" });
                }}
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
              className="px-4 py-2 flex items-center gap-2 text-white"
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
                className={`${socket.id == message.sender ? "flex justify-end" : "flex justify-start"} `}
              >
                <div
                  className={`max-w-[70%] p-4 rounded-2xl animate-slide-up `}
                >
                  {message.text && <p className="break-words">{message.text}</p>}
                  {message.gifUrl && (
                    <img src={message.gifUrl} alt="GIF" className="rounded-lg" />
                  )}
                  <span className="text-xs text-white/60 mt-1 block">
                    {new Date(message.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {showGifPicker && (
          <div
            className="mx-auto w-screen bg-transparent p-4 rounded-t-lg shadow-lg overflow-y-auto"
            style={{ height: "50%" }}
          >
            {/* <Grid
              fetchGifs={(offset) => gf.trending({ offset, limit: 10 })}
              width={800}
              columns={6}
              gutter={6}
              onGifClick={(gif, e) => {
                e.preventDefault(); // Prevent default behavior (redirect)
                sendGif(gif.images.fixed_height.url); // Send the GIF URL as a message
              }}
            /> */}

            <div className="gif-grid" style={{width: 'auto', display:'flex', flexWrap: 'wrap'}}>
              {gifs.map((gif) => (
                <img
                  key={gif.id}
                  style={{ height: '120px' }}
                  src={gif.media_formats.gif.url} // Tenor provides optimized GIF formats
                  alt="GIF"
                  className="gif-item"
                  onClick={() => sendGif(gif.media_formats.gif.url)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="glass border-t border-white/10 p-4">
          <div className="container mx-auto">
            <div className="flex gap-2 items-center">
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
              <GlassButton
                onClick={() => setShowGifPicker(!showGifPicker)}
                className="px-3 hover:scale-105 transition-all duration-300"
              >
                <ImageIcon className="w-5 h-5" />
              </GlassButton>
              <input
                type="text"
                placeholder="Search GIFs..."
                value={searchTerm}
                style={{backgroundColor:"rgb(255 255 255 / 0.1)", padding:"10px", borderRadius:"8px"}}
                onChange={(e) => {
                  const value = e.target.value.trim(); // Remove leading/trailing spaces
                  setSearchTerm(value || "trending"); // If empty, fallback to "trending"
                }}
              
                className="search-input"
              />
            </div>

          </div>
        </div>

        {/* {showGifPicker && (
          <div className="absolute bottom-20 left-0 right-0 container mx-auto bg-white p-4 rounded-lg shadow-lg">
            <Grid
              fetchGifs={(offset) => gf.trending({ offset, limit: 10 })}
              width={800}
              columns={3}
              gutter={6}
              onGifClick={(gif) => sendGif(gif.images.fixed_height.url)}
            />
          </div>
        )} */}



      </div>
    </div>
  );
};

export default ChatRoom;
