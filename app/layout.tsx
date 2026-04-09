import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'LakeLifeIQ',
    template: '%s | LakeLifeIQ',
  },
  description: 'Smarter boating starts here.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#eef4f8] text-gray-900">
        <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-lg font-bold tracking-tight text-[#132a72] transition hover:text-cyan-700"
              >
                LakeLifeIQ
              </Link>

              <nav className="hidden items-center gap-5 md:flex">
                <Link
                  href="/"
                  className="text-sm font-semibold text-gray-700 transition hover:text-[#132a72]"
                >
                  Home
                </Link>
                <Link
                  href="/start"
                  className="text-sm font-semibold text-gray-700 transition hover:text-[#132a72]"
                >
                  Get Started
                </Link>
                <Link
                  href="/dealers"
                  className="text-sm font-semibold text-gray-700 transition hover:text-[#132a72]"
                >
                  Dealers
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <nav className="flex items-center gap-3 md:hidden">
                <Link
                  href="/"
                  className="text-xs font-semibold text-gray-700 transition hover:text-[#132a72]"
                >
                  Home
                </Link>
                <Link
                  href="/dealers"
                  className="text-xs font-semibold text-gray-700 transition hover:text-[#132a72]"
                >
                  Dealers
                </Link>
              </nav>

              <Link
                href="/start"
                className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-600 md:px-5 md:py-2.5"
              >
                Get My Setup Plan
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
