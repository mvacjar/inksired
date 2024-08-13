import styles from './carouselGenres.module.scss';
import { map } from 'lodash';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { LiteraryGenres } from '@/api';

const genresCtrl = new LiteraryGenres();

export default function CarouselGenres(props) {
  const { isOpenSearch } = props;
  const [genres, setGenres] = useState(null);
  console.log('genres', genres);

  useEffect(() => {
    (async () => {
      try {
        const response = await genresCtrl.getAll();
        setGenres(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <h1 className={styles.titleSection}>Literary Genres</h1>
      <section className={styles.carousel}>
        <div className={styles.carouselItems}>
          {map(genres, (genre) => (
            <Link
              key={genre.id}
              href={`/genres/${genre.attributes.slug_genres}`}
              className={styles.carouselItem}
            >
              {genre.attributes.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
