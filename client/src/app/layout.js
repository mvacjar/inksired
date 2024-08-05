import '../scss/globals.scss';

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
