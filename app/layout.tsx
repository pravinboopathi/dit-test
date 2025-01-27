// filepath: /c:/Users/ASUS/OneDrive/Desktop/DivineInfotech/divine/app/layout.tsx
import './globals.css'; // Import your global CSS
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children} {/* This renders your app's content */}
        <Footer />
      </body>
    </html>
  );
}