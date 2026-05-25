"use client";

import Link from "next/link";
import Image from "next/image";
import HeroThreePanel from "@/components/sections/HeroThreePanel";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/forms/ContactForm";
import FadeUp from "@/components/motion/FadeUp";
import StaggerChildren, { staggerItemVariants } from "@/components/motion/StaggerChildren";
import { Building2, Home, ShieldCheck, RefreshCw, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  // 4 Services Cards
  const services = [
    {
      title: "Buy To Let",
      icon: Building2,
      desc: "Invest in property or expand your portfolio. We navigate buy-to-let regulations and help source suitable interest rates.",
      href: "/buy-to-let",
    },
    {
      title: "First Time Buyers",
      icon: Home,
      desc: "Step onto the property ladder with ease. We guide you step-by-step through home ownership pathways.",
      href: "/first-time-buyer",
    },
    {
      title: "Protection",
      icon: ShieldCheck,
      desc: "Safeguard your family's future with tailored life insurance, income protection, and critical illness policies.",
      href: "/protection",
    },
    {
      title: "Remortgages",
      icon: RefreshCw,
      desc: "Switch rates or release equity. We browse whole-of-market options to locate excellent deals.",
      href: "/remortgaging",
    },
  ];

  // 6 Client Testimonials
  const reviews = [
    {
      name: "David",
      text: "Red Mortgages were absolutely brilliant. if issues arose they were on hand to ensure the issue was communicated effectively and in a way that you can easily understand whilst providing solutions. The whole process from start to finish was really easy which took the pain out of remortgaging.",
      role: "Remortgage Client",
    },
    {
      name: "Ashley",
      text: "Jen and Red Mortgages have been so incredibly helpful with me buying my first home - what felt like it might be a really confusing and complicated process was so straight forward with their help and I felt like I was in safe hands navigating the process. I couldn't recommend them highly enough!",
      role: "First Time Buyer",
    },
    {
      name: "Sameer",
      text: "Hayley was absolutely amazing. She explained everything fully & was always there to answer any questions we had during the process of buying our first home. We couldn't have done it without her. Thank you Hayley!",
      role: "First Time Buyer",
    },
    {
      name: "Gillian",
      text: "Brilliant service throughout, from getting us a suitable mortgage to sorting all our insurances. Thanks to Hayley and Jen.",
      role: "Mortgage & Protection Client",
    },
    {
      name: "John",
      text: "From start to finish Jenny was amazing in understanding my needs, and worked quickly to secure the rate for me. I couldn't have asked for a better level of service, and it all completed in record time. Thank you",
      role: "Mortgage Client",
    },
    {
      name: "Elaine & Richie",
      text: "Absolutely Fabulous, all sorted with ease and stress free, Professional and Very Polite, Customer focused and listen to what customer needs. Definitely use again, infact my Son and Daughter got their mortgages recently with Red and they will be using again in 2 years time.",
      role: "Returning Family Clients",
    },
  ];

  return (
    <div className="w-full">
      {/* SECTION 1: 3-Panel Premium Hero */}
      <HeroThreePanel />

      {/* SECTION 2: Welcome to Red Mortgages */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side text blocks */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <FadeUp>
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-red-light px-3 py-1 rounded inline-block">
                  About Us
                </span>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-playfair text-text-primary">
                  Welcome to Red Mortgages
                </h2>
              </FadeUp>
              <FadeUp delay={0.2} className="flex flex-col gap-4 text-sm text-text-secondary leading-relaxed font-medium">
                <p>
                  Welcome to Red Mortgages, for all of your Mortgage needs. We specialise in helping with a range of mortgage needs, from helping first-time buyers navigate the complicated world of home ownership, as well as assisting homeowners with remortgages and Buy to Let.
                </p>
                <p>
                  Hayley and Jenny will work with you to find the most suitable mortgage options to suit your unique needs and budget. We have access to a wide range of products from leading lenders, and will help you find the most suitable deals on interest rates and fees.
                </p>
                <p>
                  In addition to mortgages, we also offer a range of protection and insurance services to help you safeguard your home and family. From life insurance to critical illness cover, we&apos;ll help you find the right policies to suit your needs and budget.
                </p>
                <p>
                  At Red Mortgages, we pride ourselves on our commitment to customer service. We&apos;ll be with you every step of the way, from the initial consultation to the completion of your mortgage or protection policy.
                </p>
              </FadeUp>
            </div>

            {/* Right side visual badge cards */}
            <div className="lg:col-span-5 relative w-full flex justify-center items-center">
              <FadeUp delay={0.3} className="relative w-full max-w-sm aspect-[4/3] rounded-card overflow-hidden shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
                  alt="Modern Home Interior Design"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none" />
                
                {/* Visual float badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur p-4 rounded shadow-premium flex flex-col gap-0.5 border border-primary/10">
                  <span className="text-xl font-extrabold text-primary font-playfair leading-none">
                    100%
                  </span>
                  <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider">
                    Whole of Market
                  </span>
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Our Services Section */}
      <section className="py-20 lg:py-28 bg-surface-alt">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          <SectionHeader
            title="Our Services"
            subtitle="We specialize in bringing whole-of-market options directly to you, making homeownership and coverage accessible and smooth."
            centered
          />

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} variants={staggerItemVariants}>
                  <Link href={service.href} className="block h-full">
                    <Card className="flex flex-col justify-between h-full bg-white group hover:border-primary premium-transition">
                      <div className="flex flex-col gap-4">
                        <div className="p-3 bg-red-light rounded-full text-primary w-fit group-hover:scale-110 premium-transition">
                          <Icon size={24} />
                        </div>
                        <h3 className="text-lg font-bold font-playfair text-text-primary group-hover:text-primary premium-transition">
                          {service.title}
                        </h3>
                        <p className="text-xs text-text-muted leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                      <div className="mt-6 text-xs font-bold uppercase tracking-wider text-primary group-hover:underline">
                        Learn More →
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </StaggerChildren>

        </div>
      </section>

      {/* SECTION 4: Client Testimonials */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          
          <SectionHeader
            title="What Our Clients Say"
            subtitle="We take pride in delivering stress-free remortgaging and homebuyer solutions. Read what our valued clients have to say about working with Jenny and Hayley."
            centered
          />

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {reviews.map((review) => (
              <motion.div key={review.name} variants={staggerItemVariants}>
                <Card className="flex flex-col justify-between h-full border-t border-slate-100 shadow-premium relative">
                  <div className="absolute top-4 right-4 text-primary/10 pointer-events-none">
                    <Quote size={40} fill="currentColor" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-1 text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed font-medium italic">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>
                  <div className="border-t border-black/[0.04] pt-4 mt-6 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-text-primary font-playfair">
                        {review.name}
                      </span>
                      <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider">
                        {review.role}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </StaggerChildren>

        </div>
      </section>

      {/* SECTION 5: Contact Lead Section */}
      <section className="py-20 lg:py-28 bg-surface-alt border-t border-black/[0.03]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form details side */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <FadeUp>
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-red-light px-3 py-1 rounded inline-block">
                  Get In Touch
                </span>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-playfair text-text-primary">
                  Contact Us Today
                </h2>
              </FadeUp>
              <FadeUp delay={0.2} className="flex flex-col gap-4 text-sm text-text-secondary leading-relaxed font-medium">
                <p>
                  Ready to secure an excellent interest rate or safeguard your family&apos;s financial future?
                </p>
                <p>
                  Contact us today to schedule a consultation and let us help you achieve your dreams for your family&apos;s financial future.
                </p>
                <p className="font-bold text-primary mt-2">
                  No obligation. Whole of market access. friendly advisers.
                </p>
              </FadeUp>
            </div>

            {/* Direct Form Side */}
            <div className="lg:col-span-7 w-full">
              <FadeUp delay={0.3}>
                <ContactForm />
              </FadeUp>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
