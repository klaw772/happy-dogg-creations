import './globals.css';
import type { Metadata } from 'next';
import { Header } from './header';
import { Inter } from 'next/font/google';
import HeaderWrapper from './headerWrapper';

export const metadata: Metadata = {
  title: 'Happy Dogg Creations',
  description: 'Happy Dogg Creations e-commerce platform',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <main className={`main ${inter.className}`}>{children}</main>
        </>
      </body>
    </html>
  );
}
