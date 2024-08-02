import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Inksired',
  description: 'Where the characters come to life',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <link rel='icon' href='/favicon.ico' />

      <body>{children}</body>
    </html>
  );
}
