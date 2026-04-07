import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooterCta } from "@/components/site-footer-cta";
import { SiteHeader } from "@/components/site-header";

const formId = "app-page-form";

const appFeatures = [
  {
    eyebrow: "Electronic invoicing",
    title: "Fast and straightforward. Create and manage invoices in a few steps.",
    label: "Invoicing module placeholder",
  },
  {
    eyebrow: "Tax forecast",
    title: "See expected taxes and upcoming obligations without guessing.",
    label: "Tax forecast placeholder",
  },
  {
    eyebrow: "Annual filing support",
    title: "Prepare, review, and submit the records needed for the yearly cycle.",
    label: "Annual filing placeholder",
  },
  {
    eyebrow: "Live accountant support",
    title: "Ask questions inside the workflow and get help from a real person.",
    label: "Support chat placeholder",
  },
];

function AppDashboardMockup() {
  return (
    <div className="mx-auto mt-10 max-w-5xl rounded-[calc(var(--radius-lg)+0.5rem)] border border-white/20 bg-white/10 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
      <div className="rounded-[var(--radius-lg)] bg-white p-4 text-[var(--foreground)] sm:p-5">
        <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-[var(--border)]" />
            <span className="font-medium">Dashboard</span>
          </div>
          <div className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-medium text-[var(--accent-strong)]">
            Live portal view
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="grid gap-4">
            <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-[var(--muted-foreground)]">Invoices to collect</p>
                  <p className="mt-2 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                    €12,840
                  </p>
                </div>
                <div className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-medium text-[var(--accent-strong)]">
                  8 open invoices
                </div>
              </div>
              <div className="mt-4 rounded-[var(--radius-sm)] bg-[var(--surface-muted)] p-3">
                <div className="grid grid-cols-[1fr_auto_auto] items-center gap-3 text-sm">
                  <span className="font-medium text-[var(--foreground)]">Beta Holdings Ltd</span>
                  <span className="text-[var(--muted-foreground)]">15/06/2026</span>
                  <span className="font-semibold text-[var(--foreground)]">€2,820</span>
                </div>
              </div>
            </div>

            <div className="hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-4 sm:block">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-[var(--muted-foreground)]">Revenue trend</p>
                  <p className="mt-1 text-lg font-semibold tracking-tight text-[var(--foreground)]">
                    This year vs last year
                  </p>
                </div>
                <div className="flex gap-3 text-xs text-[var(--muted-foreground)]">
                  <span className="inline-flex items-center gap-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                    2026
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff8b61]" />
                    2025
                  </span>
                </div>
              </div>

              <div className="mt-5 grid h-48 grid-cols-6 items-end gap-3 rounded-[var(--radius-md)] bg-[linear-gradient(180deg,#fafafe_0%,#f1f3f8_100%)] px-3 py-4 sm:h-56">
                {[28, 52, 48, 74, 58, 69].map((value, index) => (
                  <div key={`line-${index}`} className="flex h-full items-end gap-1.5">
                    <div
                      className="w-1/2 rounded-t-full bg-[var(--accent)]/92"
                      style={{ height: `${value}%` }}
                    />
                    <div
                      className="w-1/2 rounded-t-full bg-[#ff8b61]/88"
                      style={{ height: `${Math.max(18, value - 12)}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[var(--radius-md)] bg-[linear-gradient(180deg,#6a73f8_0%,#7a64fe_100%)] p-4 text-white">
              <p className="text-sm text-white/74">Chat with your accountant</p>
              <div className="mt-4 grid gap-3">
                <div className="max-w-[88%] rounded-2xl rounded-bl-md bg-white/14 px-3 py-3 text-sm leading-6 text-white/92">
                  We reviewed the uploaded expenses. Two documents still need a category.
                </div>
                <div className="ml-auto max-w-[82%] rounded-2xl rounded-br-md bg-white px-3 py-3 text-sm leading-6 text-[var(--foreground)]">
                  Understood. I will update them today.
                </div>
              </div>
            </div>

            <div className="hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-4 sm:block">
              <p className="text-sm text-[var(--muted-foreground)]">Upcoming items</p>
              <div className="mt-4 grid gap-3">
                <div className="flex items-center justify-between rounded-[var(--radius-sm)] bg-[var(--surface-muted)] px-3 py-3">
                  <div>
                    <p className="text-sm font-medium text-[var(--foreground)]">VAT filing</p>
                    <p className="text-xs text-[var(--muted-foreground)]">Due in 9 days</p>
                  </div>
                  <p className="text-sm font-semibold text-[var(--accent-strong)]">€1,240</p>
                </div>
                <div className="flex items-center justify-between rounded-[var(--radius-sm)] bg-[var(--surface-muted)] px-3 py-3">
                  <div>
                    <p className="text-sm font-medium text-[var(--foreground)]">Expense review</p>
                    <p className="text-xs text-[var(--muted-foreground)]">3 items need review</p>
                  </div>
                  <p className="text-sm font-semibold text-[var(--foreground)]">Today</p>
                </div>
              </div>
            </div>

            <div className="hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-4 sm:block">
              <p className="text-sm text-[var(--muted-foreground)]">Tax forecast</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                €8,930 expected this year
              </p>
              <div className="mt-4 h-2.5 rounded-full bg-[var(--surface-muted)]">
                <div className="h-2.5 w-[68%] rounded-full bg-[var(--accent)]" />
              </div>
              <p className="mt-3 text-sm text-[var(--muted-foreground)]">
                Based on current revenue and deductible expenses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppCard({
  title,
  eyebrow,
  align = "left",
}: {
  title: string;
  eyebrow: string;
  align?: "left" | "right";
}) {
  return (
    <div className={`grid gap-8 md:grid-cols-2 md:items-center ${align === "right" ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div className="max-w-md">
        <p className="inline-flex rounded-full border border-[#8b78ff] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/84">
          {eyebrow}
        </p>
        <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
      </div>
      <div className="rounded-[var(--radius-lg)] border border-white/10 bg-white/6 p-5">
        {eyebrow === "Electronic invoicing" ? (
          <div className="rounded-[var(--radius-md)] bg-white p-4 text-[var(--foreground)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm text-[var(--muted-foreground)]">Draft invoice</p>
                <p className="mt-1 text-lg font-semibold tracking-tight">Beta Studio Ltd</p>
              </div>
              <div className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-medium text-[var(--accent-strong)]">
                Ready to send
              </div>
            </div>
            <div className="mt-4 grid gap-3 text-sm">
              <div className="flex items-center justify-between rounded-[var(--radius-sm)] bg-[var(--surface-muted)] px-3 py-3">
                <span>Design retainer</span>
                <span className="font-semibold">€1,800</span>
              </div>
              <div className="flex items-center justify-between rounded-[var(--radius-sm)] bg-[var(--surface-muted)] px-3 py-3">
                <span>VAT 19%</span>
                <span className="font-semibold">€342</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-[var(--muted-foreground)]">Total due</p>
              <p className="text-2xl font-semibold tracking-tight">€2,142</p>
            </div>
          </div>
        ) : null}

        {eyebrow === "Tax forecast" ? (
          <div className="rounded-[var(--radius-md)] bg-white p-4 text-[var(--foreground)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm text-[var(--muted-foreground)]">Forecast</p>
                <p className="mt-1 text-lg font-semibold tracking-tight">Expected taxes this year</p>
              </div>
              <p className="text-2xl font-semibold tracking-tight text-[var(--accent-strong)]">
                €8,930
              </p>
            </div>
            <div className="mt-5 h-2.5 rounded-full bg-[var(--surface-muted)]">
              <div className="h-2.5 w-[68%] rounded-full bg-[var(--accent)]" />
            </div>
            <div className="mt-5 grid h-28 grid-cols-4 items-end gap-3 rounded-[var(--radius-sm)] bg-[linear-gradient(180deg,#fafafe_0%,#f1f3f8_100%)] px-3 py-3">
              {[38, 56, 74, 64].map((value, index) => (
                <div
                  key={`forecast-${index}`}
                  className="rounded-t-full bg-[var(--accent)]/90"
                  style={{ height: `${value}%` }}
                />
              ))}
            </div>
          </div>
        ) : null}

        {eyebrow === "Annual filing support" ? (
          <div className="rounded-[var(--radius-md)] bg-white p-4 text-[var(--foreground)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm text-[var(--muted-foreground)]">Annual filing</p>
                <p className="mt-1 text-lg font-semibold tracking-tight">2026 package</p>
              </div>
              <div className="rounded-full bg-[#e7f7ee] px-3 py-1 text-xs font-medium text-[#1f8f5f]">
                In review
              </div>
            </div>
            <div className="mt-4 grid gap-3">
              {[
                ["Company records", "Uploaded"],
                ["Expense ledger", "Validated"],
                ["Final submission", "Pending"],
              ].map(([label, status]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-[var(--radius-sm)] bg-[var(--surface-muted)] px-3 py-3 text-sm"
                >
                  <span className="font-medium">{label}</span>
                  <span className="text-[var(--muted-foreground)]">{status}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {eyebrow === "Live accountant support" ? (
          <div className="rounded-[var(--radius-md)] bg-[linear-gradient(180deg,#6a73f8_0%,#7a64fe_100%)] p-4 text-white">
            <p className="text-sm text-white/74">Accountant chat</p>
            <div className="mt-4 grid gap-3">
              <div className="max-w-[84%] rounded-2xl rounded-bl-md bg-white/14 px-3 py-3 text-sm leading-6 text-white/92">
                Your VAT file is ready. Please confirm the last invoice amount.
              </div>
              <div className="ml-auto max-w-[78%] rounded-2xl rounded-br-md bg-white px-3 py-3 text-sm leading-6 text-[var(--foreground)]">
                Confirmed. It should be €1,240 including VAT.
              </div>
            </div>
            <div className="mt-4 rounded-[var(--radius-sm)] bg-white/10 px-3 py-3 text-sm text-white/82">
              Average reply time: under 1 business day
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

type AppPageProps = {
  locale: string;
};

export function AppPage({ locale }: AppPageProps) {
  return (
    <main className="bg-[var(--dark-surface)] pb-24 text-white md:pb-0">
      <SiteHeader formId={formId} currentPage="app" inverted />

      <section className="bg-[linear-gradient(180deg,#7568f1_0%,#6163df_50%,#231b34_100%)]">
        <ScrollReveal>
          <div className="mx-auto max-w-6xl px-[var(--container-pad)] py-10 sm:py-14 md:py-18">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                The dashboard for your Cyprus company
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/78">
                A single workspace for invoices, expenses, tax visibility,
                filings, and accountant support.
              </p>
            </div>

            <AppDashboardMockup />
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-6xl px-[var(--container-pad)] py-14">
        <ScrollReveal delay={70}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
              Invoices, tax visibility, and support without surprises
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-14">
          <ScrollReveal delay={110}>
            <AppCard {...appFeatures[0]} align="left" />
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <AppCard {...appFeatures[1]} align="right" />
          </ScrollReveal>
          <ScrollReveal delay={210}>
            <AppCard {...appFeatures[2]} align="left" />
          </ScrollReveal>
          <ScrollReveal delay={260}>
            <AppCard {...appFeatures[3]} align="right" />
          </ScrollReveal>
        </div>
      </section>

      <SiteFooterCta
        formId={formId}
        locale={locale}
        title="Speak with one of our tax advisors"
        description="Leave your email and we will contact you."
        buttonLabel="Request your first call"
      />

      <MobileStickyCta href={`#${formId}`} label="Request your first call" />
    </main>
  );
}
