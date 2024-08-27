import styles from './home.module.scss';
import Head from 'next/head';
import { useAuth } from '@/hooks';
import { BasicLayout } from '@/layouts';
import CarouselGenres from '@/components/CarouselGenres/CarouselGenres';
import {
  Separator,
  BarInfo,
  CarouselBooks,
  BannerAd,
} from '@/components/Shared';
import { NoveltyBooks } from '@/components/Home/NoveltyBooks';
import { ObentoBooks } from '@/components/Home/ObentoBooks';
import Footer from '@/components/Footer/Footer';

export default function HomePage() {
  const { user } = useAuth();

  const titleBanner = user
    ? 'Send us your best cover for a fantasy book and...'
    : 'Register now and get a discount!';
  const subtitleBanner = user
    ? 'Get 5 books from your wishlist for free!✨'
    : 'Get a notebook for free! ✨';
  const btnTitleBanner = user ? 'Participate' : 'Sign up';
  const btnLinkBanner = user ? '/account' : '/join/sign-up';

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
          <Separator height={150} />
          <section className={styles.carouselContainer}>
            <CarouselGenres />
          </section>

          <Separator height={50} />
          <section className={styles.noveltyContainer}>
            <NoveltyBooks />
          </section>
          <Separator height={100} />

          <section className={styles.obentoContainer}>
            <ObentoBooks title={`Read the latest!`} />
          </section>
          <Separator height={100} />

          <section className={styles.bannerAdContainer}>
            <BannerAd
              titleBanner={titleBanner}
              subtitleBanner={subtitleBanner}
              btnTitleBanner={btnTitleBanner}
              btnLinkBanner={btnLinkBanner}
              image='/images/imgAd.png'
            />
          </section>
          <Separator height={100} />

          <section className={styles.carouselBooksContainer}>
            <CarouselBooks genreId={2} title='Latest Fantasy Books' />
          </section>
          <Separator height={50} />

          <section className={styles.carouselBooksContainer}>
            <CarouselBooks genreId={16} title='Latest Thriller Books' />
          </section>
          <Separator height={50} />

          <section className={styles.barInfoContainer}>
            <BarInfo />
          </section>
          <Separator height={50} />

          <section className={styles.footerContainer}>
            <Footer />
          </section>
          <Separator height={50} />
        </article>
      </main>
    </>
  );
}
