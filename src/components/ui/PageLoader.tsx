"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-gradient-to-br from-white via-white to-red-light/20 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-6"
      >
        {/* Logo Container with subtle pulse */}
        <motion.div
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-16 w-48 md:h-20 md:w-56"
        >
          <Image
            src="/RMLTD-Logo.png"
            alt="Red Mortgages LTD Logo"
            fill
            priority
            className="object-contain"
          />
        </motion.div>

        {/* Premium Spinner and Text */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative flex items-center justify-center h-8 w-8">
            <svg
              className="animate-spin text-primary w-6 h-6 absolute"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
          <p className="text-xs font-semibold tracking-widest uppercase text-text-secondary animate-pulse">
            Preparing your experience...
          </p>
        </div>
      </motion.div>
    </div>
  );
}
