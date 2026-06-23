import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://aoe4.fun"),
  title: "Age of Empires IV on Solana | $AOE4 Meme Coin",
  description:
    "Age of Empires IV on Solana. $AOE4 is the community meme coin for RTS legends — rally the empire, raid the charts, and march to the moon. Launched on pump.fun.",
  applicationName: "Age of Empires IV on Solana",
  keywords: [
    "Age of Empires IV",
    "Age of Empires 4",
    "AoE4",
    "AOE4",
    "Age of Empires",
    "AoE",
    "RTS",
    "real time strategy",
    "$AOE4",
    "AOE4 coin",
    "AOE4 token",
    "Solana",
    "Solana meme coin",
    "SOL meme coin",
    "meme coin",
    "memecoin",
    "pump.fun",
    "pumpfun",
    "crypto",
    "altcoin",
    "knight rush",
    "French civilization",
    "Wonder victory",
    "gaming token",
    "play to earn",
  ],
  authors: [{ name: "AOE4 on Solana" }],
  creator: "AOE4 on Solana",
  category: "cryptocurrency",
  openGraph: {
    type: "website",
    url: "https://aoe4.fun",
    siteName: "Age of Empires IV on Solana",
    title: "Age of Empires IV on Solana | $AOE4",
    description:
      "Rally the empire. The $AOE4 meme coin marches on Solana — launched on pump.fun.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Age of Empires IV on Solana — $AOE4",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Age of Empires IV on Solana | $AOE4",
    description:
      "Rally the empire. The $AOE4 meme coin marches on Solana — launched on pump.fun.",
    images: ["/og.png"],
    creator: "@aoe4onsol",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#86efac",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}