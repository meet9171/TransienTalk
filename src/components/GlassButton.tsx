import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const GlassButton = ({
  children,
  className,
  variant = "primary",
  ...props
}: GlassButtonProps) => {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105",
        variant === "primary"
          ? "glass bg-white/10 text-white hover:bg-white/20"
          : "glass-dark bg-black/10 text-black hover:bg-black/20",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default GlassButton;