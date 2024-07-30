import Head from 'next/head';

export const metadata = {
  title: 'Inksired',
  description: 'Where the characters come to life',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>{children}</body>
    </html>
  );
}
