import styles from './carouselBooks.module.scss';
import { Book } from '@/api';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const book = new Book();

export function CarouselBooks({ title, literaryGenresId, limit, genreId }) {
  const [booksByGenre, setBooksByGenre] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const response = await book.getLatestBooks({ limit, literaryGenresId });
        setBooksByGenre(response.data);
        console.log('Latest Books:', response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [limit, literaryGenresId]);

  if (!booksByGenre.length) return null;

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.carouselContainer}>
          {booksByGenre
            .filter((book) =>
              book.attributes.literary_genres.data.some(
                (genre) => genre.id === genreId
              )
            )
            .map((book, index) => (
              <div
                key={book.id}
                onClick={() => handleImageClick(index)}
                className={styles.carouselItem}
              >
                <Link href={`/books/${book.attributes.slug_title}`}>
                  <Image
                    src={book.attributes.cover.data.attributes.url}
                    alt={`Image ${index + 1}`}
                    width={200}
                    height={300}
                    className={styles.bookCover}
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
