import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ReactLenis from "@/components/ReactLenis";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["300", "400", "500"] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "Modern Muse Beauty | Calgary",
  description: "A holistic wellness studio specializing in lymphatic drainage, kobido japanese facials and cellulite reduction therapy.",
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-muse-ivory text-muse-ink font-sans selection:bg-muse-nude selection:text-muse-ink">
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
