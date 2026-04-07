import Image from "next/image";

import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { SiteFooterCta } from "@/components/site-footer-cta";
import { SiteHeader } from "@/components/site-header";

const formId = "lead-form";

const heroTags: string[] = [];

function PlaceholderVisual({
  label,
  heightClassName = "min-h-[18rem]",
  dark = false,
}: {
  label: string;
  heightClassName?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[var(--radius-lg)] border p-6",
        heightClassName,
        dark
          ? "border-white/10 bg-white/5"
          : "border-[var(--border)] bg-[var(--surface)]",
      ].join(" ")}
    >
      <div
        className={[
          "absolute inset-0",
          dark
            ? "bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_36%)]"
            : "bg-[radial-gradient(circle_at_top_left,rgba(95,103,247,0.12),transparent_32%)]",
        ].join(" ")}
      />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex gap-2">
          <span
            className={[
              "h-2.5 w-2.5 rounded-full",
              dark ? "bg-white/30" : "bg-[var(--border)]",
            ].join(" ")}
          />
          <span
            className={[
              "h-2.5 w-2.5 rounded-full",
              dark ? "bg-white/30" : "bg-[var(--border)]",
            ].join(" ")}
          />
          <span
            className={[
              "h-2.5 w-2.5 rounded-full",
              dark ? "bg-white/30" : "bg-[var(--border)]",
            ].join(" ")}
          />
        </div>
        <div
          className={[
            "grid gap-3",
            dark ? "text-white/88" : "text-[var(--foreground)]",
          ].join(" ")}
        >
          <div
            className={[
              "h-14 rounded-[var(--radius-md)]",
              dark ? "bg-white/10" : "bg-[var(--surface-muted)]",
            ].join(" ")}
          />
          <div className="grid grid-cols-2 gap-3">
            <div
              className={[
                "h-24 rounded-[var(--radius-md)]",
                dark ? "bg-white/10" : "bg-[var(--surface-muted)]",
              ].join(" ")}
            />
            <div
              className={[
                "h-24 rounded-[var(--radius-md)]",
                dark ? "bg-white/10" : "bg-[var(--surface-muted)]",
              ].join(" ")}
            />
          </div>
          <div className="text-sm font-medium uppercase tracking-[0.18em]">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}

type LandingPageProps = {
  locale: string;
};

export function LandingPage({ locale }: LandingPageProps) {
  return (
    <main className="pb-24 md:pb-0">
      <SiteHeader formId={formId} currentPage="home" />

      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(95,103,247,0.14))]" />
        <div className="mx-auto max-w-6xl px-[var(--container-pad)] py-8 sm:py-12 md:py-16">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
              Powered by GMAP Associates
            </p>
            <h1 className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
              Managing a company in Cyprus has never been this simple.
            </h1>
            {/* <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
              Start a new Cyprus company or bring an existing one into a digital
              workspace for invoicing, expenses, tax visibility, and accountant
              support.
            </p> */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`#${formId}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white"
              >
                Book your first call
              </a>
              <a
                href="/en/app"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-medium text-[var(--foreground)]"
              >
                Explore the app
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {heroTags.map((tag, index) => (
              <span
                key={tag}
                className={[
                  "rounded-full px-4 py-2 text-sm font-medium",
                  index === 0
                    ? "bg-[#f4bd75] text-[#70410d]"
                    : index === 1
                      ? "bg-[#dfe4ff] text-[#4d56bf]"
                      : "bg-[#e7ddff] text-[#6a52c9]",
                ].join(" ")}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-6 max-w-5xl overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)]  shadow-[var(--shadow-soft)]">
            <Image
              src="/hero-team.png"
              alt="Three professionals representing different Cyprus business profiles"
              width={1300}
              height={680}
              className="h-auto w-full"
              priority
            />
          </div>


        </div>
      </section>

      <section className="bg-[var(--dark-surface)] text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-[var(--container-pad)] py-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] md:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/60">
              One portal instead of scattered admin
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
              Opening and managing a company in Cyprus should feel structured
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/72">
              Clear onboarding, clear pricing, clear documents, and clear tax
              expectations. No Trustpilot block here. Just the product and the
              service model.
            </p>
          </div>
          <PlaceholderVisual
            label="Video placeholder"
            heightClassName="min-h-[18rem] sm:min-h-[20rem]"
            dark
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-[var(--container-pad)] py-12 md:py-16">
        <div className="grid gap-6 rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-5 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-center md:p-8">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
              Dashboard
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              See how the app organizes your Cyprus company in one place
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
              The dashboard, invoice flows, tax forecast, and support experience
              now live on a separate product page.
            </p>
            <a
              href="/en/app"
              className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white"
            >
              Open the app page
            </a>
          </div>
          <PlaceholderVisual
            label="Dashboard overview placeholder"
            heightClassName="min-h-[19rem]"
          />
        </div>
      </section>

      <SiteFooterCta
        formId={formId}
        locale={locale}
        title="Speak with one of our tax advisors"
        description="Leave your email and we will contact you."
      />
    </main>
  );
}
