import './globals.css'; // Import your global CSS
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { poppins } from './fonts';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        {/* Remove Google Fonts links since we're using next/font */}
      </head>
      <body>
        <Navbar />
        {children} {/* This renders your app's content */}
        <Footer />
      </body>
    </html>
  );
}