import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ScrollProgress } from "@/components/scroll-progress";
import { LoadingScreen } from "@/components/loading-screen";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteConfig = {
  name: "Muhammad Choirul Rasyid",
  title: "Muhammad Choirul Rasyid | System Administrator & DevOps Engineer",
  description: "System Administrator & DevOps Enthusiast specializing in Linux, Kubernetes, CI/CD, and cloud infrastructure. Building reliable and scalable systems.",
  url: "https://choirulrasyid.web.id",
  ogImage: "/og-image.png",
  keywords: [
    "Muhammad Choirul Rasyid",
    "System Administrator",
    "DevOps Engineer",
    "Linux Administrator",
    "Kubernetes",
    "CI/CD",
    "Cloud Infrastructure",
    "AWS",
    "Docker",
    "Infrastructure as Code",
    "Yogyakarta",
    "Indonesia",
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
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@choirulrasyid",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        inter.className, 
        "min-h-screen bg-background font-sans text-foreground antialiased",
        "relative overflow-x-hidden"
      )}>
        <LoadingScreen />
        <ScrollProgress />
        <div className="fixed inset-0 z-[-1] min-h-screen w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="fixed left-0 right-0 top-0 z-[-1] m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}

