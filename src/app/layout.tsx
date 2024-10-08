import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header, Footer } from '@components/index';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'mstomar | Full Stack Developer',
  description: 'Mayank Singh Tomar | Full Stack Developer',
  icons: {
    icon: '/favicons/favicon.ico',
    apple: '/favicons/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
      >
        <Header />
        <div className='min-h-screen mt-20'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
