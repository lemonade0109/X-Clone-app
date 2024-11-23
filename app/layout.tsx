import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/layouts/Sidebar";
import News from "@/components/layouts/News";
import SessionWrapper from "@/components/Auth/SessionWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s - X Clone",
    default: "Welcome - X Clone",
  },
  description: "Tweet your thoughts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="flex justify-between max-w-6xl mx-auto">
            <div className="hidden xl:inline border-r border-gray-200 h-screen">
              <Sidebar />
            </div>

            <div className="w-2xl flex-1">{children}</div>

            <div className="p-3 h-screen w-[24rem] border-l hidden lg:flex lg:flex-col">
              <div className="sticky top-0 bg-white py-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-100 text-sm w-full px-4 py-2 border-gray-200 rounded-3xl"
                />
              </div>

              <News />
            </div>
          </div>
        </body>
      </html>
    </SessionWrapper>
  );
}
