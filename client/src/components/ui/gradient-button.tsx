import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ 
    children, 
    className, 
    variant = "primary", 
    size = "md",
    fullWidth = false,
    icon,
    iconPosition = "right",
    ...props 
  }, ref) => {
    const variants = {
      primary: "bg-gradient-purple-blue text-white hover:opacity-90",
      secondary: "bg-accent text-white hover:opacity-90",
      outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
    };

    const sizes = {
      sm: "py-2 px-4 text-sm",
      md: "py-3 px-6",
      lg: "py-4 px-8 text-lg"
    };

    return (
      <button
        className={cn(
          "font-poppins rounded-md transition duration-300 flex items-center justify-center",
          variants[variant],
          sizes[size],
          fullWidth ? "w-full" : "",
          className
        )}
        ref={ref}
        {...props}
      >
        {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
      </button>
    );
  }
);

GradientButton.displayName = "GradientButton";

export default GradientButton;
