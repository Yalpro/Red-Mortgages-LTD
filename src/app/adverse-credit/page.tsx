import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/motion/FadeUp";
import StaggerChildren, { staggerItemVariants } from "@/components/motion/StaggerChildren";
import { AlertTriangle, ShieldAlert, HeartHandshake, Eye, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export const metadata = {
  title: "Adverse Credit Mortgages Liverpool | Hayley & Jenny",
  description: "Have you had defaults, CCJs, or missed payments? Hayley and Jenny assist borrowers with poor credit history in securing specialized lending rates.",
};

export default function AdverseCreditPage() {
  const points = [
    {
      title: "CCJs and Defaults",
      icon: ShieldAlert,
      desc: "Specialist lenders can accept historical County Court Judgements (CCJs) and defaults, especially if they are older or satisfied.",
    },
    {
      title: "Missed Payments",
      icon: TrendingUp,
      desc: "Occasional missed mobile phone bills, utility payments, or credit card slips can be contextualised manually by specialized underwriters.",
    },
    {
      title: "Active DMPs / IVAs",
      icon: HeartHandshake,
      desc: "Borrowers currently in Debt Management Plans (DMPs) or historical Individual Voluntary Arrangements (IVAs) can still obtain mortgage approvals.",
    },
    {
      title: "Credit File Checks",
      icon: Eye,
      desc: "We strongly recommend downloading your multi-agency credit report (CheckMyFile, Experian, or Equifax) to let us analyze any anomalies.",
    },
  ];

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        title="Adverse Credit Mortgages"
        subtitle="Helping individuals with poor credit, CCJs, defaults, or low credit ratings locate specialized lenders."
        backgroundImageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920"
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
              Lending Beyond Credit Scores
            </h2>
            <p>
              At Red Mortgages, we believe that everyone deserves access to the right mortgage options, no matter their financial history or credit score. That&apos;s why we offer a range of services to help individuals with adverse credit find the right mortgage for their needs.
            </p>
            <p>
              Jenny and Hayley understand that having a bad credit history, CCJs, defaults, or a low credit score can make applying for a mortgage seem impossible. But we have access to specialist lenders who look beyond automated credit scoring systems to review your individual circumstances.
            </p>
            <p>
              We&apos;ll work with you to understand your financial history, explain credit options, and help locate competitive deals on interest rates. We&apos;ll assist you in preparing a strong application to secure the financing you need.
            </p>
          </div>
        </div>
      </section>

      {/* Adverse credit factors grid */}
      <section className="py-16 lg:py-24 bg-surface-alt border-t border-black/[0.03]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          <SectionHeader
            title="Specialist Credit Underwriting"
            subtitle="Let Hayley and Jenny analyze your credit history and match you with lenders who review files on individual merits."
            centered
          />

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {points.map((item) => {
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
              <Button>Let&apos;s Review Your Credit Options</Button>
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
