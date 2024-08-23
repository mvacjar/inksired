import styles from './carouselBooks.module.scss';
import { Book } from '@/api';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const book = new Book();

export function CarouselBooks({ title, literaryGenresId, limit, genreId }) {
  const [booksByGenre, setBooksByGenre] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const carouselRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await book.getLatestBooks({ limit, literaryGenresId });
        setBooksByGenre(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [limit, literaryGenresId]);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const carousel = carouselRef.current;
      const scrollLeft = carousel.scrollLeft;
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < maxScrollLeft);
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.booksWrapper}>
        <div className={styles.booksContent}>
          {showLeftArrow && (
            <div className={styles.leftArrowWrapper}>
              <div className={styles.leftArrowContainer}>
                <ArrowBackIosIcon
                  sx={{ color: '#2d2d2d', fontSize: 25 }}
                  className={styles.leftArrow}
                />
              </div>
            </div>
          )}
          <div className={styles.carouselItems} ref={carouselRef}>
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
          {showRightArrow && (
            <div className={styles.rightArrowWrapper}>
              <div className={styles.rightArrowContainer}>
                <ArrowForwardIosIcon
                  sx={{ color: '#2d2d2d', fontSize: 25 }}
                  className={styles.rightArrow}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
