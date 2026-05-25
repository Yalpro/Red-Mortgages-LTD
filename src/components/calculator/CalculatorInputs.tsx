"use client";

import { useEffect, useState, useRef } from "react";
import { DollarSign, Percent, Calendar, HelpCircle } from "lucide-react";

interface CalculatorInputsProps {
  onInputsChange: (inputs: {
    propertyValue: number;
    deposit: number;
    interestRate: number;
    term: number;
    repaymentType: "repayment" | "interest-only";
  }) => void;
}

export default function CalculatorInputs({ onInputsChange }: CalculatorInputsProps) {
  // Local input states for instant fluid typing feedback
  const [propertyValue, setPropertyValue] = useState<string>("350000");
  const [deposit, setDeposit] = useState<string>("50000");
  const [interestRate, setInterestRate] = useState<string>("4.5");
  const [term, setTerm] = useState<number>(25);
  const [repaymentType, setRepaymentType] = useState<"repayment" | "interest-only">("repayment");

  // Error boundary state
  const [validationError, setValidationError] = useState<string | null>(null);

  // Reference to prevent initial trigger on first mount
  const isFirstMount = useRef(true);

  // Calculations that update instantly for local typography indicators
  const propValNum = Number(propertyValue) || 0;
  const depositNum = Number(deposit) || 0;
  const loanAmount = propValNum - depositNum;

  // Real-time local input validations
  useEffect(() => {
    if (propValNum < 10000) {
      setValidationError("Minimum property value is £10,000");
    } else if (propValNum > 10000000) {
      setValidationError("Maximum property value is £10,000,000");
    } else if (depositNum >= propValNum) {
      setValidationError("Deposit cannot exceed or equal property value");
    } else {
      setValidationError(null);
    }
  }, [propValNum, depositNum]);

  // Debounced parent notification (300ms) to ensure charts and count-ups animate smoothly
  useEffect(() => {
    // Skip initial mount emit to prevent early double execution
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    const timer = setTimeout(() => {
      // Only emit valid data back to parent
      if (
        propValNum >= 10000 &&
        propValNum <= 10000000 &&
        depositNum < propValNum &&
        Number(interestRate) > 0 &&
        Number(interestRate) <= 15
      ) {
        onInputsChange({
          propertyValue: propValNum,
          deposit: depositNum,
          interestRate: Number(interestRate),
          term,
          repaymentType,
        });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [propertyValue, deposit, interestRate, term, repaymentType, onInputsChange, propValNum, depositNum]);

  // Formatting helper
  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <div className="flex flex-col gap-6 bg-white p-6 md:p-8 rounded-card border border-black/[0.04] shadow-premium">
      <h3 className="text-lg font-bold font-playfair text-text-primary border-b border-black/[0.04] pb-3 flex items-center gap-2">
        Mortgage Requirements
      </h3>

      {/* Input 1: Property Value */}
      <div className="flex flex-col gap-2">
        <label htmlFor="propertyValue" className="text-xs font-bold uppercase tracking-wider text-text-secondary flex justify-between">
          <span>Property Value (£)</span>
          <span className="text-text-muted font-medium lowercase">min £10k - max £10m</span>
        </label>
        <div className="relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted font-medium text-sm">
            £
          </div>
          <input
            type="number"
            name="propertyValue"
            id="propertyValue"
            min="10000"
            max="10000000"
            value={propertyValue}
            onChange={(e) => setPropertyValue(e.target.value)}
            placeholder="e.g. 350,000"
            className="w-full pl-8 pr-3 py-3 border border-black/10 rounded-[6px] text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary premium-transition"
          />
        </div>
      </div>

      {/* Input 2: Deposit */}
      <div className="flex flex-col gap-2">
        <label htmlFor="deposit" className="text-xs font-bold uppercase tracking-wider text-text-secondary flex justify-between">
          <span>Deposit (£)</span>
          {loanAmount > 0 && propValNum >= 10000 && (
            <span className="text-primary font-bold">
              Loan Amount: {formatCurrency(loanAmount)}
            </span>
          )}
        </label>
        <div className="relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted font-medium text-sm">
            £
          </div>
          <input
            type="number"
            name="deposit"
            id="deposit"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
            placeholder="e.g. 50,000"
            className="w-full pl-8 pr-3 py-3 border border-black/10 rounded-[6px] text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary premium-transition"
          />
        </div>
      </div>

      {/* Input 3: Interest Rate */}
      <div className="flex flex-col gap-2">
        <label htmlFor="interestRate" className="text-xs font-bold uppercase tracking-wider text-text-secondary flex justify-between">
          <span>Interest Rate (%)</span>
          <span className="text-text-muted font-medium lowercase">range 0.1% - 15%</span>
        </label>
        <div className="relative rounded-md shadow-sm">
          <input
            type="number"
            name="interestRate"
            id="interestRate"
            step="0.05"
            min="0.1"
            max="15"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="e.g. 4.5"
            className="w-full pl-4 pr-8 py-3 border border-black/10 rounded-[6px] text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary premium-transition"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-text-muted text-sm">
            %
          </div>
        </div>
      </div>

      {/* Input 4: Mortgage Term Slider */}
      <div className="flex flex-col gap-2.5">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold uppercase tracking-wider text-text-secondary">
            Mortgage Term
          </span>
          <span className="text-sm font-bold text-primary font-playfair bg-red-light px-2.5 py-1 rounded">
            {term} Years
          </span>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min="5"
            max="35"
            step="1"
            value={term}
            onChange={(e) => setTerm(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary border-none focus:outline-none"
          />
        </div>
        <div className="flex justify-between text-[10px] text-text-muted font-bold">
          <span>5 Years</span>
          <span>35 Years</span>
        </div>
      </div>

      {/* Input 5: Repayment Type Toggle */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-text-secondary">
          Repayment Type
        </span>
        <div className="w-full grid grid-cols-2 bg-slate-50 p-1.5 rounded-[8px] border border-black/[0.03]">
          <button
            type="button"
            onClick={() => setRepaymentType("repayment")}
            className={`py-2 text-xs font-bold uppercase tracking-wider rounded-[6px] transition-all duration-200 ${
              repaymentType === "repayment"
                ? "bg-primary text-white shadow-sm"
                : "text-text-secondary hover:text-primary hover:bg-slate-100"
            }`}
          >
            Repayment
          </button>
          <button
            type="button"
            onClick={() => setRepaymentType("interest-only")}
            className={`py-2 text-xs font-bold uppercase tracking-wider rounded-[6px] transition-all duration-200 ${
              repaymentType === "interest-only"
                ? "bg-primary text-white shadow-sm"
                : "text-text-secondary hover:text-primary hover:bg-slate-100"
            }`}
          >
            Interest Only
          </button>
        </div>
      </div>

      {/* Validation Error Alert Banner */}
      {validationError && (
        <div className="p-3 bg-red-light border-l-4 border-primary rounded text-xs text-primary font-semibold leading-relaxed animate-pulse">
          {validationError}
        </div>
      )}
    </div>
  );
}
