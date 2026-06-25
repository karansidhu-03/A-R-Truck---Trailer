import type { LucideIcon } from "lucide-react";

export function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border p-7 transition-all hover:border-[var(--safety)] hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(220,38,38,0.45)]">
      <div className="grid h-12 w-12 place-items-center rounded-lg bg-[var(--safety)]/10 text-[var(--safety)] mb-5 transition-colors group-hover:bg-[var(--safety)] group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-extrabold uppercase tracking-wide text-[var(--ink)] mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      <div className="absolute left-0 top-0 h-1 w-16 bg-[var(--safety)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
    </div>
  );
}
