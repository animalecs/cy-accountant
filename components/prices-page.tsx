import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { SiteFooterCta } from "@/components/site-footer-cta";
import { SiteHeader } from "@/components/site-header";

const formId = "prices-page-form";

const summaryItems = [
  "Company formation through a structured process",
  "Annual accounting and dashboard access",
  "Clear threshold-based pricing for smaller and larger companies",
];

const plans = [
  {
    name: "Company formation",
    subtitle: "For founders opening a new Cyprus company",
    price: "€4,000",
    note: "One-time fee",
  },
  {
    name: "Annual accounting + dashboard",
    subtitle: "If annual turnover is below €85,000",
    price: "€2,500",
    note: "Per year",
  },
  {
    name: "Annual accounting + dashboard",
    subtitle: "If annual turnover is above €85,000",
    price: "€5,000",
    note: "Per year",
  },
];

const details = [
  {
    title: "Opening a company",
    description:
      "The setup fee covers the company opening workflow and the first structured onboarding into the portal.",
    price: "€4,000",
  },
  {
    title: "Companies below €85,000 turnover",
    description:
      "Annual accounting support and dashboard access for smaller companies with a simpler operating volume.",
    price: "€2,500 / year",
  },
  {
    title: "Companies above €85,000 turnover",
    description:
      "Annual accounting support and dashboard access for companies with a higher volume of activity and reporting work.",
    price: "€5,000 / year",
  },
];

const extras = [
  "Additional one-time services are quoted separately when needed.",
  "The dashboard is included with the annual accounting service.",
  "Final scope is confirmed during the first call before onboarding starts.",
];

function DashboardPricingMockup() {
  return (
    <div className="rounded-[var(--radius-xl)] bg-[var(--surface-muted)] p-4 sm:p-6">
      <div className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-soft)] sm:p-5">
        <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
          <div>
            <p className="text-sm font-medium text-[var(--muted-foreground)]">
              Fiscalio dashboard
            </p>
            <p className="mt-1 text-lg font-semibold tracking-tight text-[var(--foreground)]">
              Annual accounting checklist
            </p>
          </div>
          <div className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-medium text-[var(--accent-strong)]">
            Live preview
          </div>
        </div>

        <div className="mt-4 grid gap-4">
          {/* <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[linear-gradient(180deg,#6a73f8_0%,#5f67f7_100%)] p-4 text-white">
            <p className="text-sm text-white/72">Current annual plan</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">
              Annual accounting + dashboard
            </p>
            <p className="mt-2 text-sm text-white/78">
              Includes yearly controls, tax visibility, and accountant review
            </p>
          </div> */}

          <div className="grid gap-3">
            {[
              {
                title: "Audit check",
                note: "Annual records reviewed and ready",
                status: "Completed",
                tone: "bg-[#e7f7ee] text-[#1f8f5f]",
              },
              {
                title: "Tax forecast check",
                note: "Expected taxes updated for the quarter",
                status: "In progress",
                tone: "bg-[var(--accent-soft)] text-[var(--accent-strong)]",
              },
              {
                title: "Year-end filing check",
                note: "Submission package pending final confirmation",
                status: "Pending",
                tone: "bg-[#fff2df] text-[#b06a0f]",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between gap-4 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-4"
              >
                <div>
                  <p className="text-base font-semibold tracking-tight text-[var(--foreground)]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted-foreground)]">
                    {item.note}
                  </p>
                </div>
                <div className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${item.tone}`}>
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

type PricesPageProps = {
  locale: string;
};

export function PricesPage({ locale }: PricesPageProps) {
  return (
    <main className="pb-24 md:pb-0">
      <SiteHeader formId={formId} currentPage="prices" />

      <section className="mx-auto max-w-6xl px-[var(--container-pad)] py-10 sm:py-14 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="max-w-md">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
              Pricing
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
              Clear plans for opening and running a Cyprus company
            </h1>
            <div className="mt-8 grid gap-5">
              {summaryItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-[var(--border)] pb-5"
                >
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--border)] text-sm">
                    ✓
                  </span>
                  <p className="text-base leading-7 text-[var(--foreground)]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <DashboardPricingMockup />
        </div>
      </section>

      <section className="bg-[var(--surface-muted)]">
        <div className="mx-auto max-w-6xl px-[var(--container-pad)] py-14">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Pricing details
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)]">
            <div className="grid grid-cols-[minmax(0,1.5fr)_minmax(8rem,0.5fr)] gap-4 border-b border-[var(--border)] px-5 py-4 text-sm font-medium text-[var(--muted-foreground)] sm:px-8">
              <div>Service</div>
              <div className="text-right">Price</div>
            </div>
            {details.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-[minmax(0,1.5fr)_minmax(8rem,0.5fr)] gap-4 border-b border-[var(--border)] px-5 py-5 last:border-b-0 sm:px-8"
              >
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted-foreground)]">
                    {item.description}
                  </p>
                </div>
                <div className="text-right text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-[var(--container-pad)] py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            Additional notes
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {extras.map((item) => (
              <div
                key={item}
                className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <p className="text-base leading-7 text-[var(--foreground)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooterCta
        formId={formId}
        locale={locale}
        title="Speak with one of our tax advisors"
        description="Leave your email and we will contact you."
        buttonLabel="Book your first call"
      />

      <MobileStickyCta href={`#${formId}`} label="Book your first call" />
    </main>
  );
}
