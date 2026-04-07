import { notFound } from "next/navigation";

import { LandingPage } from "@/components/landing-page";
import { getDictionary, isSupportedLocale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export default async function LocalePage({ params }: PageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <LandingPage locale={locale} />;
}
