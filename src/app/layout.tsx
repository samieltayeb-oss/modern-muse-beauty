import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ReactLenis from "@/components/ReactLenis";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Modern Muse Beauty | Calgary",
  description: "A holistic wellness studio specializing in lymphatic drainage, kobido japanese facials and cellulite reduction therapy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-muse-ivory text-muse-ink font-sans selection:bg-black selection:text-white">
        <CustomCursor />
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
