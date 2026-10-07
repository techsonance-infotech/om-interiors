import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScriptLoader from "@/components/ScriptLoader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Om Interiors — Interior Design Studio",
  description: "Om Interiors — Professional Interior Design Studio",
  icons: {
    icon: "/images/om-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
