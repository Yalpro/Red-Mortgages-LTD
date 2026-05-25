"use client";

import { useEffect, useState } from "react";
import { CalendarDays, PoundSterling, TrendingUp, Percent, AlertTriangle } from "lucide-react";

interface CalculatorResultsProps {
  monthlyPayment: number;
  totalRepayable: number;
  totalInterest: number;
  ltv: number;
}

// Lightweight custom count-up visual utility utilizing requestAnimationFrame
function AnimatedNumber({
  value,
  format,
}: {
  value: number;
  format: (val: number) => string;
}) {
  const [displayVal, setDisplayVal] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const startValue = displayVal;
    const duration = 600; // ms

    const run = (now: number) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Ease out cubic multiplier
      const ease = 1 - Math.pow(1 - progress, 3);
      
      const current = startValue + (value - startValue) * ease;
      setDisplayVal(current);

      if (progress < 1) {
        requestAnimationFrame(run);
      } else {
        setDisplayVal(value);
      }
    };

    requestAnimationFrame(run);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <>{format(displayVal)}</>;
}

export default function CalculatorResults({
  monthlyPayment,
  totalRepayable,
  totalInterest,
  ltv,
}: CalculatorResultsProps) {
  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }).format(Math.round(val));

  const formatLTV = (val: number) => `${val.toFixed(1)}%`;

  return (
    <div className="flex flex-col gap-6">
      {/* 2x2 Grid of metrics cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Card 1: Monthly Repayment */}
        <div className="bg-red-light p-6 rounded-card border-l-4 border-primary flex items-start justify-between shadow-sm relative overflow-hidden select-none">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-primary">
              Monthly Payment
            </span>
            <span className="text-3xl font-extrabold font-playfair text-primary mt-1">
              <AnimatedNumber value={monthlyPayment} format={formatCurrency} />
            </span>
            <span className="text-[10px] text-text-muted mt-1">Estimated repayments</span>
          </div>
          <div className="p-2 bg-primary/10 rounded-full text-primary">
            <CalendarDays size={20} />
          </div>
        </div>

        {/* Card 2: Total Repayable */}
        <div className="bg-white p-6 rounded-card border-l-4 border-slate-300 flex items-start justify-between shadow-premium select-none">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-text-muted">
              Total Repayable
            </span>
            <span className="text-2xl font-bold font-playfair text-text-primary mt-1">
              <AnimatedNumber value={totalRepayable} format={formatCurrency} />
            </span>
            <span className="text-[10px] text-text-muted mt-1">Includes capital & interest</span>
          </div>
          <div className="p-2 bg-slate-100 rounded-full text-text-secondary">
            <PoundSterling size={20} />
          </div>
        </div>

        {/* Card 3: Total Interest */}
        <div className="bg-white p-6 rounded-card border-l-4 border-slate-300 flex items-start justify-between shadow-premium select-none">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-text-muted">
              Total Interest
            </span>
            <span className="text-2xl font-bold font-playfair text-text-primary mt-1">
              <AnimatedNumber value={totalInterest} format={formatCurrency} />
            </span>
            <span className="text-[10px] text-text-muted mt-1">Cost of borrowing</span>
          </div>
          <div className="p-2 bg-slate-100 rounded-full text-text-secondary">
            <TrendingUp size={20} />
          </div>
        </div>

        {/* Card 4: Loan to Value (LTV) */}
        <div className="bg-white p-6 rounded-card border-l-4 border-slate-300 flex items-start justify-between shadow-premium select-none">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-text-muted">
              Loan to Value (LTV)
            </span>
            <span className="text-2xl font-bold font-playfair text-text-primary mt-1">
              <AnimatedNumber value={ltv} format={formatLTV} />
            </span>
            <span className="text-[10px] text-text-muted mt-1">Ratio of loan to value</span>
          </div>
          <div className="p-2 bg-slate-100 rounded-full text-text-secondary">
            <Percent size={18} />
          </div>
        </div>

      </div>

      {/* Conditionally rendered LTV Warning Alerts */}
      {ltv > 95 && ltv <= 100 && (
        <div className="flex items-center gap-3 p-4 bg-amber-50 border-l-4 border-amber-500 rounded text-xs text-amber-800 leading-relaxed font-semibold shadow-sm">
          <AlertTriangle size={18} className="text-amber-600 flex-shrink-0" />
          <span>High LTV — limited lenders and products available in the UK market.</span>
        </div>
      )}

      {ltv > 100 && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border-l-4 border-primary rounded text-xs text-primary leading-relaxed font-bold shadow-sm">
          <AlertTriangle size={18} className="text-primary flex-shrink-0" />
          <span>LTV exceeds 100% — deposit cannot exceed property value.</span>
        </div>
      )}
    </div>
  );
}
