"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface CalculatorChartProps {
  principal: number;
  interest: number;
  totalCost: number;
}

export default function CalculatorChart({
  principal,
  interest,
  totalCost,
}: CalculatorChartProps) {
  const [isMounted, setIsMounted] = useState(false);

  // Guard against SSR hydration issues by checking mount state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="h-64 flex items-center justify-center text-sm text-text-muted">
        Loading visual chart...
      </div>
    );
  }

  // Formatting helper for currency
  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }).format(val);

  const chartData = [
    { name: "Principal (Loan Amount)", value: principal, color: "#CC0000" },
    { name: "Total Interest", value: interest, color: "#E8A0A0" },
  ];

  const principalPct = totalCost > 0 ? (principal / totalCost) * 100 : 0;
  const interestPct = totalCost > 0 ? (interest / totalCost) * 100 : 0;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Recharts Pie (Donut) Chart */}
      <div className="w-full h-64 relative flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={95}
              paddingAngle={3}
              dataKey="value"
              animationBegin={0}
              animationDuration={800}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [typeof value === "number" ? formatCurrency(value) : "", ""]}
              contentStyle={{
                backgroundColor: "#1A1A1A",
                color: "#FFFFFF",
                borderRadius: "6px",
                border: "none",
                fontSize: "12px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Label inside Donut */}
        <div className="absolute text-center select-none flex flex-col justify-center">
          <span className="text-[10px] uppercase font-bold tracking-widest text-text-muted">
            Total Cost
          </span>
          <span className="text-xl font-bold font-playfair text-text-primary mt-0.5">
            {formatCurrency(totalCost)}
          </span>
        </div>
      </div>

      {/* Legend & Summary Details */}
      <div className="w-full grid grid-cols-2 gap-4 text-xs font-semibold text-text-secondary mt-2 px-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-primary block" />
          <div className="flex flex-col">
            <span>Principal</span>
            <span className="text-text-muted font-normal">
              {formatCurrency(principal)} ({principalPct.toFixed(1)}%)
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#E8A0A0] block" />
          <div className="flex flex-col">
            <span>Total Interest</span>
            <span className="text-text-muted font-normal">
              {formatCurrency(interest)} ({interestPct.toFixed(1)}%)
            </span>
          </div>
        </div>
      </div>

      {/* Horizontal Premium Ratio Bar Indicator */}
      <div className="w-full mt-8 px-4">
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex shadow-inner">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${principalPct}%` }}
          />
          <div
            className="h-full bg-[#E8A0A0] transition-all duration-500 ease-out"
            style={{ width: `${interestPct}%` }}
          />
        </div>
        <div className="flex justify-between items-center text-[10px] text-text-muted font-bold tracking-wider uppercase mt-2.5">
          <span>{formatCurrency(principal)} Principal</span>
          <span>{formatCurrency(interest)} Interest</span>
        </div>
      </div>
    </div>
  );
}
