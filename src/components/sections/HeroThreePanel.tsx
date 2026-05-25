"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/motion/FadeUp";
import StaggerChildren, { staggerItemVariants } from "@/components/motion/StaggerChildren";
import { motion } from "framer-motion";

export default function HeroThreePanel() {
  const panels = [
    {
      title: "Mortgages",
      body: "At Red Mortgages, we specialise in helping you navigate the complicated world of home ownership whether you are a first time buyer, moving home or re-mortgaging. As whole of market mortgage experts, we are with you every step of the way.",
      href: "/mortgages",
    },
    {
      title: "Protection",
      body: "Choosing the right policy, or combination of policies to provide the right level of protection you need can be a daunting task. We will review your personal circumstances and recommend the type of insurance you need, giving you and your family the reassurance and peace of mind that protection insurance can bring.",
      href: "/protection",
    },
    {
      title: "General Insurance",
      body: "Here at Red Mortgages, we can provide you with peace of mind, making sure you have the right insurance in place. We do all the hard work for you – from researching to sourcing a range of insurance products, to make sure it matches your individual needs and budget.",
      href: "/protection",
    },
  ];

  return (
    <div className="relative w-full min-h-[85vh] lg:min-h-screen flex items-center justify-center py-20 lg:py-28 overflow-hidden bg-gray-950">
      {/* UK Property Landscape Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.01]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=1920')",
        }}
      />
      {/* Dark overlay with slight red tint to blend into the brand */}
      <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-gray-950 via-black/45 to-black/65 z-0" />
      
      {/* Contents */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center gap-12 lg:gap-16">
        
        {/* Core Header Text */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-4 text-white">
          <FadeUp y={20} duration={0.6}>
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary bg-white/10 px-4 py-1.5 rounded-full inline-block backdrop-blur-sm select-none border border-white/5">
              Results Expertly Delivered
            </span>
          </FadeUp>
          <FadeUp y={20} delay={0.15} duration={0.6}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair tracking-tight leading-tight select-none">
              Welcome to <span className="text-primary font-bold">Red Mortgages</span>
            </h2>
          </FadeUp>
          <FadeUp y={15} delay={0.28} duration={0.6}>
            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl mx-auto font-medium">
              We guide you through home ownership and protection with stress-free, friendly, and expert financial advice tailored to you.
            </p>
          </FadeUp>
        </div>

        {/* 3-Column Panels Layout */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {panels.map((panel, index) => (
            <motion.div
              key={panel.title}
              variants={staggerItemVariants}
              className="group bg-black/40 backdrop-blur-md rounded-card border border-white/10 p-6 lg:p-8 flex flex-col justify-between hover:bg-black/60 hover:border-primary/50 transition-all duration-300 shadow-premium"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold font-playfair text-white border-b border-white/10 pb-3 group-hover:text-primary premium-transition">
                  {panel.title}
                </h3>
                <p className="text-xs lg:text-sm text-white/80 leading-relaxed font-medium">
                  {panel.body}
                </p>
              </div>
              <div className="mt-8">
                <Link href={panel.href}>
                  <Button variant="outline" className="w-full text-white border-white/20 hover:bg-primary group-hover:border-transparent">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>

      </div>
    </div>
  );
}
