import type { Metadata } from "next";
import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400","500","600","700"], // Add the desired font weights
});


export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico', // /public/favicon.ico
    apple: '/apple-icon.png', // /public/apple-icon.png
  },
  title: "weksbiotechnologiesltd",
  description: "Cultivating the future of agriculture, blending science, innovation, and sustainability to transform Ghanaˆs agricultural landscape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
