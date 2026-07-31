import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "G1 Software Solutions | Software Factory Argentina",
    template: "%s | G1 Software Solutions",
  },
  description:
    "Transformamos ideas en software. Desarrollamos aplicaciones web, móviles y sistemas a medida para empresas que quieren crecer. Argentina.",
  keywords: [
    "desarrollo de software",
    "software factory",
    "desarrollo web",
    "aplicaciones móviles",
    "Argentina",
    "Next.js",
    "React",
    "Node.js",
    "G1 Software Solutions",
  ],
  authors: [{ name: "G1 Software Solutions" }],
  creator: "G1 Software Solutions",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://g1softwaresolutions.com",
    siteName: "G1 Software Solutions",
    title: "G1 Software Solutions",
    description:
      "Transformamos ideas en software. Desarrollamos aplicaciones web, móviles y sistemas a medida.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "G1 Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "G1 Software Solutions",
    description:
      "Transformamos ideas en software. Desarrollamos aplicaciones web, móviles y sistemas a medida.",
    images: ["/og-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0A0A] text-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
