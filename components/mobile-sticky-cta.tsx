type MobileStickyCtaProps = {
  href: string;
  label: string;
};

export function MobileStickyCta({ href, label }: MobileStickyCtaProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background)_96%,white)]/98 px-4 py-3 backdrop-blur md:hidden">
      <a
        href={href}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white"
      >
        {label}
      </a>
    </div>
  );
}
