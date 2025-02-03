import type { Metadata } from "next";
import { Poppins, Inter } from 'next/font/google'
import "./globals.css";

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: "A love letter",
  description: "Made for Naura",
  icons:'/heart-2.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable}  antialiased` }
      >
        <div className="bg-gradient-to-b from-rose-200 to-rose-50">
          {children}
        </div>
      </body>
    </html>
  );
}
