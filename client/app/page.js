import styles from '../styles/page.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inksired</title>
        <link rel='shortcut icon' href='../public/favicon.ico'></link>
      </Head>
      <main className={styles.main}>
        hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
        rerum in tempora porro numquam repudiandae quae, modi, maxime, error vel
        iure? Rem, itaque consequatur placeat nam facere laborum magni officia.
      </main>
    </>
  );
}
