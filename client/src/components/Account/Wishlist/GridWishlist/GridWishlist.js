import Link from 'next/link';
import Image from 'next/image';
import { map } from 'lodash';
import styles from './gridWishlist.module.scss';
import { Label, WishListIcon } from '@/components/Shared';
import { CalcDiscountPrice } from '@/utils';

export function GridWishlist(props) {
  const { wishlist, onReload } = props;

  return (
    <section className={styles.gridContainer}>
      {map(wishlist, (item) => {
        const book = item.attributes.book.data;

        const originalPrice = book.attributes.price;
        const discount = book.attributes.discount;
        const finalPrice = CalcDiscountPrice(originalPrice, discount);

        return (
          <div key={book.id} className={styles.bookContainer}>
            <div className={styles.bookLinkContainer}>
              <Link
                href={`/book/${book.attributes.slug_title}`}
                className={styles.bookLink}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={book.attributes.cover.data.attributes.url}
                    alt={`Image ${item.id + 1}`}
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
              <div className={styles.iconHeartContainer}>
                <WishListIcon bookId={book.id} removeCallBack={onReload} />
              </div>
            </div>
            <div className={styles.infoContainer}>
              <h2 className={styles.titleBook}>{book.attributes.title}</h2>
              <h2 className={styles.authorBook}>{book.attributes.author}</h2>
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
    </section>
  );
}
