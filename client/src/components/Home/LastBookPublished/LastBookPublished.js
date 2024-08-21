import styles from './lastBookPublished.module.scss';
import { useState, useEffect } from 'react';
import { Book } from '@/api';

import Image from 'next/image';
import Link from 'next/link';

const bookCtrl = new Book();

export function LastBookPublished() {
  const [saveLastBook, setSaveLastBook] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const response = await bookCtrl.getLastBookPublished();
        setSaveLastBook(response.data.slice(0, 3));
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!saveLastBook.length) return null;

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className={styles.background}>
        <div
          style={{
            width: '100vw',
            height: '80vh',
            position: 'absolute',
            zIndex: -1,
          }}
        >
          <Image
            src='/images/background.svg'
            alt='background'
            layout='fill'
            objectFit='cover'
            priority
          />
        </div>
        <div className={styles.titlePublished}>
          <h1 className={styles.titlePublished}>Novelty</h1>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.carousel}>
            <div className={styles.cards}>
              {saveLastBook.map((book, index) => {
                const isActive = index === activeIndex;
                const isPrev =
                  index ===
                  (activeIndex - 1 + saveLastBook.length) % saveLastBook.length;
                const isNext =
                  index === (activeIndex + 1) % saveLastBook.length;
                const isBehind = !isActive && !isPrev && !isNext;

                return (
                  <div
                    key={book.id}
                    className={`${styles.card} ${
                      isActive ? styles.active : ''
                    } ${isPrev ? styles.prev : ''} ${
                      isNext ? styles.next : ''
                    } ${isBehind ? styles.behind : ''}`}
                    onClick={() => handleImageClick(index)}
                  >
                    <div className={styles.coverContainer}>
                      <Image
                        src={book.attributes.cover.data.attributes.url}
                        alt={`Image ${index + 1}`}
                        layout='fill'
                        objectFit='cover'
                        className={styles.cover}
                      />
                    </div>
                    <Link href={`/books/${book.attributes.slug_title}`}>
                      <div className={styles.info}>
                        <h3 className={styles.titleCover}>
                          {book.attributes.title}
                        </h3>
                        <p className={styles.synopsis}>
                          {book.attributes.synopsis}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
