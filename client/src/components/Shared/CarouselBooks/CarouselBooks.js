import styles from './carouselBooks.module.scss';
import { Book } from '@/api';
import { useEffect, useState, useRef } from 'react';
import { CalcDiscountPrice } from '@/utils';
import { Label } from '@/components/Shared';
import { map } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { WishListIcon } from '@/components/Shared';

const book = new Book();

export function CarouselBooks({
  title,
  literaryGenresId,
  limit,
  genreId,
  onReload,
}) {
  const [booksByGenre, setBooksByGenre] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
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
      setShowRightArrow(scrollLeft < maxScrollLeft - 1);
    };

    const updateArrowVisibility = () => {
      const carousel = carouselRef.current;
      if (carousel) {
        const isScrollable = carousel.scrollWidth > carousel.clientWidth;
        setShowRightArrow(isScrollable);
        handleScroll();
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      updateArrowVisibility();
    }

    window.addEventListener('resize', updateArrowVisibility);

    return () => {
      if (carousel) {
        carousel.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', updateArrowVisibility);
    };
  }, []);

  return (
    <>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.booksWrapper}>
        <div className={styles.booksContent}>
          <div
            className={`${styles.leftArrowWrapper} ${
              showLeftArrow ? styles.show : ''
            }`}
          >
            <div className={styles.leftArrowContainer}>
              <ArrowBackIosIcon
                sx={{ color: '#2d2d2d', fontSize: 25 }}
                className={styles.leftArrow}
              />
            </div>
          </div>
          <div className={styles.carouselItems} ref={carouselRef}>
            {map(
              booksByGenre.filter((book) =>
                book.attributes.literary_genres.data.some(
                  (genre) => genre.id === genreId
                )
              ),
              (book, index) => {
                const originalPrice = book.attributes.price;
                const discount = book.attributes.discount;
                const finalPrice = CalcDiscountPrice(originalPrice, discount);
                return (
                  <div
                    key={book.id}
                    onClick={() => handleImageClick(index)}
                    className={styles.bookContainer}
                  >
                    <div className={styles.heartContainer}>
                      <Link
                        href={`/${book.attributes.slug_title}`}
                        className={styles.book}
                      >
                        <div className={styles.imageContainer}>
                          <Image
                            src={book.attributes.cover.data.attributes.url}
                            alt={`Image ${index + 1}`}
                            width={200}
                            height={300}
                            className={styles.bookCover}
                          />
                          {discount > 0 && (
                            <Label.Discount className={styles.discount}>
                              {`-${discount}%`}
                            </Label.Discount>
                          )}
                        </div>
                      </Link>
                      <div className={styles.iconHeart}>
                        <WishListIcon
                          bookId={book.id}
                          removeCallBack={onReload}
                        />
                      </div>
                    </div>
                    <div className={styles.infoContainer}>
                      <h2 className={styles.titleBook}>
                        {book.attributes.title}
                      </h2>
                      <h2 className={styles.authorBook}>
                        {book.attributes.author}
                      </h2>
                      <div className={styles.priceContainer}>
                        {discount > 0 ? (
                          <>
                            <span className={styles.originalPrice}>
                              {originalPrice.toFixed(2)}€
                            </span>
                            <span className={styles.discountedPrice}>
                              {finalPrice.toFixed(2)}€
                            </span>
                          </>
                        ) : (
                          <span className={styles.regularPrice}>
                            {originalPrice.toFixed(2)}€
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <div
            className={`${styles.rightArrowWrapper} ${
              showRightArrow ? styles.show : ''
            }`}
          >
            <div className={styles.rightArrowContainer}>
              <ArrowForwardIosIcon
                sx={{ color: '#2d2d2d', fontSize: 25 }}
                className={styles.rightArrow}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
