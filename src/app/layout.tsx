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
  metadataBase: new URL("https://g1softwaresolutions.vercel.app"),
  title: {
    default: "G1 Software Solutions | Desarrollo de Software a Medida",
    template: "%s | G1 Software Solutions",
  },
  description:
    "Desarrollamos software, aplicaciones web y móviles, sistemas de gestión y soluciones tecnológicas a medida para empresas y emprendedores.",
  keywords: [
    "desarrollo de software",
    "software factory",
    "aplicaciones web",
    "aplicaciones móviles",
    "sistemas de gestión",
    "soluciones tecnológicas",
    "G1 Software Solutions",
    "Argentina",
  ],
  authors: [{ name: "G1 Software Solutions" }],
  creator: "G1 Software Solutions",
  publisher: "G1 Software Solutions",
  icons: {
    icon: [
      { url: "/logo-g1.jpeg" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo-g1.jpeg",
    apple: "/logo-g1.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://g1softwaresolutions.vercel.app",
    siteName: "G1 Software Solutions",
    title: "G1 Software Solutions",
    description:
      "Desarrollamos software, aplicaciones web y móviles, sistemas de gestión y soluciones tecnológicas a medida para empresas y emprendedores.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "G1 Software Solutions",
        type: "image/png",
      },
      {
        url: "/logo-g1.jpeg",
        width: 800,
        height: 800,
        alt: "G1 Software Solutions Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "G1 Software Solutions",
    description:
      "Desarrollamos software, aplicaciones web y móviles, sistemas de gestión y soluciones tecnológicas a medida para empresas y emprendedores.",
    images: ["/logo.png"],
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
