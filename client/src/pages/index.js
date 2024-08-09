import Navbar from '@/layouts/NavVertical/NavVertical';
import NavHorizontal from '@/layouts/NavHorizontal/NavHorizontal';
import Head from 'next/head';
import { useAuth } from '@/hooks/useAuth';

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <>
      <Head>
        <title>Inksired</title>
        <meta name='description' content='Where characters come to life' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Navbar />
        <NavHorizontal />
      </main>
    </>
  );
}
