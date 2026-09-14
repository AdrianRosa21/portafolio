import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading = ({ number, title, subtitle, className }: SectionHeadingProps) => {
  return (
    <div className={cn("mb-12 md:mb-20", className)}>
      <div className="flex items-center gap-4 mb-4">
        {number && (
          <span className="font-mono text-accent text-sm md:text-lg font-semibold tracking-wider">
            {number}
          </span>
        )}
        {number && <div className="h-px w-8 md:w-12 bg-surface-border" />}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-muted text-lg md:text-2xl max-w-2xl mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};
