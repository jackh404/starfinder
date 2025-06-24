import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Starfinder Society",
  description: "Starfinder Assignments and Requests Interface (SARI)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="starfinder">
      <body
        className={`${chakraPetch.className} antialiased min-h-screen bg-[url(/sariBG.jpeg)] bg-contain bg-center bg-no-repeat bg-fixed text-base-content flex justify-center`}>
        <main className="w-1/3 mt-20">
        {children}
        </main>
      </body>
    </html>
  );
}
