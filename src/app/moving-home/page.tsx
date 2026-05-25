import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/motion/FadeUp";
import StaggerChildren, { staggerItemVariants } from "@/components/motion/StaggerChildren";
import { AlertTriangle, Key, Repeat, Landmark, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export const metadata = {
  title: "Moving Home Mortgages Liverpool | Hayley & Jenny",
  description: "Are you selling your property and buying your next home? Let Hayley and Jenny help navigate porting and secure competitive moving deals.",
};

export default function MovingHomePage() {
  const concepts = [
    {
      title: "Porting Your Mortgage",
      icon: Repeat,
      desc: "Porting allows you to transfer your existing mortgage deal to your new property, preserving your current interest rate and avoiding early exit fees.",
    },
    {
      title: "Moving Your Equity",
      icon: Landmark,
      desc: "Use the equity built up in your current property as a deposit for your next purchase, reducing your LTV ratio and opening cheaper rates.",
    },
    {
      title: "Coordinating the Chain",
      icon: Key,
      desc: "Managing simultaneous sales and purchases is tricky. Hayley and Jenny synchronise exchange of contracts and completion dates.",
    },
    {
      title: "Lender Fee Checks",
      icon: HelpCircle,
      desc: "We calculate all potential costs including arrangement fees, valuation charges, legal fees, and Stamp Duty to protect your budget.",
    },
  ];

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        title="Moving Home"
        subtitle="Taking the stress out of selling your current property and financing your next purchase."
        backgroundImageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
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
              Moving to Your Next Property
            </h2>
            <p>
              At Red Mortgages, we believe that everyone deserves access to the right mortgage options, no matter their circumstances. That&apos;s why we offer a range of services to help home movers find the right mortgage for their needs.
            </p>
            <p>
              Jenny and Hayley have years of experience in the financial services industry and we pride ourselves on our knowledge of the market and our commitment to customer service. We understand that moving home can be a complicated process, which is why we&apos;re here to guide you every step of the way.
            </p>
            <p>
              We have access to a wide range of products from leading lenders, and we&apos;ll work with you to find the most suitable deals on interest rates and fees. And we&apos;ll be with you from the initial consultation to the completion of your mortgage.
            </p>
          </div>
        </div>
      </section>

      {/* Key Concepts Section */}
      <section className="py-16 lg:py-24 bg-surface-alt border-t border-black/[0.03]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          <SectionHeader
            title="Things to Consider When Moving"
            subtitle="Let Hayley and Jenny calculate your maximum borrowing capacity and help map out your transaction timeline."
            centered
          />

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {concepts.map((item) => {
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
              <Button>Book Moving Consultation</Button>
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
