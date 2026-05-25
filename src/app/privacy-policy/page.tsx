import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FadeUp from "@/components/motion/FadeUp";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Red Mortgages LTD privacy policy. Learn how we collect, use, and protect your personal data under GDPR and UK data protection regulations.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          <FadeUp>
            <div className="prose prose-sm max-w-none text-text-secondary leading-relaxed space-y-8">
              <div>
                <h2 className="text-xl font-bold font-playfair text-text-primary mb-3">
                  1. Introduction
                </h2>
                <p>
                  Red Mortgages LTD (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to
                  protecting and respecting your privacy. This policy explains how
                  we collect, use, and safeguard your personal data in accordance
                  with the UK General Data Protection Regulation (UK GDPR) and the
                  Data Protection Act 2018.
                </p>
                <p>
                  Red Mortgages LTD is registered in England No. 12642186.
                  Registered office: 1 Limetree Road, Liverpool L32 1BL.
                  Authorised and regulated by the Financial Conduct Authority
                  (FCA), register number 930475.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold font-playfair text-text-primary mb-3">
                  2. Information We Collect
                </h2>
                <p>We may collect the following personal information:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Full name, date of birth, and contact details</li>
                  <li>Employment status and income details</li>
                  <li>Financial information including credit history</li>
                  <li>Property details and mortgage requirements</li>
                  <li>
                    Identification documents for anti-money laundering checks
                  </li>
                  <li>
                    Website usage data including cookies and browsing behaviour
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold font-playfair text-text-primary mb-3">
                  3. How We Use Your Information
                </h2>
                <p>Your personal data is used to:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>
                    Provide mortgage and protection advice tailored to your
                    circumstances
                  </li>
                  <li>Submit mortgage and insurance applications on your behalf</li>
                  <li>Comply with FCA regulatory requirements</li>
                  <li>
                    Conduct anti-money laundering and fraud prevention checks
                  </li>
                  <li>Communicate with you regarding our services</li>
                  <li>Improve our website and customer experience</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold font-playfair text-text-primary mb-3">
                  4. Legal Basis for Processing
                </h2>
                <p>
                  We process your data under the following legal bases: contract
                  performance (to provide our services), legal obligation (FCA
                  compliance, anti-money laundering), legitimate interests
                  (improving our services), and consent (marketing
                  communications).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold font-playfair text-text-primary mb-3">
                  5. Data Sharing
                </h2>
                <p>
                  We may share your data with mortgage lenders, insurance
                  providers, credit reference agencies, the Financial Conduct
                  Authority, and professional advisers. We will never sell your
                  personal data to third parties for marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold font-playfair text-text-primary mb-3">
                  6. Data Retention
                </h2>
                <p>
                  We retain your personal data for as long as necessary to fulfil
                  the purposes for which it was collected, and to comply with
                  legal, regulatory, and internal policy requirements. Typically,
                  client records are retained for a minimum of 6 years after the
                  end of the business relationship.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold font-playfair text-text-primary mb-3">
                  7. Your Rights
                </h2>
                <p>Under UK GDPR, you have the right to:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data (right to be forgotten)</li>
                  <li>Object to or restrict processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="mt-2">
                  To exercise any of these rights, please contact us at{" "}
                  <a
                    href="mailto:admin@red-mortgages.co.uk"
                    className="text-primary font-semibold hover:underline"
                  >
                    admin@red-mortgages.co.uk
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold font-playfair text-text-primary mb-3">
                  8. Data Security
                </h2>
                <p>
                  We implement appropriate technical and organisational measures
                  to protect your personal data against unauthorised access, loss,
                  or destruction. All data is stored securely and access is limited
                  to authorised personnel only.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold font-playfair text-text-primary mb-3">
                  9. Complaints
                </h2>
                <p>
                  If you are unhappy with how we handle your personal data, you
                  have the right to lodge a complaint with the Information
                  Commissioner&apos;s Office (ICO) at{" "}
                  <a
                    href="https://ico.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    ico.org.uk
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold font-playfair text-text-primary mb-3">
                  10. Contact Us
                </h2>
                <p>
                  For any questions about this privacy policy, please contact:
                </p>
                <div className="mt-3 p-4 bg-surface-alt rounded-card border border-black/[0.04] text-sm">
                  <p className="font-bold text-text-primary">
                    Red Mortgages LTD
                  </p>
                  <p>Level One, Basecamp Liverpool</p>
                  <p>49 Jamaica Street, Liverpool, L1 0AH</p>
                  <p className="mt-2">
                    Email:{" "}
                    <a
                      href="mailto:admin@red-mortgages.co.uk"
                      className="text-primary hover:underline font-semibold"
                    >
                      admin@red-mortgages.co.uk
                    </a>
                  </p>
                  <p>
                    Phone:{" "}
                    <a
                      href="tel:01514470047"
                      className="text-primary hover:underline font-semibold"
                    >
                      0151 447 0047
                    </a>
                  </p>
                </div>
              </div>

              <p className="text-xs text-text-muted pt-4 border-t border-black/[0.04]">
                This policy was last updated in May 2026.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
