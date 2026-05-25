"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function RouteProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger animation when route (pathname or params) changes
    setVisible(true);
    setProgress(15);

    const step1 = setTimeout(() => {
      setProgress(80);
    }, 50);

    const step2 = setTimeout(() => {
      setProgress(100);
    }, 400);

    const hide = setTimeout(() => {
      setVisible(false);
      setTimeout(() => setProgress(0), 300); // Reset after fade out
    }, 700);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(hide);
    };
  }, [pathname, searchParams]);

  if (!visible && progress === 0) return null;

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-[#CC0000] z-[999999] shadow-[0_0_12px_rgba(204,0,0,0.8)] pointer-events-none transition-all ease-out"
      style={{
        width: `${progress}%`,
        opacity: visible ? 1 : 0,
        transitionDuration: visible ? "350ms" : "300ms",
      }}
    />
  );
}
