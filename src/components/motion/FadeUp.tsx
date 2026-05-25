"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.5,
  y = 30,
  className = "",
}: FadeUpProps) {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, render immediately without transitions
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1], // premium easeOutCubic
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
