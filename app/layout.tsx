import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "フリーランス発注書アプリ",
  description: "フリーランス保護新報に対応した発注書を簡単に作成できます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <header className="bg-blue-700 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              フリーランス発注書アプリ
            </Link>
            <div className="space-x-4">
              <Link href="/create-order" className="hover:text-blue-200">
                発注書作成
              </Link>
              <Link href="/orders" className="hover:text-blue-200">
                発注書一覧
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <footer className="bg-blue-700 text-white p-4 text-center">
          &copy; 2024 フリーランス発注書アプリ
        </footer>
      </body>
    </html>
  );
}
