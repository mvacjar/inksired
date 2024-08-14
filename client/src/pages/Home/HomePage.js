import styles from './home.module.scss';
import Head from 'next/head';
import NavVertical from '@/components/Navbars/NavVertical/NavVertical';
import NavHorizontal from '@/components/Navbars/NavHorizontal/NavHorizontal';
import CarouselGenres from '@/components/CarouselGenres/CarouselGenres';
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

      <main className={styles.body}>
        <NavVertical />
        <NavHorizontal />
        <section>
          <article className={styles.articleCarousel}>
            <CarouselGenres />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            iure repellat molestiae magni suscipit nihil dolore excepturi
            debitis atque, consequatur est tempore incidunt tenetur id,
            veritatis eveniet temporibus rerum cupiditate. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Mollitia iure repellat molestiae
            magni suscipit nihil dolore excepturi debitis atque, consequatur est
            tempore incidunt tenetur id, veritatis eveniet temporibus rerum
            cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia iure repellat molestiae magni suscipit nihil dolore
            excepturi debitis atque, consequatur est tempore incidunt tenetur
            id, veritatis eveniet temporibus rerum cupiditate. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Mollitia iure repellat
            molestiae magni suscipit nihil dolore excepturi debitis atque,
            consequatur est tempore incidunt tenetur id, veritatis eveniet
            temporibus rerum cupiditate. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Mollitia iure repellat molestiae magni suscipit
            nihil dolore excepturi debitis atque, consequatur est tempore
            incidunt tenetur id, veritatis eveniet temporibus rerum cupiditate.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            iure repellat molestiae magni suscipit nihil dolore excepturi
            debitis atque, consequatur est tempore incidunt tenetur id,
            veritatis eveniet temporibus rerum cupiditate. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Mollitia iure repellat molestiae
            magni suscipit nihil dolore excepturi debitis atque, consequatur est
            tempore incidunt tenetur id, veritatis eveniet temporibus rerum
            cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia iure repellat molestiae magni suscipit nihil dolore
            excepturi debitis atque, consequatur est tempore incidunt tenetur
            id, veritatis eveniet temporibus rerum cupiditate. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Mollitia iure repellat
            molestiae magni suscipit nihil dolore excepturi debitis atque,
            consequatur est tempore incidunt tenetur id, veritatis eveniet
            temporibus rerum cupiditate. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Mollitia iure repellat molestiae magni suscipit
            nihil dolore excepturi debitis atque, consequatur est tempore
            incidunt tenetur id, veritatis eveniet temporibus rerum cupiditate.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            iure repellat molestiae magni suscipit nihil dolore excepturi
            debitis atque, consequatur est tempore incidunt tenetur id,
            veritatis eveniet temporibus rerum cupiditate. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Mollitia iure repellat molestiae
            magni suscipit nihil dolore excepturi debitis atque, consequatur est
            tempore incidunt tenetur id, veritatis eveniet temporibus rerum
            cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia iure repellat molestiae magni suscipit nihil dolore
            excepturi debitis atque, consequatur est tempore incidunt tenetur
            id, veritatis eveniet temporibus rerum cupiditate. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Mollitia iure repellat
            molestiae magni suscipit nihil dolore excepturi debitis atque,
            consequatur est tempore incidunt tenetur id, veritatis eveniet
            temporibus rerum cupiditate. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Mollitia iure repellat molestiae magni suscipit
            nihil dolore excepturi debitis atque, consequatur est tempore
            incidunt tenetur id, veritatis eveniet temporibus rerum cupiditate.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            iure repellat molestiae magni suscipit nihil dolore excepturi
            debitis atque, consequatur est tempore incidunt tenetur id,
            veritatis eveniet temporibus rerum cupiditate. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Mollitia iure repellat molestiae
            magni suscipit nihil dolore excepturi debitis atque, consequatur est
            tempore incidunt tenetur id, veritatis eveniet temporibus rerum
            cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia iure repellat molestiae magni suscipit nihil dolore
            excepturi debitis atque, consequatur est tempore incidunt tenetur
            id, veritatis eveniet temporibus rerum cupiditate. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Mollitia iure repellat
            molestiae magni suscipit nihil dolore excepturi debitis atque,
            consequatur est tempore incidunt tenetur id, veritatis eveniet
            temporibus rerum cupiditate. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Mollitia iure repellat molestiae magni suscipit
            nihil dolore excepturi debitis atque, consequatur est tempore
            incidunt tenetur id, veritatis eveniet temporibus rerum cupiditate.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            iure repellat molestiae magni suscipit nihil dolore excepturi
            debitis atque, consequatur est tempore incidunt tenetur id,
            veritatis eveniet temporibus rerum cupiditate. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Mollitia iure repellat molestiae
            magni suscipit nihil dolore excepturi debitis atque, consequatur est
            tempore incidunt tenetur id, veritatis eveniet temporibus rerum
            cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia iure repellat molestiae magni suscipit nihil dolore
            excepturi debitis atque, consequatur est tempore incidunt tenetur
            id, veritatis eveniet temporibus rerum cupiditate. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Mollitia iure repellat
            molestiae magni suscipit nihil dolore excepturi debitis atque,
            consequatur est tempore incidunt tenetur id, veritatis eveniet
            temporibus rerum cupiditate. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Mollitia iure repellat molestiae magni suscipit
            nihil dolore excepturi debitis atque, consequatur est tempore
            incidunt tenetur
            <Footer />
          </article>
        </section>
      </main>
    </>
  );
}
