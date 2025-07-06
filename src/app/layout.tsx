import "../../styles/globals.css";
import { PropsWithChildren } from "react";
import Script from "next/script";
import FadeInWrapper from "../components/FadeInWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Traveler Dev Ltd. - A Software Development Company",
    template: "%s | Traveler Dev Ltd."
  },
  description:
    "We build good software worldwide. We have both first party software to make life easier, as well as support for product development in your own org.",
  keywords: [
    "software",
    "development",
    "web applications",
    "Tweet Sweep",
    "Photo Tamer",
    "indie tech",
    "web development",
    "freelance",
    "product engineering",
    "apps"
  ],
  authors: [{ name: "Traveler Dev Ltd." }],
  creator: "Traveler Dev Ltd.",
  publisher: "Traveler Dev Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL("https://traveler.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://traveler.dev",
    title: "Traveler Dev Ltd. - Software Development Company",
    description:
      "We build good software worldwide. We have both first party software to make life easier, as well as support for product development in your own org.",
    siteName: "Traveler Dev Ltd.",
    images: [
      {
        url: "/img/globe.svg",
        width: 630,
        height: 630,
        alt: "Traveler Dev Ltd. - Software Development Company"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Traveler Dev Ltd. - Software Development Company",
    description: "Good software made worldwide.",
    images: ["/img/globe.svg"],
    creator: "@travelerdev"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "favicon/favicon.svg", type: "image/svg+xml" },
      { url: "favicon/apple-touch-icon.png", type: "image/png" }
    ],
    apple: "favicon/apple-touch-icon.png",
    shortcut: "favicon/favicon.svg"
  }
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
        <FadeInWrapper>{children}</FadeInWrapper>
        <Script
          async
          defer
          data-website-id="5027eb0b-e9bf-45d0-aef5-e49c44423fdf"
          src="https://analytics.traveler.dev/script.js"
        />
      </body>
    </html>
  );
}
