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
  title: "Audiphile e-commerce",
  description: "e-commerce website dealing in music assets",
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
