import styles from './obentoBooks.module.scss';
import { Book } from '@/api';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WishListIcon } from '@/components/Shared';

const book = new Book();

export function ObentoBooks(props) {
  const { title, limit = 10, literaryGenresId = null, bookId } = props;
  const [latestBooks, setLatestBooks] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const response = await book.obentoBooks({ limit, literaryGenresId });
        setLatestBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [limit, literaryGenresId]);

  if (!latestBooks) return null;

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.gridContainer}>
          {latestBooks.map((book, index) => (
            <div
              key={book.id}
              onClick={() => handleImageClick(index)}
              style={{ position: 'relative' }}
              className={styles[`image${index + 1}`]}
            >
              <div className={styles.heartContainer}>
                <Link href={`/book/${book.attributes.slug_title}`}>
                  <Image
                    src={book.attributes.cover.data.attributes.url}
                    alt={`Image ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className={styles[`image${index + 1}`]}
                  />
                </Link>
                <div className={styles.iconHeart}>
                  <WishListIcon bookId={bookId} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
