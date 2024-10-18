import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AlCare",
  description: "A health care management system",
};

const fontSans = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-dark-300 font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
