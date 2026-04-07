import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Cyprus Company Setup and Accounting",
  description:
    "Open or manage your Cyprus company with one portal for invoicing, expenses, tax visibility, and accountant support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${instrumentSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
