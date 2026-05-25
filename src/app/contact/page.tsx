import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import FadeUp from "@/components/motion/FadeUp";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Red Mortgages LTD. Speak to Hayley or Jenny about mortgages, remortgaging, buy to let, protection and insurance. Based in Liverpool, serving the whole UK.",
};

export default function ContactPage() {
  const contactDetails = [
    {
      icon: Phone,
      label: "Call Us",
      value: "0151 447 0047",
      href: "tel:01514470047",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "admin@red-mortgages.co.uk",
      href: "mailto:admin@red-mortgages.co.uk",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value:
        "RED MORTGAGES LTD, Level One, Basecamp Liverpool, 49 Jamaica Street, Liverpool, L1 0AH",
    },
    {
      icon: Clock,
      label: "Office Hours",
      value: "Monday – Friday: 9am – 5pm",
    },
  ];

  return (
    <div className="w-full">
      <PageHero
        title="Contact Us"
        subtitle="Speak to Hayley or Jenny today. We're here to help with all your mortgage and protection needs."
        backgroundImageUrl="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920"
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <FadeUp>
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-red-light px-3 py-1 rounded inline-block">
                  Get In Touch
                </span>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-playfair text-text-primary">
                  We&apos;d Love to Hear From You
                </h2>
              </FadeUp>

              <FadeUp delay={0.15}>
                <p className="text-sm text-text-secondary leading-relaxed font-medium">
                  Whether you&apos;re a first-time buyer, looking to remortgage,
                  or need protection advice — our friendly team is ready to
                  help. No obligation, whole-of-market access.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="flex flex-col gap-5">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex gap-4 items-start group">
                        <div className="p-2.5 bg-red-light rounded-full text-primary flex-shrink-0">
                          <Icon size={18} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-bold tracking-wider text-text-muted">
                            {item.label}
                          </span>
                          <span className="text-sm font-semibold text-text-primary leading-relaxed group-hover:text-primary transition-colors">
                            {item.value}
                          </span>
                        </div>
                      </div>
                    );

                    return item.href ? (
                      <a key={item.label} href={item.href}>
                        {content}
                      </a>
                    ) : (
                      <div key={item.label}>{content}</div>
                    );
                  })}
                </div>
              </FadeUp>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7 w-full">
              <FadeUp delay={0.25}>
                <ContactForm />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Embed */}
      <section className="w-full h-80 lg:h-96 bg-slate-100 border-t border-black/[0.03]">
        <iframe
          title="Red Mortgages LTD Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.8!2d-2.988!3d53.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDI0JzAwLjAiTiAywrA1OSczMC4wIlc!5e0!3m2!1sen!2suk!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </section>
    </div>
  );
}
