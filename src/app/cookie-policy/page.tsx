import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FadeUp from "@/components/motion/FadeUp";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Read the Red Mortgages LTD cookie policy. Learn about the cookies we use, why we use them, and how you can manage your cookie preferences.",
};

export default function CookiePolicyPage() {
  return (
    <div className="w-full">
      <PageHero
        title="Cookie Policy"
        subtitle="How we use cookies and similar technologies on our website."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          <FadeUp>
            <div className="prose prose-sm max-w-none text-text-secondary leading-relaxed space-y-8">
              <div>
                <h2 className="text-xl font-bold font-playfair text-text-primary mb-3">
                  1. What Are Cookies?
                </h2>
                <p>
                  Cookies are small text files placed on your device when you
                  visit a website. They are widely used to make websites work
                  efficiently and to provide information to the website owners.
                  Cookies help us improve your browsing experience and deliver
                  relevant content.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold font-playfair text-text-primary mb-3">
                  2. Cookies We Use
                </h2>
                <p>Our website uses the following types of cookies:</p>

                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-surface-alt">
                        <th className="text-left p-3 font-bold text-text-primary border border-black/[0.06]">
                          Type
                        </th>
                        <th className="text-left p-3 font-bold text-text-primary border border-black/[0.06]">
                          Purpose
                        </th>
                        <th className="text-left p-3 font-bold text-text-primary border border-black/[0.06]">
                          Duration
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-black/[0.06] font-semibold">
                          Essential
                        </td>
                        <td className="p-3 border border-black/[0.06]">
                          Required for the website to function. These cannot be
                          disabled.
                        </td>
                        <td className="p-3 border border-black/[0.06]">
                          Session
                        </td>
                      </tr>
                      <tr className="bg-surface-alt/50">
                        <td className="p-3 border border-black/[0.06] font-semibold">
                          Analytics
                        </td>
                        <td className="p-3 border border-black/[0.06]">
                          Help us understand how visitors interact with the
                          website by collecting anonymous data.
                        </td>
                        <td className="p-3 border border-black/[0.06]">
                          Up to 2 years
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-black/[0.06] font-semibold">
                          Functional
                        </td>
                        <td className="p-3 border border-black/[0.06]">
                          Remember your preferences and settings to enhance your
                          experience.
                        </td>
                        <td className="p-3 border border-black/[0.06]">
                          Up to 1 year
                        </td>
                      </tr>
                      <tr className="bg-surface-alt/50">
                        <td className="p-3 border border-black/[0.06] font-semibold">
                          Marketing
                        </td>
                        <td className="p-3 border border-black/[0.06]">
                          Used to deliver relevant advertisements and track
                          campaign performance.
                        </td>
                        <td className="p-3 border border-black/[0.06]">
                          Up to 2 years
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold font-playfair text-text-primary mb-3">
                  3. Third-Party Cookies
                </h2>
                <p>
                  Some cookies are placed by third-party services that appear on
                  our pages. We use trusted services including Google Analytics
                  for website performance monitoring. These third parties have
                  their own privacy policies governing the use of cookies.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold font-playfair text-text-primary mb-3">
                  4. Managing Cookies
                </h2>
                <p>
                  You can control and manage cookies through your browser
                  settings. Most browsers allow you to:
                </p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>View what cookies are stored and delete them individually</li>
                  <li>Block third-party cookies</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block all cookies</li>
                  <li>Delete all cookies when you close your browser</li>
                </ul>
                <p className="mt-2">
                  Please note that blocking cookies may affect the functionality
                  of our website and your user experience.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold font-playfair text-text-primary mb-3">
                  5. Consent
                </h2>
                <p>
                  By continuing to use our website, you consent to the use of
                  cookies as described in this policy. You can withdraw your
                  consent at any time by adjusting your browser settings or
                  contacting us directly.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold font-playfair text-text-primary mb-3">
                  6. Changes to This Policy
                </h2>
                <p>
                  We may update this cookie policy from time to time. Any changes
                  will be posted on this page with an updated revision date. We
                  encourage you to review this policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold font-playfair text-text-primary mb-3">
                  7. Contact Us
                </h2>
                <p>
                  If you have any questions about our use of cookies, please{" "}
                  <Link
                    href="/contact"
                    className="text-primary font-semibold hover:underline"
                  >
                    contact us
                  </Link>{" "}
                  or email{" "}
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
                  8. Further Information
                </h2>
                <p>
                  For more details on how we process your personal data, please
                  see our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-primary font-semibold hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
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
