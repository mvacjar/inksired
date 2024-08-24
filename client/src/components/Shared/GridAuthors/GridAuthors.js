import { Separator } from '../Separator';
import styles from './gridAuthors.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { GridBooks, Label } from '@/components/Shared';
import { map } from 'lodash';
import { CalcDiscountPrice } from '@/utils';

export function GridAuthors(props) {
  const { authors } = props;
  console.log('Authors en GridAuthors:', authors);

  return (
    <section className={styles.authorContainer}>
      {map(authors, (author) => {
        console.log('Autor:', author);
        return (
          <article key={author.id} className={styles.authorContainer}>
            <div className={styles.namecontainer}>
              <h1 className={styles.name}>{author.attributes.name_author}</h1>
            </div>
            <div className={styles.titleBookscontainer}>
              <h2 className={styles.titleBooks}>Author's Books</h2>
            </div>

            <section className={styles.booksContainer}>
              {map(author.attributes.books.data, (book, index) => {
                const originalPrice = book.attributes.price;
                const discount = book.attributes.discount;
                const finalPrice = CalcDiscountPrice(originalPrice, discount);
                console.log('Libro:', book);
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
            </section>
          </article>
        );
      })}
    </section>
  );
}
