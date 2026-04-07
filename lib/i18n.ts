export const locales = ["en"] as const;

export type Locale = (typeof locales)[number];

export function isSupportedLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

const dictionary = {
  en: {
    meta: {
      localeLabel: "English",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionary[locale];
}
