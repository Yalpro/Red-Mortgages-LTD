import FadeUp from "@/components/motion/FadeUp";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImageUrl?: string;
}

export default function PageHero({
  title,
  subtitle,
  backgroundImageUrl = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920",
}: PageHeroProps) {
  return (
    <div className="relative w-full py-20 lg:py-24 bg-primary-dark overflow-hidden select-none border-b border-primary/10">
      {/* Subtle property visual backdrop with low opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          opacity: 0.12,
        }}
      />
      {/* Fluid custom red color gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-mid/95 to-primary-dark/85" />
      
      {/* Structural Container */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-white">
        <div className="max-w-3xl flex flex-col gap-4">
          <FadeUp y={20}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair tracking-tight">
              {title}
            </h1>
          </FadeUp>
          {subtitle && (
            <FadeUp delay={0.15} y={15}>
              <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed max-w-xl font-medium">
                {subtitle}
              </p>
            </FadeUp>
          )}
        </div>
      </div>
    </div>
  );
}
