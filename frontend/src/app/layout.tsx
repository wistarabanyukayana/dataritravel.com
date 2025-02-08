import React from "react";

import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";

import "./globals.css";

import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datari Travel Indonesia",
  description: "Travel handla dan terpecaya",
};

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

// Configure Montserrat font
const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <div className="sticky top-0 z-50">
          {/* Topbar */}
          <Topbar />

          {/* Navbar */}
          <Navbar />
        </div>

        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
