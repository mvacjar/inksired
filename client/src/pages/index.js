import Head from 'next/head';
import { Button } from 'semantic-ui-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inksired</title>
        <meta name='description' content='Where characters come to life' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>Inksired</h1>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
      </main>
    </>
  );
}
