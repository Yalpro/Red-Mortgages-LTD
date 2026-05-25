import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/motion/FadeUp";
import StaggerChildren, { staggerItemVariants } from "@/components/motion/StaggerChildren";
import { AlertTriangle, TrendingUp, DollarSign, Library, FileCheck } from "lucide-react";
import { motion } from "framer-motion";

export const metadata = {
  title: "Buy to Let Mortgages Liverpool | Hayley & Jenny",
  description: "Invest in property or expand your portfolio. Hayley and Jenny help landlords secure whole-of-market buy-to-let rates.",
};

export default function BuyToLetPage() {
  const criteria = [
    {
      title: "Rental Yield Cover",
      icon: TrendingUp,
      desc: "Lenders check rental income coverage, typically expecting monthly rental yields to exceed 125% to 145% of the interest payment.",
    },
    {
      title: "Larger Deposit Rules",
      icon: DollarSign,
      desc: "Buy-to-let transactions require a larger downpayment, typically a minimum of 20% to 25% of the property purchase value.",
    },
    {
      title: "Portfolio Landlords",
      icon: Library,
      desc: "If you own 4 or more mortgaged buy-to-let properties, specialised portfolio underwriting criteria apply. We navigate this smoothly.",
    },
    {
      title: "Limited Company BTLs",
      icon: FileCheck,
      desc: "Buying through a Special Purpose Vehicle (SPV) limited company can offer tax efficiencies. We match you with lenders accepting SPVs.",
    },
  ];

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        title="Buy to Let Mortgages"
        subtitle="Sourcing competitive products for landlords to expand portfolios or buy their first rental investment."
        backgroundImageUrl="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920"
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
                The Financial Conduct Authority does not regulate some forms of Buy to Let mortgages.
              </p>
            </div>
          </FadeUp>

          <div className="max-w-3xl flex flex-col gap-6 text-sm text-text-secondary leading-relaxed font-medium">
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-text-primary">
              Expand Your Rental Portfolio
            </h2>
            <p>
              At Red Mortgages, we believe that everyone deserves access to the right mortgage options, no matter their circumstances. That&apos;s why we offer a range of Buy to Let services to help landlords find the right mortgage for their needs.
            </p>
            <p>
              Jenny and Hayley have experience in the Buy to Let market and we understand the unique challenges landlords face. We&apos;ll work with you to understand your financial situation and find the most suitable mortgage deal to suit your portfolio and plans. We&apos;ll assist in finding competitive deals on interest rates and terms, ensuring your investment works for you.
            </p>
            <p>
              We have access to a wide range of products from leading lenders, and we&apos;ll work with you to find the most suitable deals on interest rates and fees. And we&apos;ll be with you from the initial consultation to the completion of your mortgage.
            </p>
          </div>
        </div>
      </section>

      {/* Criteria Grid Section */}
      <section className="py-16 lg:py-24 bg-surface-alt border-t border-black/[0.03]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          <SectionHeader
            title="Lending Criteria to Keep in Mind"
            subtitle="Let Hayley and Jenny calculate your coverage and select products based on your individual investment objectives."
            centered
          />

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {criteria.map((item) => {
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
                      <p className="text-xs text-text-muted leading-relaxed">
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
              <Button>Connect with a BTL Specialist</Button>
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
