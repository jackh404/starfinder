import type { Metadata } from "next";
import {
  Chakra_Petch /*Orbitron, Smooch_Sans, Righteous, Changa*/,
} from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

// const orbitron = Orbitron({
//   variable: "--font-orbitron",
//   subsets: ["latin"],
// });

// const smoochSans = Smooch_Sans({
//   variable: "--font-smooch-sans",
//   subsets: ["latin"],
// });

// const righteous = Righteous({
//   weight: '400',
//   style: 'normal',
//   subsets: ['latin'],
//   display: 'swap',
// });

// const changa = Changa({
//   variable: "--font-changa",
//   subsets: ["latin"],
// });

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
        className={`${chakraPetch.className} antialiased min-h-screen bg-[url(/sariMobileBG.jpeg)] lg:bg-[url(/sariBG.jpeg)] bg-cover bg-fixed text-base-content flex justify-center`}
      >
        <main className="lg:w-1/3 lg:mt-20">{children}</main>
      </body>
    </html>
  );
}