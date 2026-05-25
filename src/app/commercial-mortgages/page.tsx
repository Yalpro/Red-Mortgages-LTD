import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/motion/FadeUp";
import StaggerChildren, { staggerItemVariants } from "@/components/motion/StaggerChildren";
import { AlertTriangle, Briefcase, Building, Wrench, ArrowRightLeft } from "lucide-react";
import { motion } from "framer-motion";

export const metadata = {
  title: "Commercial Mortgages Liverpool | Hayley & Jenny",
  description: "Finance business premises, offices, or warehouse properties. Hayley and Jenny connect business owners with specialized commercial underwriting options.",
};

export default function CommercialMortgagesPage() {
  const types = [
    {
      title: "Owner-Occupied Finance",
      icon: Briefcase,
      desc: "Secure long-term funding to buy premises for your own business to trade from, replacing expensive rental leases with equity-building investments.",
    },
    {
      title: "Commercial Buy to Let",
      icon: Building,
      desc: "Buy retail shops, offices, blocks of flats, or light industrial warehouses to lease out to commercial tenants as a robust investment stream.",
    },
    {
      title: "Development Finance",
      icon: Wrench,
      desc: "Short-term funding solutions to cover construction costs, property conversions, structural renovations, or major commercial refits.",
    },
    {
      title: "Bridging Loans",
      icon: ArrowRightLeft,
      desc: "Quick, short-term borrowing to bridge transaction gaps, acquire land at auction, or secure properties requiring urgent refurbishment before long-term financing.",
    },
  ];

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        title="Commercial Mortgages"
        subtitle="Sourcing robust funding options for offices, retail outlets, industrial units, and development projects."
        backgroundImageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920"
      />

      {/* Main Core Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Repossession & Regulation Warning alerts */}
          <FadeUp className="mb-12 flex flex-col gap-4">
            <div className="flex gap-4 p-5 bg-amber-50 border-l-4 border-amber-600 rounded shadow-sm text-xs md:text-sm text-amber-800 leading-relaxed font-semibold">
              <AlertTriangle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Think carefully before securing debts against your home.</strong> Your home or property may be repossessed if you do not keep up repayments on your mortgage.
              </p>
            </div>
            <div className="flex gap-4 p-4 bg-red-50 border-l-4 border-primary rounded shadow-sm text-xs text-primary leading-normal font-bold">
              <AlertTriangle size={18} className="text-primary flex-shrink-0" />
              <p>
                The Financial Conduct Authority does not regulate some forms of Commercial Mortgages.
              </p>
            </div>
          </FadeUp>

          <div className="max-w-3xl flex flex-col gap-6 text-sm text-text-secondary leading-relaxed font-medium">
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-text-primary">
              Business Financing Solutions
            </h2>
            <p>
              At Red Mortgages, we believe that everyone deserves access to the right mortgage options, no matter their circumstances or business objectives. That&apos;s why we work with specialised partners to offer a range of Commercial Mortgage options to help business owners and property investors find the right funding for their needs.
            </p>
            <p>
              Jenny and Hayley understand that commercial lending requires a completely different approach compared to residential home loans. We work alongside top commercial underwriters to package your application and secure competitive business rates. We help you present clear business plans, accounts, and lease yields to lenders to obtain optimal lending agreements.
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Lending Types Section */}
      <section className="py-16 lg:py-24 bg-surface-alt border-t border-black/[0.03]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          <SectionHeader
            title="Commercial Finance Pathways"
            subtitle="Let Hayley and Jenny work with our premier commercial lending partners to locate a package that matches your business strategy."
            centered
          />

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {types.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="h-full">
                  <Card className="flex flex-col justify-between h-full bg-white group hover:border-primary premium-transition">
                    <div className="flex flex-col gap-4">
                      <div className="p-3 bg-red-light rounded-full text-primary w-fit group-hover:scale-110 premium-transition">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-base font-bold font-playfair text-text-primary group-hover:text-primary premium-transition">
                        {item.title}
                      </h3>
                      <p className="text-xs text-text-muted leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </Card>
                </div>
              );
            })}
          </StaggerChildren>

          <FadeUp className="mt-16 text-center">
            <Link href="/contact">
              <Button>Connect with Commercial Underwriters</Button>
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
