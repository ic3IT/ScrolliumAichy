import type { Metadata } from "next";
import localFont from "next/font/local";
import { PropsWithChildren } from "react";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import "nes.css/css/nes.min.css";

const kongtext = localFont({
  src: "./../../public/kongtext.ttf",
  variable: "--font-kongtext",
});

export const metadata: Metadata = {
  title: "Acaiy's",
  description: "Your new favorite on-chain pet",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={kongtext.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
