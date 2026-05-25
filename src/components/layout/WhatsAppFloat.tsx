"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-[99999] group flex items-center">
      {/* Hover tooltip */}
      <span className="hidden sm:inline-block absolute right-[4.5rem] bg-gray-900 text-white text-xs font-semibold py-1.5 px-3 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 pointer-events-none border border-white/10 select-none">
        Chat on WhatsApp
      </span>

      {/* Pulsing ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />

      {/* Floating button */}
      <motion.a
        href="https://wa.me/441514470047"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-colors duration-300 hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
      >
        <FaWhatsapp className="h-8 w-8 text-white" />
      </motion.a>
    </div>
  );
}
