"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function Button({ 
  children, 
  variant = "primary", 
  size = "md",
  className,
  onClick,
  href 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 cursor-pointer";
  
  const variants = {
    primary: "bg-white text-[#0a0a0f] hover:bg-[#00d4ff] hover:text-white",
    secondary: "bg-[#00d4ff] text-[#0a0a0f] hover:bg-white",
    outline: "border border-[rgba(255,255,255,0.08)] text-white hover:border-[#00d4ff] hover:text-[#00d4ff] bg-transparent"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const Component = href ? motion.a : motion.button;
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  );
}