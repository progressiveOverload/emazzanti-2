import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "eMazzanti Technologies – Trusted Outsourced IT Partner",
  description:
    "22+ years of IT excellence. Cybersecurity, cloud services, IT support 24/7, and Microsoft solutions for businesses across the US and worldwide.",
  openGraph: {
    title: "eMazzanti Technologies",
    description: "Your Trusted Outsourced IT Partner",
    url: "https://www.emazzanti.net",
    siteName: "eMazzanti Technologies",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0732/4647/4379/files/ChatGPT_Image_May_20_2026_11_25_11_AM.png?v=1779290763",
        width: 1731,
        height: 909,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
