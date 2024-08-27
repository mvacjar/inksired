import styles from './gridSagas.module.scss';
import { CalcDiscountPrice } from '@/utils';
import { Label, Separator } from '@/components/Shared';
import Image from 'next/image';
import Link from 'next/link';

export default function GridSagas({ sagas }) {
  console.log('Sagas en GridSagas:', sagas);

  return (
    <>
      {sagas &&
        sagas.map((saga, sagaIndex) => {
          console.log('Saga:', saga);

          const books = saga.attributes.books.data || [];

          return (
            <div
              key={`${saga.id}-${sagaIndex}`}
              className={styles.sagaContainer}
            >
              <div className={styles.infoTextContainer}>
                <h1 className={styles.sagaTitle}>
                  Saga: {saga.attributes.saga_title}
                </h1>
                <h3 className={styles.sagaAuthor}>{saga.attributes.author}</h3>
              </div>
              <Separator height={50} />
              <div className={styles.wrapper}>
                {books.map((book, bookIndex) => {
                  const { price: originalPrice, discount } = book.attributes;
                  const finalPrice = CalcDiscountPrice(originalPrice, discount);
                  const coverUrl = book.attributes.cover?.data?.attributes?.url;

                  return (
                    <div
                      key={`${book.id}-${bookIndex}`}
                      className={styles.bookContainer}
                    >
                      <Link
                        href={`/${book.attributes.slug_title}`}
                        className={styles.book}
                      >
                        <div className={styles.imageContainer}>
                          {coverUrl && (
                            <Image
                              src={coverUrl}
                              alt={`Image ${bookIndex + 1}`}
                              width={200}
                              height={300}
                              priority
                              className={styles.bookCover}
                            />
                          )}
                          {discount > 0 && (
                            <Label.Discount className={styles.discount}>
                              {`-${discount}%`}
                            </Label.Discount>
                          )}
                        </div>
                      </Link>
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
                })}
              </div>
            </div>
          );
        })}
    </>
  );
}
