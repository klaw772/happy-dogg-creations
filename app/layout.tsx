import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Header } from './header';

export const metadata: Metadata = {
  title: 'Happy Dogg Creations',
  description: 'Happy Dogg Creations e-commerce platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="main">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
