"use client";

// Updated icons import (Facebook removed)
import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden md:block w-full bg-primary text-white text-xs py-2.5 px-4 md:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left Side: Contact Info */}
        <div className="flex items-center gap-6">
          <a
            href="tel:01514470047"
            className="flex items-center gap-2 hover:text-white/80 transition-colors duration-200"
            aria-label="Call Red Mortgages on 0151 447 0047"
          >
            <Phone size={13} className="text-white/95" />
            <span className="font-medium tracking-wide">0151 447 0047</span>
          </a>
          <span className="w-px h-3 bg-white/20" />
          <a
            href="mailto:admin@red-mortgages.co.uk"
            className="flex items-center gap-2 hover:text-white/80 transition-colors duration-200"
            aria-label="Email Red Mortgages at admin@red-mortgages.co.uk"
          >
            <Mail size={13} className="text-white/95" />
            <span className="font-medium tracking-wide">admin@red-mortgages.co.uk</span>
          </a>
        </div>

        {/* Right Side: Social Media Links */}
        <div className="flex items-center gap-4">
          <span className="text-white/80">Follow us on:</span>
          <div className="flex items-center gap-3">
<a
  href="https://www.facebook.com/redmortgagesltd/"
  target="_blank"
  rel="noreferrer"
  aria-label="Follow Red Mortgages on Facebook"
  className="flex h-6 w-6 items-center justify-center rounded-full border border-white/70 text-xs font-bold text-white transition hover:bg-white hover:text-[#CC0000]"
>
  f
</a>
<a
  href="https://www.linkedin.com/in/red-mortgages-ltd-a3703474?originalSubdomain=uk"
  target="_blank"
  rel="noreferrer"
  aria-label="Follow Red Mortgages on LinkedIn"
  className="flex h-6 w-6 items-center justify-center rounded-full border border-white/70 text-[10px] font-bold text-white transition hover:bg-white hover:text-[#CC0000]"
>
  in
</a>
<a
  href="https://instagram.com/redmortgagesltd?r=nametag"
  target="_blank"
  rel="noreferrer"
  aria-label="Follow Red Mortgages on Instagram"
  className="flex h-6 w-6 items-center justify-center rounded-full border border-white/70 text-[10px] font-bold text-white transition hover:bg-white hover:text-[#CC0000]"
>
  ig
</a>
          </div>
        </div>
      </div>
    </div>
  );
}
