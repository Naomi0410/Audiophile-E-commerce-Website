import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import CartProvider from "@/context/CartProvider";
import { Toaster } from "react-hot-toast";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: "Audiophile — High quality audio gear",
    template: "%s | Audiophile",
  },
  description:
    "E‑commerce for premium audio equipment — headphones, speakers and accessories.",
  metadataBase: new URL("https://audiophile-e-commerce-website-seven.vercel.app"), 
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Audiophile — High quality audio gear",
    description:
      "E‑commerce for premium audio equipment — headphones, speakers and accessories.",
    url: "https://audiophile-e-commerce-website-seven.vercel.app/checkout",
    siteName: "Audiophile",
    images: [
      {
        url: "/Audiophile-preview.png",
        width: 1200,
        height: 630,
        alt: "Audiophile — product preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audiophile — High quality audio gear",
    description:
      "E‑commerce for premium audio equipment — headphones, speakers and accessories.",
    images: ["/Audiophile-preview.png"],
  },
 
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <CartProvider>
          {children}
          <Toaster position="bottom-right" />
          <div id="modal-root"></div>
        </CartProvider>
      </body>
    </html>
  );
}
