import { notFound } from "next/navigation";

import { PricesPage } from "@/components/prices-page";
import { isSupportedLocale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocalePricesPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <PricesPage locale={locale} />;
}
