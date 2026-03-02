import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WeatherX",
  description:
    "Get real-time and accurate weather updates for your city. Check temperature, humidity, rain chances, and more with our easy-to-use weather app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3_000,
          }}
        />
        {children}
      </body>
    </html>
  );
}
