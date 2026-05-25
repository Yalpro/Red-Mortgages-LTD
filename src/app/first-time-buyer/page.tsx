import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/motion/FadeUp";
import StaggerChildren, { staggerItemVariants } from "@/components/motion/StaggerChildren";
import { AlertTriangle, ShieldCheck, FileSpreadsheet, Key, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export const metadata = {
  title: "First Time Buyer Mortgages | Liverpool Whole of Market Advice",
  description: "Step onto the property ladder with ease. Hayley and Jenny help first-time buyers understand deposits, borrow limits, and secure excellent rates.",
};

export default function FirstTimeBuyerPage() {
  const steps = [
    {
      step: "01",
      title: "Establish Your Budget",
      desc: "We will review your income, debts, and household spending to calculate exactly what UK lenders are willing to let you borrow.",
    },
    {
      step: "02",
      title: "Secure an AIP",
      desc: "An Agreement in Principle (AIP) shows estate agents that you are a qualified buyer with approved mortgage backing.",
    },
    {
      step: "03",
      title: "Find Your Dream Home",
      desc: "With your budget confirmed, browse the market with total confidence knowing exactly what your monthly repayments will be.",
    },
    {
      step: "04",
      title: "Full Application to Offer",
      desc: "Hayley and Jenny handle all the complex paperwork, submit documents, and manage your solicitors through to key handoff.",
    },
  ];

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        title="First Time Buyer"
        subtitle="Taking the stress out of buying your first home by guiding you through deposits, borrowing, and legal steps."
        backgroundImageUrl="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920"
      />

      {/* Main Core Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Repossession warning box */}
          <FadeUp className="mb-12">
            <div className="flex gap-4 p-5 bg-amber-50 border-l-4 border-amber-600 rounded shadow-sm text-xs md:text-sm text-amber-800 leading-relaxed font-semibold">
              <AlertTriangle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Think carefully before securing debts against your home.</strong> Your home or property may be repossessed if you do not keep up repayments on your mortgage.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text details */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <FadeUp>
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-red-light px-3 py-1 rounded inline-block">
                  Stepping Stones
                </span>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-playfair text-text-primary">
                  Buying Your First Home
                </h2>
              </FadeUp>
              <FadeUp delay={0.2} className="flex flex-col gap-4 text-sm text-text-secondary leading-relaxed font-medium">
                <p>
                  Buying your first home is one of the most exciting things you can do, but it can also be one of the most daunting. At Red Mortgages, we&apos;re here to take the stress out of buying your first home.
                </p>
                <p>
                  Jenny and Hayley will work with you to understand your financial situation and find the right mortgage deal to suit your needs. We&apos;ll guide you through the process, from application to completion, making sure you understand all the terms and conditions along the way.
                </p>
                <p>
                  We have access to a wide range of products from leading lenders, so you can be sure that you&apos;re getting a suitable deal on interest rates and fees. And we&apos;ll be with you from the initial consultation to the completion of your mortgage.
                </p>
              </FadeUp>
            </div>

            {/* Quick stats panel */}
            <div className="lg:col-span-5">
              <FadeUp delay={0.3}>
                <div className="bg-surface-alt p-6 md:p-8 rounded-card border border-black/[0.04] shadow-premium flex flex-col gap-6">
                  <h3 className="text-lg font-bold font-playfair text-text-primary border-b border-black/[0.04] pb-3">
                    First-Time Buyer Checklist
                  </h3>
                  <ul className="flex flex-col gap-4 text-xs font-semibold text-text-secondary">
                    <li className="flex gap-3 items-center">
                      <ShieldCheck className="text-primary flex-shrink-0" size={16} />
                      <span>At least 5% deposit of the purchase price</span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <FileSpreadsheet className="text-primary flex-shrink-0" size={16} />
                      <span>3 months of payslips & bank statements</span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <Key className="text-primary flex-shrink-0" size={16} />
                      <span>Valid photo ID (passport/driving license)</span>
                    </li>
                    <li className="flex gap-3 items-center">
                      <HelpCircle className="text-primary flex-shrink-0" size={16} />
                      <span>Proof of address & current address history</span>
                    </li>
                  </ul>
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* Process Pathway Section */}
      <section className="py-16 lg:py-24 bg-surface-alt border-t border-black/[0.03]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          <SectionHeader
            title="The Step-by-Step Journey"
            subtitle="How Hayley and Jenny simplify your first home purchase from start to key handoff."
            centered
          />

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {steps.map((item) => (
              <div key={item.step} className="h-full">
                <Card className="flex flex-col justify-between h-full bg-white group hover:border-primary premium-transition">
                  <div className="flex flex-col gap-4">
                    <span className="text-3xl font-extrabold text-primary/20 group-hover:text-primary font-playfair leading-none premium-transition">
                      {item.step}
                    </span>
                    <h3 className="text-base font-bold font-playfair text-text-primary group-hover:text-primary premium-transition">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </StaggerChildren>

          <FadeUp className="mt-16 text-center">
            <Link href="/contact">
              <Button>Let&apos;s Get Started Today</Button>
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
