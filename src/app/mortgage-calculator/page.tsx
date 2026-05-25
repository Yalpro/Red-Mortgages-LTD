import PageHero from '@/components/sections/PageHero';
import MortgageCalculator from '@/components/calculator/MortgageCalculator';
import SectionHeader from '@/components/ui/SectionHeader';
import FadeUp from '@/components/motion/FadeUp';
import StaggerChildren from '@/components/motion/StaggerChildren';
import Accordion from '@/components/ui/Accordion';

export const metadata = {
  title: 'Mortgage Calculator | Red Mortgages',
  description: 'Calculate monthly repayments instantly with our real‑time mortgage calculator. Includes LTV alerts and visual charts.',
};

const faqs = [
  {
    question: 'What inputs do I need to provide?',
    answer: 'Enter the property value, deposit amount, interest rate, loan term and select repayment type (repayment or interest‑only). The calculator updates instantly.',
  },
  {
    question: 'What does LTV mean?',
    answer: 'Loan‑to‑Value (LTV) is the ratio of the loan amount to the property value. Higher LTVs can affect the rates you are offered.',
  },
  {
    question: 'Are the rates shown indicative?',
    answer: 'Yes – the calculator uses a placeholder rate. Our advisers will provide you with the exact rate based on your profile.',
  },
];

export default function MortgageCalculatorPage() {
  return (
    <section className="bg-white text-gray-900">
      <PageHero title='Mortgage Calculator' subtitle='Instantly see your monthly repayments and loan breakdown.' />
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <MortgageCalculator />
        <section className="mt-16">
          <SectionHeader title='Frequently Asked Questions' subtitle='Common queries about mortgage calculations' centered />
          <StaggerChildren className="space-y-4 mt-8">
            {faqs.map((item, idx) => (
              <FadeUp key={idx} delay={0.1 * idx}>
                <Accordion title={item.question}>{item.answer}</Accordion>
              </FadeUp>
            ))}
          </StaggerChildren>
        </section>
      </div>
    </section>
  );
}
