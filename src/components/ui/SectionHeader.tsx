import { cn } from "@/utils/cn";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 mb-12",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-playfair relative pb-3.5">
        {title}
        <span
          className={cn(
            "absolute bottom-0 h-1 bg-primary rounded-full",
            centered ? "left-1/2 -translate-x-1/2 w-12" : "left-0 w-16"
          )}
        />
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-sm md:text-base text-text-muted leading-relaxed mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}
