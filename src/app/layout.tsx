import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/layout/LenisProvider";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import RouteProgressBar from "@/components/ui/RouteProgressBar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://red-mortgages-ltd.vercel.app"),
  title: {
    default: "Red Mortgages LTD | Mortgage & Protection Broker Liverpool",
    template: "%s | Red Mortgages LTD",
  },
  description:
    "Red Mortgages LTD is an FCA-regulated whole-of-market mortgage and protection broker based in Liverpool. Jenny and Hayley help first-time buyers, home movers, remortgages and landlords find the best mortgage and protection deals.",
  openGraph: {
    title: "Red Mortgages LTD | Mortgage & Protection Advice",
    description:
      "Red Mortgages LTD provides expert mortgage, protection and insurance advice from Liverpool.",
    url: "https://red-mortgages-ltd.vercel.app",
    siteName: "Red Mortgages LTD",
    images: [
      {
        url: "https://red-mortgages.vercel.app/Meta_image.png",
        width: 1200,
        height: 630,
        alt: "Red Mortgages LTD",
        type: "image/png",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Mortgages LTD | Mortgage & Protection Advice",
    description:
      "Red Mortgages LTD provides expert mortgage, protection and insurance advice from Liverpool.",
    images: ["https://red-mortgages.vercel.app/Meta_image.png"],
  },
  alternates: {
    canonical: "https://red-mortgages.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Red Mortgages LTD",
    "image": "https://red-mortgages.vercel.app/Meta_image.png",
    "@id": "https://red-mortgages.vercel.app/#localbusiness",
    "url": "https://red-mortgages.vercel.app",
    "telephone": "01514470047",
    "email": "admin@red-mortgages.co.uk",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Level One, Basecamp Liverpool, 49 Jamaica Street",
      "addressLocality": "Liverpool",
      "postalCode": "L1 0AH",
      "addressCountry": "GB"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com/redmortgagesltd/",
      "https://www.linkedin.com/in/red-mortgages-ltd-a3703474?originalSubdomain=uk",
      "https://instagram.com/redmortgagesltd?r=nametag"
    ],
    "areaServed": "United Kingdom",
    "knowsAbout": ["Mortgages", "Remortgaging", "Buy to Let", "Life Insurance", "Income Protection", "Critical Illness Cover"],
    "legalName": "Red Mortgages LTD",
    "registrationID": "12642186",
    "iso6523": "930475"
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta property="og:image" content="https://red-mortgages.vercel.app/Meta_image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
      </head>
      <body className="antialiased font-inter bg-off-white text-text-primary selection:bg-primary selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LenisProvider>
          <div className="flex flex-col min-h-screen">
            <Suspense fallback={null}>
              <RouteProgressBar />
            </Suspense>
            <header className="sticky top-0 z-50 w-full flex flex-col bg-white">
              <TopBar />
              <Navbar />
            </header>
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <WhatsAppFloat />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
