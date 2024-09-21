import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "../style/globals.css";
import "../style/custom.css";
import Image from "next/image";
import Particles from "@/components/particles";

const inter = Rajdhani({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Rishvan M",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
        {children}</body>
    </html>
  );
}
