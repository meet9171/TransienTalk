import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div 
          className="text-2xl font-bold text-white cursor-pointer"
          onClick={() => navigate("/")}
        >
          WhisperGlass
        </div>
      </div>
    </header>
  );
};

export default Header;