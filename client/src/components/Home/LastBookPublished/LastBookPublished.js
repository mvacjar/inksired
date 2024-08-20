import styles from './lastBookPublished.module.scss';
import { useState, useEffect } from 'react';
import { Book } from '@/api';
import Image from 'next/image';

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

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <div className={styles.cards}>
          {saveLastBook.map((book, index) => {
            const isActive = index === activeIndex;
            const isPrev =
              index ===
              (activeIndex - 1 + saveLastBook.length) % saveLastBook.length;
            const isNext = index === (activeIndex + 1) % saveLastBook.length;
            const isBehind = !isActive && !isPrev && !isNext;

            return (
              <div
                key={book.id}
                className={`${styles.card} ${isActive ? styles.active : ''} ${
                  isPrev ? styles.prev : ''
                } ${isNext ? styles.next : ''} ${
                  isBehind ? styles.behind : ''
                }`}
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
                  <div className={styles.info}>
                    <h3 className={styles.title}>{book.attributes.title}</h3>
                    <p className={styles.author}>{book.attributes.synopsis}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
