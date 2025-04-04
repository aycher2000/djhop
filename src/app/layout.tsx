import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./fix-all.css"; // Consolidated styling fixes
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://djhop.vercel.app'),
  title: "DJ H.O.P - Turntablist, Producer & Artist",
  description: "Official website of DJ H.O.P, a versatile turntablist, producer, and artist with decades of experience in hip-hop culture. Explore music, portfolio, interviews, and more.",
  keywords: ["DJ H.O.P", "turntablist", "hip-hop", "music producer", "scratch DJ", "vinyl", "San Diego DJ", "Bay Area DJ", "Oakland DJ", "music portfolio"],
  creator: "DJ H.O.P",
  publisher: "DJ H.O.P",
  authors: [{ name: "DJ H.O.P" }],
  category: "Music",
  openGraph: {
    title: "DJ H.O.P - Turntablist, Producer & Artist",
    description: "Official website of DJ H.O.P, a versatile turntablist, producer, and artist with decades of experience in hip-hop culture. Explore music, portfolio, interviews, and more.",
    url: 'https://djhop.vercel.app',
    siteName: "DJ H.O.P Official Website",
    images: [
      {
        url: '/images/logo.webp',
        width: 300,
        height: 300,
        alt: 'DJ H.O.P Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "DJ H.O.P - Turntablist, Producer & Artist",
    description: "Official website of DJ H.O.P, a versatile turntablist, producer, and artist with decades of experience in hip-hop culture. Explore music, portfolio, interviews, and more.",
    images: ['/images/logo.webp'],
    creator: '@djhop',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token', // Replace with actual Google verification token when available
  },
  alternates: {
    canonical: 'https://djhop.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/logo.webp" />
        <meta name="theme-color" content="#00ffff" />
      </head>
      <body className={inter.className}>
        <div className="page-container">
          <Header />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </div>
        
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.1/lightgallery.min.js" />
      </body>
    </html>
  );
}