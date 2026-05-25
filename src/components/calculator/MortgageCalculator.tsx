"use client";

import { useState, useCallback } from "react";
import CalculatorInputs from "./CalculatorInputs";
import CalculatorResults from "./CalculatorResults";
import CalculatorChart from "./CalculatorChart";

interface CalculatorState {
  propertyValue: number;
  deposit: number;
  interestRate: number;
  term: number;
  repaymentType: "repayment" | "interest-only";
}

export default function MortgageCalculator() {
  // Main centralized controlled state
  const [inputs, setInputs] = useState<CalculatorState>({
    propertyValue: 350000,
    deposit: 50000,
    interestRate: 4.5,
    term: 25,
    repaymentType: "repayment",
  });

  // Callback passed to child input to bubble up validated input updates
  const handleInputsChange = useCallback((newInputs: CalculatorState) => {
    setInputs(newInputs);
  }, []);

  const { propertyValue, deposit, interestRate, term, repaymentType } = inputs;
  const loanAmount = Math.max(0, propertyValue - deposit);
  const ltv = propertyValue > 0 ? (loanAmount / propertyValue) * 100 : 0;

  // Interest conversion rates
  const annualRate = interestRate;
  const monthlyRate = (annualRate / 100) / 12;
  const totalMonths = term * 12;

  let monthlyPayment = 0;
  let totalRepayable = 0;
  let totalInterest = 0;

  // Perform standard mortgage amortisation calculations
  if (loanAmount > 0 && annualRate > 0) {
    if (repaymentType === "repayment") {
      if (monthlyRate === 0) {
        monthlyPayment = loanAmount / totalMonths;
      } else {
        monthlyPayment =
          (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
          (Math.pow(1 + monthlyRate, totalMonths) - 1);
      }
      totalRepayable = monthlyPayment * totalMonths;
      totalInterest = Math.max(0, totalRepayable - loanAmount);
    } else {
      // Interest-Only calculations
      monthlyPayment = loanAmount * monthlyRate;
      totalInterest = monthlyPayment * totalMonths;
      totalRepayable = totalInterest + loanAmount;
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Inputs Column */}
      <div className="lg:col-span-5 w-full">
        <CalculatorInputs onInputsChange={handleInputsChange} />
      </div>

      {/* Outputs (Results & Charts) Column */}
      <div className="lg:col-span-7 w-full flex flex-col gap-6 bg-white p-6 md:p-8 rounded-card border border-black/[0.04] shadow-premium">
        <h3 className="text-lg font-bold font-playfair text-text-primary border-b border-black/[0.04] pb-3">
          Repayment Summary
        </h3>

        <CalculatorResults
          monthlyPayment={monthlyPayment}
          totalRepayable={totalRepayable}
          totalInterest={totalInterest}
          ltv={ltv}
        />

        {loanAmount > 0 && totalRepayable > 0 && (
          <div className="border-t border-black/[0.04] pt-6 flex flex-col items-center">
            <h4 className="text-sm font-bold uppercase tracking-wider text-text-secondary mb-4 self-start">
              Cost Breakdown Chart
            </h4>
            <CalculatorChart
              principal={loanAmount}
              interest={totalInterest}
              totalCost={totalRepayable}
            />
          </div>
        )}
      </div>
    </div>
  );
}
