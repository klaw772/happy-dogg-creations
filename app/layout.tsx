import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Header } from './header';

const engebrechtre = localFont({
  src: [
    {
      path: "../public/engebrechtre/engebrechtre-bd.otf",
      weight: "600",
      style: "bold",
    },
    {
      path: "../public/engebrechtre/engebrechtre-rg.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

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
      <body className={engebrechtre.className}>
        <main className="main">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
