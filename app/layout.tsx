import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/layout/nav'
import Footer from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portal Template',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-black via-black to-stone-800" />
        <Nav />
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32 bg-stone-950">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

