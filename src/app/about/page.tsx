import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/motion/FadeUp";
import StaggerChildren from "@/components/motion/StaggerChildren";
import { CheckCircle2, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "About Us | Hayley & Jenny",
  description: "Learn more about Red Mortgages LTD, Hayley and Jenny's background in the financial services industry, and why Liverpool trusts us for mortgage and protection options.",
};

export default function AboutPage() {
  const points = [
    "Raising The standards of financial advice",
    "Making financial advice accessible to all",
    "Trusted & stress-free financial advice",
    "Friendly, personable advisors",
  ];

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        title="About Us"
        subtitle="Dedicated to helping you find the right mortgages, protection, and insurance products to suit your unique needs and budget."
        backgroundImageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920"
      />

      {/* Main Core Content Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Critical FCA Risk Disclaimer Banner */}
          <FadeUp className="mb-12">
            <div className="flex gap-4 p-5 bg-amber-50 border-l-4 border-amber-600 rounded shadow-sm text-xs md:text-sm text-amber-800 leading-relaxed font-semibold">
              <AlertTriangle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Think carefully before securing debts against your home.</strong> Your home or property may be repossessed if you do not keep up repayments on your mortgage.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Team photo with visual elements */}
            <div className="lg:col-span-5 relative w-full flex justify-center items-center">
              <FadeUp className="relative w-full max-w-md aspect-[3/4] rounded-card overflow-hidden shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=800"
                  alt="Hayley and Jenny - Professional Financial Advisors"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                  priority
                />
                {/* Visual red overlay matching Red Mortgages theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
              </FadeUp>
            </div>

            {/* Right Column: Exact Red Mortgages about content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <FadeUp>
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-red-light px-3 py-1 rounded inline-block">
                  Our Mission
                </span>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-playfair text-text-primary">
                  Results Expertly Delivered
                </h2>
              </FadeUp>
              <FadeUp delay={0.2} className="flex flex-col gap-4 text-sm text-text-secondary leading-relaxed font-medium">
                <p>
                  At Red Mortgages, we believe that everyone deserves access to affordable and reliable financial services. That&apos;s why we&apos;ve dedicated ourselves to helping people like you find the right mortgages, protection, and insurance products to suit your unique needs and budget.
                </p>
                <p>
                  Hayley and Jenny have years of experience in the financial services industry and we pride ourselves on our knowledge of the market and our commitment to customer service. We understand that buying a home or protecting your family&apos;s financial future can be overwhelming, which is why we&apos;re here to guide you every step of the way.
                </p>
                <p>
                  We have access to a wide range of products from leading lenders, so you can be sure that you&apos;re getting the right deal on interest rates and fees. And we&apos;ll be with you from the initial consultation to the completion of your mortgage or protection policy.
                </p>
                <p>
                  At Red Mortgages, we&apos;re committed to helping you achieve your dreams for your family&apos;s financial future. Contact us today to schedule a consultation and let us help you find the right financial solutions for you.
                </p>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* Why Red Mortgages Section */}
      <section className="py-16 lg:py-24 bg-surface-alt border-t border-black/[0.03]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeader
            title="Why Choose Red Mortgages?"
            subtitle="Providing Liverpool and the wider UK with honest, professional, and personalized whole-of-market financial guidance."
            centered
          />

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
            {points.map((point) => (
              <div key={point} className="h-full">
                <Card className="flex flex-col justify-between h-full bg-white group hover:border-primary premium-transition">
                  <div className="flex flex-col gap-4">
                    <div className="p-3 bg-red-light rounded-full text-primary w-fit group-hover:scale-110 premium-transition">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-base font-bold font-playfair text-text-primary leading-snug group-hover:text-primary premium-transition">
                      {point}
                    </h3>
                  </div>
                </Card>
              </div>
            ))}
          </StaggerChildren>

          {/* Quick CTA banner */}
          <FadeUp className="mt-16 text-center">
            <Link href="/contact">
              <Button>Speak to Hayley or Jenny Today</Button>
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
