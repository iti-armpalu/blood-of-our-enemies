import type { ReactNode } from "react";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-impact",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={anton.variable}>
      <body className="relative min-h-screen">

        {/* (optional) Bullseye at crosshair */}
        <div className="pointer-events-none">
          <div className="fixed left-[14rem] top-18 -translate-x-1/2 -translate-y-1/2 z-10">
            <img
              src='/logo-map.png'
              alt='Banner'
              className='aspect-video h-15 object-cover'
            />
          </div>
        </div>
        <Sidebar />
        <Header />


        <main className="pt-16 pl-50">
          {children}
        </main>
      </body>
    </html>
  );
}
