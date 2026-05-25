"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";

// Omit HTML attributes that framer-motion redefines with incompatible signatures
type SafeButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onDragEnter"
  | "onDragLeave"
  | "onDragOver"
  | "onDrop"
  | "onAnimationStart"
>;

interface ButtonProps extends SafeButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles =
    "px-6 py-3 font-semibold text-xs uppercase tracking-widest rounded-[6px] inline-flex items-center justify-center transition-colors duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-sm border border-transparent",
    outline:
      "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white hover:border-transparent",
  };

  const buttonClasses = cn(baseStyles, variantStyles[variant], className);

  if (shouldReduceMotion) {
    return (
      <button className={buttonClasses} {...props}>
        {children}
      </button>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -1.5, boxShadow: "0 10px 20px -5px rgba(204, 0, 0, 0.15)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring" as const, stiffness: 400, damping: 20 }}
      className={buttonClasses}
      {...props}
    >
      {children}
    </motion.button>
  );
}
