interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 lg:px-20 ${className}`}>
      <div className="max-w-4xl mx-auto">{children}</div>
    </section>
  );
}

interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
      {children}
    </span>
  );
}

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight mb-6">
      {children}
    </h2>
  );
}
