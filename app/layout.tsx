import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { siteStructuredData } from "./seo-jsonld";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"), // replace later

  title: "Vara Prasad Palivela | Full Stack Developer & AI Enthusiast",

  description:
    "Portfolio of Vara Prasad Palivela, Computer Science Diploma Student, Full Stack Developer, AI/ML Enthusiast, and Entrepreneur. Explore my projects, skills, and achievements.",

  keywords: [
    "Vara Prasad Palivela",
    "Portfolio",
    "Full Stack Developer",
    "React",
    "Next.js",
    "AI",
    "Machine Learning",
    "Python",
    "JavaScript",
    "Web Developer",
    "Prompt Engineering",
    "Computer Science Student",
  ],

  authors: [
    {
      name: "Vara Prasad Palivela",
    },
  ],

  creator: "Vara Prasad Palivela",

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  alternates: {
    canonical: "https://yourdomain.com",
  },

  openGraph: {
    title: "Vara Prasad Palivela | Portfolio",

    description:
      "Computer Science Diploma Student, Full Stack Developer, AI/ML Enthusiast, and Entrepreneur.",

    url: "https://yourdomain.com",

    siteName: "Vara Prasad Portfolio",

    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Vara Prasad Palivela",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Vara Prasad Palivela | Portfolio",

    description:
      "Full Stack Developer, AI/ML Enthusiast, Entrepreneur, and Computer Science Diploma Student.",

    images: ["/thumbnail.png"],
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          key="ldjson"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteStructuredData),
          }}
        />
      </head>

      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}