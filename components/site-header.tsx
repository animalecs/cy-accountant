type SiteHeaderProps = {
  formId: string;
  currentPage?: "home" | "app" | "prices";
  inverted?: boolean;
};

export function SiteHeader({
  formId,
  currentPage = "home",
  inverted = false,
}: SiteHeaderProps) {
  const baseClassName = inverted
    ? "border-white/10 bg-[var(--dark-surface-2)]/92 text-white"
    : "border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background)_92%,white)]/95 text-[var(--foreground)]";
  const linkClassName = inverted
    ? "text-white/70 hover:text-white"
    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]";
  const activeClassName = inverted
    ? "bg-[var(--accent)] text-white"
    : "bg-[var(--accent-soft)] text-[var(--accent-strong)]";
  const ctaClassName = inverted
    ? "bg-white text-[var(--dark-surface)] hover:bg-white/90"
    : "bg-[var(--accent)] text-white hover:bg-[var(--accent-strong)] hover:text-white";

  return (
    <header className={`sticky top-0 z-40 border-b backdrop-blur ${baseClassName}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-[var(--container-pad)] py-4">
        <a
          href="/en"
          className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight"
        >
          Fiscalio
        </a>
        <nav className="flex items-center gap-3 text-sm font-medium">
          <a
            href="/en/app"
            className={`rounded-full px-3 py-1.5 transition ${currentPage === "app" ? activeClassName : linkClassName}`}
          >
            App
          </a>
          <a
            href="/en/prices"
            className={`rounded-full px-3 py-1.5 transition ${currentPage === "prices" ? activeClassName : linkClassName}`}
          >
            Prices
          </a>
          <a
            href={`#${formId}`}
            className={`inline-flex min-h-10 items-center justify-center rounded-full px-4 py-2 text-sm font-medium  transition ${ctaClassName}`}
          >
            <span

              className={`${currentPage === "app" ? "text-black" : "text-white"

                }`}

            >

              Book a call

            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
