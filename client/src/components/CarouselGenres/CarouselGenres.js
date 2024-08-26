import styles from './carouselGenres.module.scss';
import { map } from 'lodash';
import Link from 'next/link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useEffect, useRef } from 'react';
import { LiteraryGenres } from '@/api';

const genresCtrl = new LiteraryGenres();

export default function CarouselGenres() {
  const [genres, setGenres] = useState(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const carouselRef = useRef(null);

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

  useEffect(() => {
    const handleScroll = () => {
      const carousel = carouselRef.current;
      const scrollLeft = carousel.scrollLeft;
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < maxScrollLeft);
    };

    const carousel = carouselRef.current;
    carousel.addEventListener('scroll', handleScroll);

    return () => {
      carousel.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.genresWrapper}>
        <div className={styles.genresContent}>
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
