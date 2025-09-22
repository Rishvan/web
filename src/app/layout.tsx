import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "../app/globals.css";
import "../style/custom.css";
import bg from "../assets/bg.jpg";
import Particles from "@/components/particles";

const inter = Rajdhani({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Rishvan | Portfolio",
  description: "Personal Portfolio Website",
  icons: {
    icon: "/favicon.png", // standard favicon
    // for iOS devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        {children}
      </body>
    </html>
  );
}
