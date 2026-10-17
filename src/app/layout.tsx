import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maa Santoshi Tour & Travels | Bilaspur",
  description:
    "Plan a local taxi, outstation trip, or pickup enquiry with Maa Santoshi Tour & Travels in Bilaspur, Chhattisgarh. Call or enquire on WhatsApp.",
  applicationName: "Maa Santoshi Tour & Travels",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Maa Santoshi Tour & Travels | Bilaspur",
    description:
      "Comfortable rides, convenient travel, and personalised service for your journeys from Bilaspur.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
