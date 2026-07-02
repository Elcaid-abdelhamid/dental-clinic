import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingChatWidget } from "@/components/floating-chat-widget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://www.brightlinedental.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Brightline Dental — Premium Dental Care in Casablanca",
    template: "%s | Brightline Dental",
  },
  description:
    "Modern, patient-first dental clinic in Casablanca offering cleanings, implants, orthodontics, cosmetic dentistry, and 24/7 AI-assisted booking.",
  keywords: [
    "dental clinic Casablanca",
    "dentist Morocco",
    "teeth whitening",
    "dental implants",
    "orthodontics",
    "pediatric dentist",
    "emergency dental care",
  ],
  authors: [{ name: "Brightline Dental" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Brightline Dental",
    title: "Brightline Dental — Premium Dental Care in Casablanca",
    description:
      "Modern, patient-first dental clinic offering cleanings, implants, orthodontics, and cosmetic dentistry, with 24/7 AI-assisted booking.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brightline Dental — Premium Dental Care in Casablanca",
    description: "Book your next dental visit online in under a minute.",
  },
  icons: { icon: "/favicon.ico" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          {/* Reserved floating AI chat widget area — frontend only, no logic wired yet */}
          <FloatingChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
