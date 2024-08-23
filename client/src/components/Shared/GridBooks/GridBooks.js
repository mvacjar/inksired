import styles from './gridbooks.module.scss';
import { map } from 'lodash';
import { CalcDiscountPrice } from '@/utils';
import { Label } from '@/components/Shared';
import Image from 'next/image';
import Link from 'next/link';

export function GridBooks(props) {
  const { books } = props;

  return (
    <>
      <div className={styles.background}>
        <div style={{ zIndex: 1 }}>
          <Image
            src='/images/backgroundGrid.svg'
            alt='background'
            fill
            objectFit='cover'
            priority
            className={styles.backgroundImage}
          />
        </div>
      </div>
      <div className={styles.wrapper}>
        {map(books, (book, index) => {
          const originalPrice = book.attributes.price;
          const discount = book.attributes.discount;
          const finalPrice = CalcDiscountPrice(originalPrice, discount);

          return (
            <div key={book.id} className={styles.bookContainer}>
              <Link
                href={`/books/${book.attributes.slug_title}`}
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
              <div className={styles.infoContainer}>
                <h2 className={styles.titleBook}>{book.attributes.title}</h2>
                <h2 className={styles.authorBook}>{book.attributes.author}</h2>
                <div className={styles.priceContainer}>
                  {discount > 0 ? (
                    <>
                      <span className={styles.originalPrice}>
                        {originalPrice}€
                      </span>
                      <span className={styles.discountedPrice}>
                        {finalPrice}€
                      </span>
                    </>
                  ) : (
                    <span className={styles.regularPrice}>
                      {originalPrice}€
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
