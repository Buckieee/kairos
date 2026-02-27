import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Kairos',
  description:
    'Kairos designs and implements high-leverage systems: AI automation, CRM architecture, brand execution, and growth infrastructure for startups and SMEs.',
  keywords: ['AI automation', 'CRM', 'digital studio', 'startup infrastructure', 'UK'],
  openGraph: {
    title: 'Kairos',
    description:
      'Systems that make your business run. AI automation, CRM architecture, brand execution, and growth infrastructure.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
