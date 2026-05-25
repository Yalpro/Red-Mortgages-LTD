"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import Button from "@/components/ui/Button";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Strict Zod schema for full UK contact validation
const contactSchema = zod.object({
  name: zod.string().min(2, { message: "Name must be at least 2 characters" }),
  email: zod.string().email({ message: "Invalid email address" }),
  phone: zod.string().regex(/^(?:(?:\+44\s?|0)7\d{3}\s?\d{6}|(?:\+44\s?|0)[12389]\d{2}\s?\d{3}\s?\d{4})$/, {
    message: "Please enter a valid UK phone number",
  }),
  message: zod.string().min(10, { message: "Message must be at least 10 characters long" }),
});

type ContactFormData = zod.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate premium REST server latency
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSuccess(true);
    reset();
  };

  return (
    <div className="w-full bg-white p-6 md:p-8 rounded-card border border-black/[0.04] shadow-premium">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center text-center py-10"
          >
            <div className="p-3.5 bg-green-50 text-green-600 rounded-full mb-5 shadow-sm">
              <CheckCircle2 size={44} className="animate-bounce" />
            </div>
            <h3 className="text-xl font-bold font-playfair text-text-primary mb-2">
              Message Sent Successfully
            </h3>
            <p className="text-sm text-text-muted max-w-xs leading-relaxed mb-6">
              Thank you! We will be in touch soon.
            </p>
            <Button variant="outline" onClick={() => setIsSuccess(false)}>
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
            noValidate
          >
            {/* Input Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                placeholder="Jenny Hayley"
                className={`w-full px-4 py-3 border rounded-[6px] text-sm focus:outline-none focus:ring-1 premium-transition ${
                  errors.name
                    ? "border-primary focus:border-primary focus:ring-primary bg-red-light/10"
                    : "border-black/10 focus:border-primary focus:ring-primary"
                }`}
              />
              {errors.name && (
                <span className="text-xs text-primary font-semibold flex items-center gap-1.5 mt-0.5">
                  <AlertCircle size={13} className="flex-shrink-0" />
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Input Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                placeholder="admin@red-mortgages.co.uk"
                className={`w-full px-4 py-3 border rounded-[6px] text-sm focus:outline-none focus:ring-1 premium-transition ${
                  errors.email
                    ? "border-primary focus:border-primary focus:ring-primary bg-red-light/10"
                    : "border-black/10 focus:border-primary focus:ring-primary"
                }`}
              />
              {errors.email && (
                <span className="text-xs text-primary font-semibold flex items-center gap-1.5 mt-0.5">
                  <AlertCircle size={13} className="flex-shrink-0" />
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Input Phone */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone")}
                placeholder="e.g. 0151 447 0047"
                className={`w-full px-4 py-3 border rounded-[6px] text-sm focus:outline-none focus:ring-1 premium-transition ${
                  errors.phone
                    ? "border-primary focus:border-primary focus:ring-primary bg-red-light/10"
                    : "border-black/10 focus:border-primary focus:ring-primary"
                }`}
              />
              {errors.phone && (
                <span className="text-xs text-primary font-semibold flex items-center gap-1.5 mt-0.5">
                  <AlertCircle size={13} className="flex-shrink-0" />
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* Input Message */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-text-secondary">
                Message Detail
              </label>
              <textarea
                id="message"
                rows={4}
                {...register("message")}
                placeholder="Please let us know how Hayley & Jenny can help..."
                className={`w-full px-4 py-3 border rounded-[6px] text-sm focus:outline-none focus:ring-1 premium-transition resize-y ${
                  errors.message
                    ? "border-primary focus:border-primary focus:ring-primary bg-red-light/10"
                    : "border-black/10 focus:border-primary focus:ring-primary"
                }`}
              />
              {errors.message && (
                <span className="text-xs text-primary font-semibold flex items-center gap-1.5 mt-0.5">
                  <AlertCircle size={13} className="flex-shrink-0" />
                  {errors.message.message}
                </span>
              )}
            </div>

            <Button type="submit" disabled={isSubmitting} className="mt-2 w-full">
              {isSubmitting ? "Sending..." : "Submit Enquiry"}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
