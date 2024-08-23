import styles from './home.module.scss';
import Head from 'next/head';
import { BasicLayout } from '@/layouts';
import CarouselGenres from '@/components/CarouselGenres/CarouselGenres';
import {
  Separator,
  BarInfo,
  CarouselBooks,
  BannerAd,
  TitleWeb,
} from '@/components/Shared';
import { LastBookPublished } from '@/components/Home/LastBookPublished';
import { ObentoBooks } from '@/components/Home/ObentoBooks';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Inksired</title>
        <meta name='description' content='Where characters come to life' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.bodyContainer}>
        <BasicLayout />

        <article className={styles.mainContainer}>
          <Separator height={130} />
          <section className={styles.carouselContainer}>
            <CarouselGenres />
          </section>

          <Separator height={50} />
          <section className={styles.lastBookPublishedContainer}>
            <LastBookPublished />
          </section>
          <Separator height={100} />

          <section className={styles.lastBookPublishedContainer}>
            <ObentoBooks title={`Read the latest!`} />
          </section>
          <Separator height={100} />

          <section className={styles.bannerAdContainer}>
            <BannerAd
              title='Register now and get a discount!'
              subtitle='Get a notebook for free ✨'
              btnTitle='Sign up'
              btnLink='/account'
              image='/images/imgAd.png'
            />
          </section>
          <Separator height={100} />

          <section className={styles.carouselBooksContainer}>
            <CarouselBooks genreId={2} title='Latest Fantasy Books' />
          </section>
          <Separator height={100} />

          <section className={styles.carouselBooksContainer}>
            <CarouselBooks genreId={8} title='Latest Enemy to Lover Books' />
          </section>
          <Separator height={100} />

          <section className={styles.barInfoContainer}>
            <BarInfo />
          </section>
          <Separator height={100} />

          <section className={styles.footerContainer}>
            <Footer />
          </section>
        </article>
      </main>
    </>
  );
}
