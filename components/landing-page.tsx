import Image from "next/image";

import { FAQAccordion } from "@/components/faq-accordion";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooterCta } from "@/components/site-footer-cta";
import { SiteHeader } from "@/components/site-header";

const formId = "lead-form";

const heroTags: string[] = [];

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "You leave your details, we contact you to schedule the first call, and we review your case. Based on your situation, we confirm the scope, pricing, and next steps.",
  },
  {
    question: "Can you help if I do not have a company yet?",
    answer:
      "Yes. We guide you through the company formation process in Cyprus and collect the information needed to set everything up correctly from the start.",
  },
  {
    question: "Can I use Fiscalio if I already have a company?",
    answer:
      "Yes. Existing companies can be onboarded into the platform so invoices, expenses, deadlines, and accounting activity are managed in one place.",
  },
  {
    question: "WHat if I need help relocating from Europe to Cyprus?",
    answer:
      "We can help you with the documents needed and searching for an apartment.",
  },
  {
    question: "Do I still work with a real accountant?",
    answer:
      "Yes. The platform is supported by real accountants. The accountant handles the work and supports you when needed.",
  },
];

function VideoPreviewCard() {
  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-[20rem] overflow-hidden rounded-[2.5rem] border border-[#8f79ee] bg-[linear-gradient(180deg,#9a7fee_0%,#b09af1_60%,#f2f0fb_100%)] px-5 pb-8 pt-5 shadow-[0_18px_40px_rgba(18,12,34,0.28)] sm:max-w-[22rem]">
        <div className="flex items-center justify-between text-white">
          <span className="text-2xl font-semibold tracking-tight">9:41</span>
          <div className="h-8 w-28 rounded-full bg-[#2f2748]" />
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">5G</span>
            <span className="h-3 w-6 rounded-sm border border-white" />
          </div>
        </div>

        <div className="mt-10 text-center text-white">
          <p className="text-lg text-white/82">Tuesday 7 April</p>
          <p className="mt-2 text-6xl font-semibold tracking-tight sm:text-7xl">
            16:04
          </p>
        </div>

        <div className="relative mt-10">
          <div className="absolute inset-x-3 top-4 h-full rounded-[1.5rem] bg-[#6c58c7]/45 blur-[1px]" />
          <div className="relative rounded-[1.5rem] bg-white p-4 shadow-[0_18px_30px_rgba(67,49,138,0.18)]">
            <div className="grid grid-cols-[auto_1fr_auto] items-start gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2b243d] text-white">
                <div className="space-y-1">
                  <div className="h-1 w-5 rounded-full bg-white" />
                  <div className="h-1 w-4 rounded-full bg-white" />
                  <div className="h-1 w-3 rounded-full bg-white" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-[#626875]">Fiscalio</p>
                  <p className="text-sm text-[#7e8792]">Now</p>
                </div>
                <p className="mt-1 text-lg font-semibold leading-7 text-[var(--foreground)]">
                  Company approved 🥳
                </p>
                <p className="mt-2 text-sm leading-6 text-[#646b77]">
                  You can now start invoicing
                </p>
              </div>
              <div className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardOverviewCard() {
  return (
    <div className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-soft)] sm:p-5">
      <div className="flex items-center justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <p className="text-sm text-[var(--muted-foreground)]">Dashboard overview</p>
          <p className="mt-1 text-lg font-semibold tracking-tight text-[var(--foreground)]">
            One place for company admin
          </p>
        </div>
        <div className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-medium text-[var(--accent-strong)]">
          Portal
        </div>
      </div>

      <div className="mt-4 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-muted)] p-4">
            <p className="text-sm text-[var(--muted-foreground)]">Invoices</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
              18
            </p>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">3 awaiting payment</p>
          </div>
          <div className="hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-muted)] p-4 sm:block">
            <p className="text-sm text-[var(--muted-foreground)]">Expected taxes</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
              €4,260
            </p>
            <p className="mt-2 text-sm text-[var(--accent-strong)]">Next review in 10 days</p>
          </div>
        </div>

        <div className="hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-4 sm:block">
          <p className="text-sm text-[var(--muted-foreground)]">Upcoming tasks</p>
          <div className="mt-4 grid gap-3">
            {[
              ["Upload expense receipts", "Today"],
              ["VAT check", "This week"],
              ["Quarterly review", "Scheduled"],
            ].map(([label, status]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-[var(--radius-sm)] bg-[var(--surface-muted)] px-3 py-3 text-sm"
              >
                <span className="font-medium text-[var(--foreground)]">{label}</span>
                <span className="text-[var(--muted-foreground)]">{status}</span>
              </div>
            ))}
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
        <ScrollReveal>
          <div className="mx-auto max-w-6xl px-[var(--container-pad)] py-8 sm:py-12 md:py-16">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                Powered by{" "}
                <a
                  href="https://www.gmapgroup.net/"
                  target="_blank"
                  rel="noreferrer"
                  className="relative inline-block px-1 font-semibold text-[var(--foreground)] transition hover:text-[var(--accent-strong)]"
                >
                  <span className="absolute left-0 right-0 top-0 h-2 rounded-sm bg-[var(--accent-soft)]" />
                  <span className="relative">GMAP Associates</span>
                </a>
              </p>
              <h1 className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl">
                Managing a company in Cyprus has never been this simple.
              </h1>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row ">
                <div className=" text-white">
                  <a
                    href={`#${formId}`}
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white"
                  >
                    Book your first call
                  </a>
                </div>
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

            <div className="mx-auto mt-6 max-w-[700px] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] shadow-[var(--shadow-soft)]">
              <Image
                src="/hero-happy-people.jpg"
                alt="Professional working on a laptop in a bright office setting"
                width={1000}
                height={667}
                className="h-auto max-w-[700px] w-full"
                priority
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-[var(--dark-surface)] text-white">
        <ScrollReveal delay={60}>
          <div className="mx-auto grid max-w-6xl gap-8 px-[var(--container-pad)] py-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/60">
                One portal instead of scattered admin
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
                Everything you need to run your company from a single dashboard
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/72">
                We bring the relation between you and your accountant online and updated to 2026.
              </p>
            </div>
            <VideoPreviewCard />
          </div>
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-6xl px-[var(--container-pad)] py-12 md:py-16">
        <ScrollReveal delay={120}>
          <div className="grid gap-6 rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-5 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-center md:p-8">
            <div className="max-w-xl">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                Dashboard
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                See how the dashboard helps you manage taxes and invoices
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
                The dashboard, invoice flows, tax forecast, and support experience
                now live on a separate product page.
              </p>
              <div className="text-white">
                <a
                  href="/en/app"
                  className="mt-6 inline-flex rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white"
                >
                  Check the dashboard
                </a>
              </div>
            </div>
            <DashboardOverviewCard />
          </div>
        </ScrollReveal>
      </section>

      <ScrollReveal delay={180}>
        <section className="bg-[var(--surface-muted)]/60">
          <div className="mx-auto max-w-6xl px-[var(--container-pad)] py-14">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                FAQ
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted-foreground)] sm:text-lg" />
            </div>
            <div className="mx-auto mt-10 max-w-4xl">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </section>
      </ScrollReveal>

      <SiteFooterCta
        formId={formId}
        locale={locale}
        title="Speak with one of our tax advisors"
        description="Leave your email and we will contact you."
      />
    </main>
  );
}
