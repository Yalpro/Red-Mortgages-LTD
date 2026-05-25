"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({ children, className = "", onClick }: CardProps) {
  const shouldReduceMotion = useReducedMotion();

  const baseStyles =
    "bg-white rounded-card p-6 md:p-8 shadow-premium border-l-4 border-transparent hover:border-primary transition-all duration-300 relative overflow-hidden";

  const hoverStyles = onClick
    ? "cursor-pointer hover:shadow-card"
    : "hover:shadow-card";

  const combinedClasses = cn(baseStyles, hoverStyles, className);

  if (shouldReduceMotion) {
    return (
      <div className={combinedClasses} onClick={onClick}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -3,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={combinedClasses}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
