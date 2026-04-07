import { ScrollReveal } from "@/components/scroll-reveal";

type SectionProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function LandingSection({ children, delay = 0, className }: SectionProps) {
  return (
    <ScrollReveal delay={delay} className={className}>
      {children}
    </ScrollReveal>
  );
}
