import { Metadata } from "next";

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL("https://nano-studio.com"),
  generator: "Albert-Andrei Moldovanu",
  applicationName: "Nano Creative Studio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "NANO",
    "nano",
    "nano studio",
    "nano design",
    "Studio",
    "Design",
    "Designer",
    "website",
    "design studio",
  ],
  authors: [
    { name: "nano", url: "https://nano-studio.com" },
    { name: "Albert-Andrei Moldovanu", url: "https://aamoldovanu.com" },
  ],
  creator: "Albert-Andrei Moldovanu",
  publisher: "nano",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  title: "Nano | Creative Studio",
  description:
    "Discover the intersection of creativity and technology at Nano®. We specialize in crafting visually stunning designs and powerful software solutions. Elevate your digital experience with our innovative approach, where design meets innovation!",
  openGraph: {
    title: "Nano | Creative Studio",
    description:
      "Discover the intersection of creativity and technology at Nano®. We specialize in crafting visually stunning designs and powerful software solutions. Elevate your digital experience with our innovative approach, where design meets innovation!",
    type: "website",
    url: "https://aamoldovanu.com",
    images: "https://aamoldovanu.com/preview.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nano | Creative Studio",
    description:
      "Discover the intersection of creativity and technology at Nano®. We specialize in crafting visually stunning designs and powerful software solutions. Elevate your digital experience with our innovative approach, where design meets innovation!",
    images: "https://aamoldovanu.com/preview.jpg",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
        href: "https://aamoldovanu.com/favicon.ico",
      },
      {
        url: "/favicon.png",
        sizes: "48x48",
        type: "image/x-icon",
        href: "https://aamoldovanu.com/favicon.png",
      },
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: [
      { url: "/favicon.ico" },
      {
        url: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
        href: "https://aamoldovanu.com/favicon.ico",
      },
      { url: "/favicon.png" },
      { url: "/favicon.png", sizes: "48x48", type: "png", href: "#" },
      {
        url: "/favicon.png",
        sizes: "48x48",
        type: "image/x-icon",
        href: "https://aamoldovanu.com/favicon.png",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/favicon.png",
      },
    ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
