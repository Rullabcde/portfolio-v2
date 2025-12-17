import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Site configuration
const siteConfig = {
  name: "Muhammad Choirul Rasyid",
  title: "Muhammad Choirul Rasyid | Portfolio",
  description: "Portfolio of Muhammad Choirul Rasyid - Aspiring System Administrator & DevOps Enthusiast specializing in Linux, cloud infrastructure, and automation.",
  url: "https://choirulrasyid.web.id",
  keywords: [
    "Muhammad Choirul Rasyid",
    "System Administrator",
    "DevOps",
    "Portfolio",
    "Linux",
    "Cloud Infrastructure",
    "Automation",
    "IT Professional",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
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
    google: "google3599626c7f1366f0",
  },
  
  alternates: {
    canonical: siteConfig.url,
  },
  
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "bg-background text-foreground antialiased min-h-screen")}>
        {children}
      </body>
    </html>
  );
}
