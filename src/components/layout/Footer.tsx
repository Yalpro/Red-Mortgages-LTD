"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full text-white bg-primary">
      {/* Upper Footer section (Red background) */}
      <div className="max-w-6xl mx-auto py-16 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90">
              <Image
                src="/logo-white.png"
                alt="Red Mortgages White Logo"
                width={180}
                height={75}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-white/90 leading-relaxed max-w-xs">
              Results Expertly Delivered. We are your dedicated whole-of-market mortgage and protection specialists, based in Liverpool.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://www.facebook.com/redmortgagesltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook link"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/60 text-xs font-bold text-white transition hover:bg-white hover:text-primary"
              >
                f
              </a>
              <a
                href="https://www.linkedin.com/in/red-mortgages-ltd-a3703474?originalSubdomain=uk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn link"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/60 text-[10px] font-bold text-white transition hover:bg-white hover:text-primary"
              >
                in
              </a>
              <a
                href="https://instagram.com/redmortgagesltd?r=nametag"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram link"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/60 text-[10px] font-bold text-white transition hover:bg-white hover:text-primary"
              >
                ig
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-base font-bold tracking-wider uppercase border-b border-white/20 pb-2">
              Useful Links
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm text-white/90">
              <li>
                <Link href="/about" className="hover:underline transition-all hover:pl-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/mortgages" className="hover:underline transition-all hover:pl-1">
                  Mortgages
                </Link>
              </li>
              <li>
                <Link href="/protection" className="hover:underline transition-all hover:pl-1">
                  Protection
                </Link>
              </li>
              <li>
                <Link href="/mortgage-calculator" className="hover:underline transition-all hover:pl-1">
                  Mortgage Calculator
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline transition-all hover:pl-1">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Business Hours */}
          <div className="flex flex-col gap-6">
            <h4 className="text-base font-bold tracking-wider uppercase border-b border-white/20 pb-2">
              Business Hours
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-white/90">
              <li className="flex flex-col">
                <span className="font-semibold text-white">Monday - Friday</span>
                <span className="text-white/85">9am - 5pm</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-white">Saturday & Sunday</span>
                <span className="text-white/85">Closed</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Business Details */}
          <div className="flex flex-col gap-6">
            <h4 className="text-base font-bold tracking-wider uppercase border-b border-white/20 pb-2">
              Business Details
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-white/90">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  RED MORTGAGES LTD, Level One, Basecamp Liverpool, 49 Jamaica Street, Liverpool, L1 0AH
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:01514470047" className="hover:underline font-semibold">
                  0151 447 0047
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:admin@red-mortgages.co.uk" className="hover:underline">
                  admin@red-mortgages.co.uk
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Compliance / Legal Section (Darker red background) */}
      <div className="w-full bg-primary-dark text-xs py-10 px-4 md:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 text-white/90 leading-relaxed">
          
          <div className="p-4 border-l-4 border-white/40 bg-black/10 rounded-r">
            <p className="font-bold uppercase tracking-wider text-white mb-1">
              Risk Warning
            </p>
            <p>
              Your Home (or property) may be repossessed if you do not keep up repayments on your mortgage or any other debts secured on it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/80">
            <div>
              <p className="font-bold text-white mb-0.5">Adviser Fee Statement:</p>
              <p>
                You may be charged a fee for mortgage advice. The precise amount will depend on your circumstances but we estimate it will be £395.
              </p>
            </div>
            <div>
              <p className="font-bold text-white mb-0.5">Regulatory Scope:</p>
              <p>
                The information contained in this website is subject to UK regulatory regime and is therefore intended for consumers based in the UK.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 text-white/70">
            <p>
              Red Mortgages LTD is Authorised and Regulated by the Financial Conduct Authority. The financial services register number is 930475. Registered in England No 12642186. Registered office: 1 Limetree Road, Liverpool L32 1BL.
            </p>
          </div>

        </div>
      </div>

      {/* Copyright/Privacy Bar (Deepest red background) */}
      <div className="w-full bg-[#700000] text-[11px] py-4 px-4 md:px-6 lg:px-8 text-white/70">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Red Mortgages LTD. All rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
