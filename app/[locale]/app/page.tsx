import { notFound } from "next/navigation";

import { AppPage } from "@/components/app-page";
import { isSupportedLocale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleAppPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <AppPage locale={locale} />;
}
