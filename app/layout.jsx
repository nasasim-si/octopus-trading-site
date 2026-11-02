import { Funnel_Display, Geist } from 'next/font/google';
import './globals.css';

const display = Funnel_Display({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display' });
const body = Geist({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body' });

export const metadata = {
  title: 'The Octopus Trading (Pvt.) Ltd — Hospital instruments, medical machinery imports and supply',
  description:
    'Karachi-based importer, supplier and general trader of hospital instruments, medical machinery, administrative products, security items and machinery parts.',
  openGraph: {
    title: 'The Octopus Trading (Pvt.) Ltd',
    description: 'One supplier. Eight arms. Your trusted partner in procurement and supply.',
    images: ['/images/port.jpg'],
  },
};

export const viewport = { themeColor: '#08202E' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
