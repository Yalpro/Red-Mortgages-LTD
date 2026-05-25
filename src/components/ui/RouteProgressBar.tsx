"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RouteProgressBar() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setLoading(true);
    setWidth(15);

    const t1 = setTimeout(() => setWidth(75), 80);
    const t2 = setTimeout(() => setWidth(100), 250);
    const t3 = setTimeout(() => {
      setLoading(false);
      setWidth(0);
    }, 550);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed left-0 top-0 z-[999999] h-[3px] w-full bg-transparent pointer-events-none">
      <div
        className="h-full bg-[#CC0000] shadow-[0_0_12px_rgba(204,0,0,0.7)] transition-all duration-300 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
