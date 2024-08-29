import styles from './basket.module.scss';
import { map } from 'lodash';
import Image from 'next/image';
import { CalcDiscountPrice } from '@/utils';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Basket(props) {
  const { books } = props;

  return (
    <div className={styles.basketContainer}>
      div<h1>Your bag</h1>
      <div className={styles.basketBooksList}>
        {map(books, (book) => {
          const { attributes } = book;
          const coverUrl = attributes?.cover?.data?.attributes?.url || '';
          const title = attributes?.title || 'Unknown Title';
          const authors =
            attributes.authors?.data?.attributes?.name_author ??
            'Unknown Author';

          const saga = attributes?.sagas?.data?.attributes?.saga_title || '';
          const orderSaga = attributes?.order_in_saga || '';

          const originalPrice = book.attributes.price;
          const discount = book.attributes.discount;
          const finalPrice = CalcDiscountPrice(originalPrice, discount);

          return (
            <div className={styles.basketBooks} key={book.id}>
              <div className={styles.basketBooksCover}>
                {coverUrl && (
                  <Image
                    src={coverUrl}
                    alt={title}
                    width={200}
                    height={300}
                    className={styles.bookCover}
                  />
                )}
              </div>
              <div className={styles.bookInfoWrapper}>
                <div className={styles.booksInfo}>
                  <h3 className={styles.title}>{title}</h3>
                  <div>{authors}</div>
                  <div className={styles.sagaContainer}>
                    <div className={styles.saga}>
                      {saga}{' '}
                      <span className={styles.sagaOrder}>#{orderSaga}</span>
                    </div>
                  </div>
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
              <div className={styles.trash}>
                <DeleteIcon />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
