import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/navbar/index';
import  Footer  from './components/footer/Footer';  // Import the new Footer component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ElectroNex | Premium Electronics",
  description: "Your destination for cutting-edge electronics",
  openGraph: {
    title: "ElectroNex | Premium Electronics",
    description: "Your destination for cutting-edge electronics",
    url: "https://electronex.com",
    siteName: "ElectroNex",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ElectroNex | Premium Electronics",
    description: "Your destination for cutting-edge electronics",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        <main className="min-h-[calc(100vh-160px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}