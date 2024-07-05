import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from 'react';
import "./globals.css";
import Navbar from "../../components/shared/Navbar"
import Footer from "../../components/shared/Footer"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Market Inside Data",
  description : "Responsive Website for MI"

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body>
      <Navbar />
      <main className="relative overflow-hidden">
        {children}
      </main>
      <Footer />
      </body>
    </html>
  );
}