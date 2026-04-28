import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooterCta } from "@/components/site-footer-cta";
import { SiteHeader } from "@/components/site-header";

const formId = "prices-page-form";

const planHighlights = [
  "Dedicated accountant support",
  "Fiscalio dashboard and invoicing workspace",
  "Annual tax and filing coordination",
];

const plans = [
  {
    title: "Open a company",
    subtitle: "For founders starting a Cyprus company",
    prefix: "Starting from",
    price: "€3,000",
    cta: "Book your first call",
  },
  {
    title: "Annual accounting and auditing",
    subtitle: "For companies below €85,000 turnover",
    prefix: "Starting from",
    price: "€2,000",
    cta: "Book your first call",
  },
  {
    title: "Larger companies",
    subtitle: "For companies above €85,000 turnover",
    prefix: "Pricing",
    price: "Custom quote",
    cta: "Book your first call",
  },
];

const details = [
  {
    title: "Opening a company",
    description:
      "The setup fee covers the company opening workflow and the first structured onboarding into the portal.",
    price: "Starting from €3,000 + VAT",
  },
  {
    title: "Companies below €85,000 turnover",
    description:
      "Annual accounting, auditing and dashboard access for smaller companies with a simpler operating volume.",
    price: "Starting from €2,000 + VAT",
  },
  {
    title: "Companies above €85,000 turnover",
    description:
      "Annual accounting, auditing and dashboard access for companies with a higher volume of activity and reporting work.",
    price: "Custom quote",
  },
];

const extras = [
  "Additional one-time services are quoted separately when needed.",
  "The dashboard is included with annual accounting contracts.",
  "Final scope is confirmed during the first call before onboarding starts.",
];

type PricesPageProps = {
  locale: string;
};

export function PricesPage({ locale }: PricesPageProps) {
  return (
    <main className="pb-24 md:pb-0">
      <SiteHeader formId={formId} currentPage="prices" />

      <ScrollReveal>
        <section className="bg-[var(--surface-muted)]">
          <div className="mx-auto max-w-6xl px-[var(--container-pad)] py-10 sm:py-14 md:py-16">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                  Pricing
                </p>
                <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
                  Our plans
                </h1>
                <div className="mt-8 divide-y divide-[var(--border)] rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)]">
                  {planHighlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 px-5 py-5 sm:px-6"
                    >
                      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-muted)] text-[var(--foreground)]">
                        <span className="text-lg">✓</span>
                        <span className="absolute -bottom-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-semibold text-white">
                          ✓
                        </span>
                      </div>
                      <p className="text-base font-medium leading-7 text-[var(--foreground)] sm:text-lg">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[var(--radius-xl)] bg-[#e8ecf3] p-4 sm:p-5">
                {/* <div className="flex items-center gap-4 px-1 text-base font-medium text-[var(--foreground)]">
                  <span className="text-[var(--muted-foreground)]">Monthly</span>
                  <div className="flex h-8 w-14 items-center rounded-full bg-[var(--accent)] p-1">
                    <div className="ml-auto h-6 w-6 rounded-full bg-white shadow-sm" />
                  </div>
                  <span>Annual</span>
                  <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-strong)]">
                    Yearly only
                  </span>
                </div> */}

                <div className="mt-5 grid gap-4 xl:grid-cols-3">
                  {plans.map((plan) => (
                    <div
                      key={plan.title}
                      className="flex min-h-[22rem] flex-col rounded-[var(--radius-lg)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]"
                    >
                      <div>
                        <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)]">
                          {plan.title}
                        </h2>
                        <p className="mt-3 text-lg leading-8 text-[var(--muted-foreground)]">
                          {plan.subtitle}
                        </p>
                      </div>

                      <div className="mt-10">
                        <p className="text-sm font-medium uppercase tracking-[0.12em] text-[var(--muted-foreground)]">
                          {plan.prefix}
                        </p>
                        <p className="mt-3 text-4xl font-semibold tracking-tight text-[var(--accent)]">
                          {plan.price}
                        </p>
                      </div>

                      <div className="mt-auto pt-8">
                        <a
                          href={`#${formId}`}
                          className="inline-flex min-h-12 w-full items-center justify-center rounded-[var(--radius-md)] bg-[var(--accent)] px-5 py-3 text-base font-semibold text-white"
                        >
                          <p className="text-white">{plan.cta}</p>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <section className="mx-auto max-w-6xl px-[var(--container-pad)] py-14">
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
                <div className="text-right text-2xl font-semibold tracking-tight text-[var(--accent-strong)]">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={140}>
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
      </ScrollReveal>

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
