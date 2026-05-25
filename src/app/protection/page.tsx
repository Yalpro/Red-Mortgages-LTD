import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/forms/ContactForm";
import FadeUp from "@/components/motion/FadeUp";
import StaggerChildren, { staggerItemVariants } from "@/components/motion/StaggerChildren";
import { ShieldCheck, UserCheck, Heart, Home, HeartPulse, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

export const metadata = {
  title: "Protection & Insurance Services Liverpool | Hayley & Jenny",
  description: "Protect what matters most. Sourcing policies on Life Insurance, Income Protection, Critical Illness, and Buildings/Contents cover.",
};

export default function ProtectionPage() {
  const insurances = [
    {
      title: "Life Insurance",
      icon: Heart,
      desc: "Life insurance can provide financial support to your family in the event of your death. It can help pay off a mortgage, cover living expenses, or provide a cash lump sum to your loved ones, giving you the reassurance that your family will be looked after if the worst should happen.",
    },
    {
      title: "Income Protection",
      icon: UserCheck,
      desc: "Income protection can provide financial support if you are unable to work due to an accident or illness. It can pay a monthly benefit to help cover your mortgage repayments, bills, and living expenses, giving you the reassurance that you can maintain your lifestyle even if you can't work.",
    },
    {
      title: "Critical Illness Cover",
      icon: ShieldCheck,
      desc: "Critical illness cover can provide financial support if you are diagnosed with a specified serious illness, such as cancer, stroke or heart attack. It can pay a tax-free cash lump sum to help cover your mortgage repayments, bills, and living expenses, giving you the reassurance that you can focus on your recovery without worrying about money.",
    },
    {
      title: "General Insurance",
      icon: Home,
      desc: "General insurance can provide financial support to protect your home and belongings. We offer a range of products, including buildings and contents insurance, landlord insurance, and tenant insurance, to help you safeguard your property and possessions, giving you the peace of mind that you're protected against the unexpected.",
    },
    {
      title: "Private Medical Insurance",
      icon: HeartPulse,
      desc: "Private medical insurance can provide quick access to high-quality healthcare and medical treatment. It can cover the cost of private consultations, diagnostic tests, surgery, and hospital stays, giving you the reassurance that you and your family can get the care you need when you need it.",
    },
    {
      title: "Accident, Sickness and Unemployment (ASU)",
      icon: ShieldAlert,
      desc: "Accident, Sickness and Unemployment (ASU) cover can provide short-term financial support if you are unable to work due to an accident, illness or redundancy. It can pay a monthly benefit to help cover your mortgage repayments, bills, and living expenses, giving you the reassurance that you can cover your commitments for a specified period.",
    },
  ];

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        title="Protection"
        subtitle="Safeguarding your home, family, and lifestyle against life's unexpected challenges."
        backgroundImageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920"
      />

      {/* Intro and lead generation section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column copywriting */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <FadeUp>
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-red-light px-3 py-1 rounded inline-block">
                  Peace of Mind
                </span>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-playfair text-text-primary">
                  Protecting Your Family&apos;s Future
                </h2>
              </FadeUp>
              <FadeUp delay={0.2} className="flex flex-col gap-4 text-sm text-text-secondary leading-relaxed font-medium">
                <p>
                  At Red Mortgages, we believe that protecting your family&apos;s financial future is just as important as finding the right mortgage deal. That&apos;s why we offer a range of protection and insurance services to help you safeguard your home and loved ones.
                </p>
                <p>
                  We&apos;ll review your personal circumstances and recommend the type of insurance you need, giving you and your family the reassurance and peace of mind that protection insurance can bring.
                </p>
                <p>
                  We have access to a wide range of products from leading insurers, and we&apos;ll help you find the right policies to suit your needs and budget. Whether you want to cover your mortgage debt, protect your earnings, or insure your home buildings and contents, Jenny and Hayley are on hand to guide you.
                </p>
              </FadeUp>
            </div>

            {/* Right Column: Dynamic Form */}
            <div className="lg:col-span-6 w-full">
              <FadeUp delay={0.3}>
                <ContactForm />
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* Grid of Protection Services */}
      <section className="py-16 lg:py-24 bg-surface-alt border-t border-black/[0.03]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          <SectionHeader
            title="Our Protection Services"
            subtitle="Understand your coverage choices. We examine policy exceptions, terms, and premiums to match you with leading insurers."
            centered
          />

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {insurances.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="h-full">
                  <Card className="flex flex-col justify-between h-full bg-white p-8 group hover:border-primary premium-transition">
                    <div className="flex flex-col gap-4">
                      <div className="p-3 bg-red-light rounded-full text-primary w-fit group-hover:scale-110 premium-transition">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-lg font-bold font-playfair text-text-primary group-hover:text-primary premium-transition">
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

        </div>
      </section>
    </div>
  );
}
