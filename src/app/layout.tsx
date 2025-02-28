import React from 'react'
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Bridge",
  description: "Bridging the future with AI",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }} className={inter.className}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}