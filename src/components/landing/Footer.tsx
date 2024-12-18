import { Github, Twitter, Linkedin, FileText, Shield, LifeBuoy, Mail, Server } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-16 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-3xl p-12">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">TransienTalk</h3>
              <p className="text-gray-300">Secure, temporary chat for private conversations.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white/80 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-white/80 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-white/80 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/documentation" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                    <FileText className="w-4 h-4" />
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                    <Shield className="w-4 h-4" />
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                    <Shield className="w-4 h-4" />
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Help</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/support" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                    <LifeBuoy className="w-4 h-4" />
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                    <Mail className="w-4 h-4" />
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/status" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                    <Server className="w-4 h-4" />
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
            © 2024 TransienTalk. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;