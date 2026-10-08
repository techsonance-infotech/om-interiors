import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScriptLoader from "@/components/ScriptLoader";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import WebSiteSchema from "@/components/schema/WebSiteSchema";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#805231",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Interior Designer in Surat, Gujarat | OM Interior",
    template: "%s | OM Interior Studio Surat",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "OM Interior Studio Surat" }],
  creator: "OM Interior Studio Surat",
  publisher: "OM Interior",
  manifest: "/manifest.json",
  icons: {
    icon: "/images/om-logo.png",
    apple: "/images/om-logo.png",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: "Interior Designer in Surat, Gujarat | OM Interior",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "OM Interior Design Studio Surat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Designer in Surat, Gujarat | OM Interior",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <LocalBusinessSchema />
        <WebSiteSchema />
      </head>
      <body suppressHydrationWarning>
        <div id="wrapper">
          <Header />
          {children}
          <Footer />
        </div>
        <ScriptLoader />
      </body>
    </html>
  );
}
