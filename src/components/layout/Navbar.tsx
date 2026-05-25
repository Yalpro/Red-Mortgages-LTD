"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavStore } from "@/store/useNavStore";

// Type definitions for menu items
interface SubItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href?: string;
  subItems?: SubItem[];
}

export default function Navbar() {
  const pathname = usePathname();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useNavStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Monitor page scroll to apply premium shadow effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route changes
  useEffect(() => {
    closeMobileMenu();
    setActiveDropdown(null);
  }, [pathname, closeMobileMenu]);

  // Main Navigation links hierarchy
  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Mortgages",
      href: "/mortgages",
      subItems: [
        { name: "First Time Buyer", href: "/first-time-buyer" },
        { name: "Self Employed Mortgages", href: "/self-employed-mortgages" },
        { name: "Remortgaging", href: "/remortgaging" },
        { name: "Moving Home", href: "/moving-home" },
        { name: "Buy to Let Mortgages", href: "/buy-to-let" },
        { name: "Commercial Mortgages", href: "/commercial-mortgages" },
        { name: "Adverse Credit Mortgages", href: "/adverse-credit" },
      ],
    },
    {
      name: "Protection",
      href: "/protection",
      subItems: [
        { name: "A Guide to Protection", href: "/guide-to-protection" },
      ],
    },
    { name: "Calculator", href: "/mortgage-calculator" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`w-full bg-white transition-all duration-300 ${
          isScrolled ? "border-b border-primary/20 shadow-navbar" : "border-b border-primary"
        }`}
      >
        {/* ROW 2: Branding Center Row (Desktop & Mobile) */}
        <div className="w-full py-4 px-4 md:px-6 lg:px-8 bg-white border-b border-black/[0.03]">
          <div className="max-w-6xl mx-auto flex items-center justify-between md:justify-center relative">
            {/* Center Brand Logo */}
            <Link href="/" className="flex justify-center transition-transform hover:scale-[1.01] active:scale-95 duration-200">
              <Image
                src="/RMLTD-Logo.png"
                alt="Red Mortgages LTD Logo"
                width={200}
                height={83}
                priority
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>

            {/* Mobile Hamburger Trigger (visible only on small devices) */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-text-primary hover:text-primary transition-colors focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* ROW 3: Horizontal Desktop Nav Links (hidden on mobile) */}
        <div className="hidden md:block w-full bg-white py-1">
          <div className="max-w-6xl mx-auto flex justify-center">
            <ul className="flex items-center gap-8 lg:gap-12 py-1">
              {navItems.map((item) => {
                const hasSubItems = !!item.subItems;
                const isItemActive =
                  pathname === item.href ||
                  (hasSubItems && item.subItems?.some((sub) => sub.href === pathname)) ||
                  (item.href !== "/" && pathname.startsWith(item.href || "notfound"));

                return (
                  <li
                    key={item.name}
                    className="relative group py-2"
                    onMouseEnter={() => hasSubItems && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        prefetch={true}
                        className={`font-inter text-[13px] uppercase tracking-wider font-semibold flex items-center gap-1.5 py-1.5 transition-all duration-200 relative ${
                          isItemActive ? "text-primary" : "text-text-primary hover:text-primary"
                        }`}
                      >
                        {item.name}
                        {hasSubItems && <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-300" />}
                        {/* Static active border indicator */}
                        {isItemActive && (
                          <motion.span
                            layoutId="activeNavIndicator"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Link>
                    ) : (
                      <span
                        className={`font-inter text-[13px] uppercase tracking-wider font-semibold cursor-default flex items-center gap-1.5 py-1.5 transition-all duration-200 ${
                          isItemActive ? "text-primary" : "text-text-primary hover:text-primary"
                        }`}
                      >
                        {item.name}
                        {hasSubItems && <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-300" />}
                      </span>
                    )}

                    {/* Submenu Dropdown Container */}
                    <AnimatePresence>
                      {hasSubItems && activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 top-full w-56 bg-white border border-black/10 rounded-card shadow-card py-2 z-50 overflow-hidden"
                        >
                          <div className="flex flex-col">
                            {item.subItems?.map((sub) => {
                              const isSubActive = pathname === sub.href;
                              return (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  prefetch={true}
                                  className={`text-xs py-2.5 px-4 font-medium transition-all duration-150 flex items-center border-l-2 ${
                                    isSubActive
                                      ? "bg-red-light border-primary text-primary"
                                      : "border-transparent text-text-primary hover:bg-slate-50 hover:border-primary/40 hover:text-primary hover:pl-5"
                                  }`}
                                >
                                  {sub.name}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      {/* FULL-SCREEN MOBILE OVERLAY (replaces screen when hamburger clicked) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-primary text-white flex flex-col md:hidden"
          >
            {/* Header row in mobile overlay */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-primary-dark">
              <Image
                src="/logo-white.png"
                alt="Red Mortgages White Logo"
                width={120}
                height={50}
                className="h-8 w-auto object-contain brightness-200"
              />
              <button
                onClick={closeMobileMenu}
                className="p-2 text-white hover:text-white/80 transition-colors focus:outline-none"
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>

            {/* Scrollable list content */}
            <div className="flex-grow overflow-y-auto px-6 py-8 flex flex-col justify-between">
              <ul className="flex flex-col gap-6">
                {navItems.map((item, idx) => {
                  const hasSubItems = !!item.subItems;
                  return (
                    <li key={item.name} className="flex flex-col border-b border-white/5 pb-4">
                      {item.href ? (
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          prefetch={true}
                          className="text-lg font-semibold tracking-wider font-playfair hover:text-white/80 flex justify-between items-center"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <span className="text-lg font-semibold tracking-wider font-playfair text-white/60">
                          {item.name}
                        </span>
                      )}

                      {/* Render nested children if present */}
                      {hasSubItems && (
                        <div className="flex flex-col pl-4 mt-2 gap-3 border-l border-white/10">
                          {item.subItems?.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={closeMobileMenu}
                              prefetch={true}
                              className="text-sm font-medium py-1 text-white/80 hover:text-white"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Bottom Mobile Drawer Details */}
              <div className="mt-8 border-t border-white/10 pt-6 flex flex-col gap-4 text-xs text-white/80">
                <a href="tel:01514470047" className="flex items-center gap-3 py-1 hover:text-white">
                  <Phone size={14} />
                  <span>0151 447 0047</span>
                </a>
                <a href="mailto:admin@red-mortgages.co.uk" className="flex items-center gap-3 py-1 hover:text-white">
                  <Mail size={14} />
                  <span>admin@red-mortgages.co.uk</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
