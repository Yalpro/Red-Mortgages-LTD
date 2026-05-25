import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/motion/FadeUp";
import StaggerChildren, { staggerItemVariants } from "@/components/motion/StaggerChildren";
import { AlertTriangle, Home, Move, Building2, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

export const metadata = {
  title: "Mortgages | Whole of Market Mortgage Specialists",
  description: "Browse Red Mortgages whole-of-market options. We specialise in helping first-time buyers, home movers, landlords, and over-55 equity release options.",
};

export default function MortgagesPage() {
  const mortgageTypes = [
    {
      title: "First Time Buyers",
      icon: Home,
      body: "If you're a first-time buyer, stepping onto the property ladder can be a daunting process. That's why we're here to help. Jenny and Hayley will work with you to understand your financial situation and find the right mortgage deal to suit your needs. We'll guide you through the process, from application to completion, making sure you understand all the terms and conditions along the way.",
      href: "/first-time-buyer",
      warning: null,
    },
    {
      title: "Moving Home",
      icon: Move,
      body: "If you're looking to move home, finding the right mortgage is just as important as finding the right house. Hayley and Jenny will help you assess your options and locate suitable interest rates and deals on interest rates. We'll work with you to make sure your transition is as smooth and stress-free as possible.",
      href: "/moving-home",
      warning: null,
    },
    {
      title: "Buy to Let",
      icon: Building2,
      body: "If you're a landlord looking to expand your property portfolio or buy your first investment property, we can help. Jenny and Hayley have experience in the Buy to Let market and will help you navigate the complex regulations and requirements. We'll assist you in finding suitable deals on interest rates and terms, ensuring your investment works for you.",
      href: "/buy-to-let",
      warning: "The Financial Conduct Authority does not regulate some forms of Buy to Let mortgages.",
    },
    {
      title: "Options for Over 55s",
      icon: CalendarDays,
      body: "At Red Mortgages, we believe that everyone should have access to the right mortgage options, regardless of their age. That's why we offer a range of services for over 55s, including equity release products. Jenny and Hayley will help you assess your options and determine whether equity release is suitable for your circumstances, giving you the reassurance and peace of mind you deserve.",
      href: "/contact",
      warning: "This is a lifetime mortgage or home reversion scheme. To understand the features and risks, ask for a personalised illustration.",
    },
  ];

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        title="Mortgages"
        subtitle="Whole-of-market mortgage experts with access to thousands of deals, helping you navigate home loans with peace of mind."
        backgroundImageUrl="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920"
      />

      {/* Intro section */}
      <section className="py-16 bg-white border-b border-black/[0.03]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Universal Repossession Warning */}
          <FadeUp className="mb-10">
            <div className="flex gap-4 p-5 bg-amber-50 border-l-4 border-amber-600 rounded shadow-sm text-xs md:text-sm text-amber-800 leading-relaxed font-semibold">
              <AlertTriangle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Important Notice:</strong> Your Home (or property) may be repossessed if you do not keep up repayments on your mortgage or any other debts secured on it.
              </p>
            </div>
          </FadeUp>

          {/* Intro Copy */}
          <div className="max-w-3xl flex flex-col gap-6 text-sm text-text-secondary leading-relaxed font-medium">
            <p>
              At Red Mortgages, we believe that everyone deserves access to the right mortgage options, no matter their circumstances. That&apos;s why we offer a wide range of services to help you find the right mortgage for your needs, from first-time buyer options to remortgage services.
            </p>
            <p>
              Jenny and Hayley have years of experience in the financial services industry and we pride ourselves on our knowledge of the market and our commitment to customer service. We&apos;ll be with you every step of the way, from the initial consultation to the completion of your mortgage.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of Main Mortgage Sub-Categories */}
      <section className="py-16 lg:py-24 bg-surface-alt">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          <SectionHeader
            title="Our Mortgage Services"
            subtitle="Explore our specialties. Click on each card to learn more about how Hayley and Jenny can tailor your options."
          />

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {mortgageTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div key={type.title} className="h-full">
                  <Card className="flex flex-col justify-between h-full bg-white p-8 group hover:border-primary premium-transition">
                    <div className="flex flex-col gap-4">
                      <div className="p-3 bg-red-light rounded-full text-primary w-fit group-hover:scale-110 premium-transition">
                        <Icon size={24} />
                      </div>
                      
                      <h3 className="text-xl font-bold font-playfair text-text-primary group-hover:text-primary premium-transition">
                        {type.title}
                      </h3>
                      
                      <p className="text-xs text-text-secondary leading-relaxed font-medium">
                        {type.body}
                      </p>

                      {type.warning && (
                        <div className="mt-3 p-3 bg-amber-50/70 border-l-2 border-amber-500 rounded text-[11px] text-amber-800 leading-normal font-semibold">
                          {type.warning}
                        </div>
                      )}
                    </div>

                    <div className="mt-8 flex justify-between items-center">
                      <Link href={type.href}>
                        <Button variant="outline" className="text-xs group-hover:bg-primary group-hover:text-white">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </div>
              );
            })}
          </StaggerChildren>

        </div>
      </section>

      {/* Bottom Compliance Callouts Banner */}
      <section className="py-16 bg-white border-t border-black/[0.03] select-none text-center">
        <div className="max-w-3xl mx-auto px-4 flex flex-col gap-6 items-center">
          <h4 className="text-xl font-bold font-playfair text-text-primary">
            Need Expert Advice Tailored to You?
          </h4>
          <p className="text-xs text-text-muted max-w-lg leading-relaxed">
            You may be charged a fee for mortgage advice. The precise amount will depend on your circumstances but we estimate it will be £395. The Financial Conduct Authority does not regulate some forms of Commercial Mortgages.
          </p>
          <div className="flex gap-4 mt-2">
            <Link href="/mortgage-calculator">
              <Button variant="outline">Mortgage Calculator</Button>
            </Link>
            <Link href="/contact">
              <Button>Book Consultation</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
