import '../../scss/globals.scss';

export const metadata = {
  title: 'Inksired',
  description: 'Where the characters come to life',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' />
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
      </head>
      <body>{children}</body>
    </html>
  );
}
