import { LeadForm } from "@/components/lead-form";

type SiteFooterCtaProps = {
  formId: string;
  locale: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
};

export function SiteFooterCta({
  formId,
  locale,
  title = "Book a call with us",
  description = "Tell us you are interested and we will reach out to schedule a first conversation about your Cyprus company.",
  buttonLabel = "Book your first call",
}: SiteFooterCtaProps) {
  return (
    <>
      <section className="border-t border-[var(--border)] bg-[linear-gradient(180deg,#f7f7fb_0%,#eceef5_100%)]">
        <div className="mx-auto max-w-6xl px-[var(--container-pad)] py-14 text-center sm:py-16">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
            {title}
          </h2>
          <div className="mt-8">
            <div className="mx-auto max-w-[32rem] text-left">
              <h3 className="text-2xl font-semibold leading-tight text-[var(--foreground)] sm:text-3xl">
                Request a free first call
              </h3>
            </div>
            <div className="mt-6">
              <LeadForm
                formId={formId}
                locale={locale}
                compact
                emailOnly
                title=""
                description=""
                buttonLabel={buttonLabel}
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1f1f1f] text-[#8d8d8d]">
        <div className="mx-auto max-w-6xl px-6 py-6 sm:px-8 sm:py-8 lg:px-12">
          <div className="flex flex-col items-center justify-center gap-4 border-b border-white/8 pb-5 text-center">
            <div className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-[#262626] px-5 py-3">
              <span className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-white">
                Fiscalio
              </span>
            </div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#c2c2c2] sm:text-xs">
              A service by GMAP Associates Ltd
            </p>

          </div>


        </div>
      </footer>
    </>
  );
}
