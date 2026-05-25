import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/motion/FadeUp";
import StaggerChildren, { staggerItemVariants } from "@/components/motion/StaggerChildren";
import { AlertTriangle, FileText, Landmark, Clock, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

export const metadata = {
  title: "Self Employed Mortgages | Hayley & Jenny Liverpool",
  description: "Are you self-employed, a contractor, or a business director? Hayley and Jenny assist sole traders and directors in securing competitive rates.",
};

export default function SelfEmployedPage() {
  const checklists = [
    {
      title: "Tax Calculations",
      icon: FileText,
      desc: "Lenders typically require your SA302 tax calculations or HMRC tax year overviews for the last 2 years.",
    },
    {
      title: "Certified Accounts",
      icon: Landmark,
      desc: "For limited company directors, at least 2 years of fully signed, certified accounts prepared by a qualified accountant.",
    },
    {
      title: "Bank Statements",
      icon: Clock,
      desc: "3 months of active personal and business bank statements, proving income stability and business cash flow.",
    },
    {
      title: "Contractor Details",
      icon: UserCheck,
      desc: "For contract workers, copies of current active contracts demonstrating day rates and ongoing employment prospects.",
    },
  ];

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        title="Self Employed Mortgages"
        subtitle="Specialised guidance for contractors, sole traders, and directors, matching accounts with lending deals."
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text details */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <FadeUp>
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-red-light px-3 py-1 rounded inline-block">
                  Employment Status
                </span>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-playfair text-text-primary">
                  Mortgages for Self-Employed Individuals
                </h2>
              </FadeUp>
              <FadeUp delay={0.2} className="flex flex-col gap-4 text-sm text-text-secondary leading-relaxed font-medium">
                <p>
                  At Red Mortgages, we believe that everyone deserves access to the right mortgage options, no matter their employment status. That&apos;s why we offer a range of services to help self-employed individuals find the right mortgage for their needs.
                </p>
                <p>
                  Jenny and Hayley have experience working with self-employed clients and we understand the unique challenges they face when applying for a mortgage. We&apos;ll work with you to help gather all the necessary documents, such as tax assessments and accounts, to ensure that your application is as strong as possible.
                </p>
                <p>
                  We have access to a wide range of products from leading lenders, and we&apos;ll work with you to find the most suitable deals on interest rates and fees. And we&apos;ll be with you from the initial consultation to the completion of your mortgage.
                </p>
              </FadeUp>
            </div>

            {/* Visual Panel */}
            <div className="lg:col-span-5 relative w-full flex justify-center items-center">
              <FadeUp delay={0.3} className="relative w-full max-w-sm aspect-[4/3] rounded-card overflow-hidden shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800"
                  alt="Co-working and business accounts reviews"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent pointer-events-none" />
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* Required Accounts Checklists */}
      <section className="py-16 lg:py-24 bg-surface-alt border-t border-black/[0.03]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          <SectionHeader
            title="Required Documentation"
            subtitle="To secure a mortgage, self-employed borrowers generally need to substantiate their earnings. Here is what we'll gather."
            centered
          />

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {checklists.map((item) => {
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
              <Button>Let&apos;s Review Your Accounts</Button>
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
