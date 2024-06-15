import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-sourceSerif",
});

const sourceSerifBold = Source_Serif_4({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sourceSerifBold",
});

const sourceSerifSemiBold = Source_Serif_4({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-sourceSerifSemiBold",
});

const sourceSerifItalic = Source_Serif_4({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-sourceSerifItalic",
});

export const metadata: Metadata = {
  title: "John Ric Tenepere",
  description: "John Ric Tenepere Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSerif.variable} ${sourceSerifBold.variable} ${sourceSerifSemiBold.variable} ${sourceSerifItalic.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
