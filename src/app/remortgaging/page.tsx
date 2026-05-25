import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/motion/FadeUp";
import StaggerChildren, { staggerItemVariants } from "@/components/motion/StaggerChildren";
import { AlertTriangle, TrendingDown, Landmark, Coins, Lock } from "lucide-react";
import { motion } from "framer-motion";

export const metadata = {
  title: "Remortgaging Advice Liverpool | Hayley & Jenny Red Mortgages",
  description: "Switch your current mortgage rate, secure competitive interest deals, or release home equity. We scan the whole-of-market options.",
};

export default function RemortgagingPage() {
  const reasons = [
    {
      title: "Reduce Monthly Payments",
      icon: TrendingDown,
      desc: "If interest rates have fallen or your property value has increased (lowering your LTV), you could switch to a cheaper deal and save money.",
      warning: null,
    },
    {
      title: "Release Property Equity",
      icon: Landmark,
      desc: "Release funds from the value of your home to pay for home improvements, weddings, school fees, or to help children with their deposit.",
      warning: null,
    },
    {
      title: "Consolidate Exist Debts",
      icon: Coins,
      desc: "Consolidate credit cards, personal loans, or overdrafts into a single monthly mortgage payment to reduce short-term costs.",
      warning: "Debt consolidation can increase the interest rate and extend the term of your debt, meaning you may pay more in the long run.",
    },
    {
      title: "Lock In a Fixed Rate",
      icon: Lock,
      desc: "Gain monthly budgeting stability by switching from a variable or tracker rate to a secure fixed-term option, avoiding interest rate hikes.",
      warning: null,
    },
  ];

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        title="Remortgaging"
        subtitle="Secure competitive interest rates, lock in fixed-rate stability, or release equity from your home."
        backgroundImageUrl="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920"
      />

      {/* Main Core Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Repossession Warning */}
          <FadeUp className="mb-12">
            <div className="flex gap-4 p-5 bg-amber-50 border-l-4 border-amber-600 rounded shadow-sm text-xs md:text-sm text-amber-800 leading-relaxed font-semibold">
              <AlertTriangle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Think carefully before securing debts against your home.</strong> Your home or property may be repossessed if you do not keep up repayments on your mortgage.
              </p>
            </div>
          </FadeUp>

          <div className="max-w-3xl flex flex-col gap-6 text-sm text-text-secondary leading-relaxed font-medium">
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-text-primary">
              Is it Time to Remortgage?
            </h2>
            <p>
              At Red Mortgages, we believe that everyone deserves access to the right mortgage options, no matter their circumstances. That&apos;s why we offer a range of remortgage services to help you find the right mortgage for your needs.
            </p>
            <p>
              Jenny and Hayley have years of experience in the financial services industry and we pride ourselves on our knowledge of the market and our commitment to customer service. We understand that remortgaging can be a daunting process, which is why we&apos;re here to guide you every step of the way.
            </p>
            <p>
              We have access to a wide range of products from leading lenders, so you can be sure that you&apos;re getting a suitable deal on interest rates and fees. And we&apos;ll be with you from the initial consultation to the completion of your remortgage.
            </p>
          </div>
        </div>
      </section>

      {/* Reasons to Remortgage Section */}
      <section className="py-16 lg:py-24 bg-surface-alt border-t border-black/[0.03]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          <SectionHeader
            title="Common Reasons to Remortgage"
            subtitle="Understand your motivations. We evaluate fee structures and early repayment charges to ensure switching saves you money."
            centered
          />

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {reasons.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="h-full">
                  <Card className="flex flex-col justify-between h-full bg-white p-8 group hover:border-primary premium-transition">
                    <div className="flex flex-col gap-4">
                      <div className="p-3 bg-red-light rounded-full text-primary w-fit group-hover:scale-110 premium-transition">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-lg font-bold font-playfair text-text-primary group-hover:text-primary premium-transition">
                        {item.title}
                      </h3>
                      <p className="text-xs text-text-muted leading-relaxed font-medium">
                        {item.desc}
                      </p>
                      {item.warning && (
                        <div className="mt-3 p-3 bg-red-50 border-l-2 border-primary rounded text-[11px] text-primary leading-normal font-semibold">
                          {item.warning}
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              );
            })}
          </StaggerChildren>

          <FadeUp className="mt-16 text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/mortgage-calculator">
              <Button variant="outline">Try the Mortgage Calculator</Button>
            </Link>
            <Link href="/contact">
              <Button>Enquire About Remortgaging</Button>
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
