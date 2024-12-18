import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import CreateJoin from "./pages/CreateJoin";
import ChatRoom from "./pages/ChatRoom";
import Documentation from "./pages/Documentation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import Status from "./pages/Status";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create" element={<CreateJoin />} />
          <Route path="/join" element={<CreateJoin />} />
          <Route path="/chat/:roomId" element={<ChatRoom />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/status" element={<Status />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;