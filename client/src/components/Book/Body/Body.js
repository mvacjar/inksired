import styles from './body.module.scss';
import Image from 'next/image';
import { Label } from '@/components/Shared';
import { WishListIcon } from '@/components/Shared';
import CheckIcon from '@mui/icons-material/Check';

export function Body(props) {
  const {
    cover,
    alt,
    bookId,
    sagaTitle,
    bookInfo,
    originalPrice,
    discount,
    finalPrice,
  } = props;

  const hasSagaNumber = bookInfo.order_in_saga !== 0;

  // console.log('props', props);

  return (
    <>
      <article
        id={`book-${bookId}`}
        className={styles.bookDescriptionContainer}
      >
        <div className={styles.bookContainer}>
          <div>
            <Image
              src={cover}
              alt={alt}
              title={alt}
              width={200}
              height={300}
              className={styles.bookCover}
            />
            {discount > 0 && (
              <Label.Discount className={styles.discount}>
                {`-${discount}%`}
              </Label.Discount>
            )}
            {bookInfo.discount > 0 && (
              <div className={styles.priceContainer}>
                {bookInfo.discount > 0 ? (
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
            )}
          </div>
          <div className={styles.btnContainer}>
            <div className={styles.iconHeart}>
              <WishListIcon bookId={bookId} />
            </div>
            <button className={styles.buyBtn}>Add to bag</button>
          </div>
        </div>

        <div className={styles.descriptionContainer}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>{bookInfo.title}</h2>
            <div className={styles.stock}>
              <CheckIcon fontSize='small' className={styles.checkIcon} /> In
              stock
            </div>
          </div>
          <p className={styles.author}>
            {bookInfo.authors.data[0].attributes.name_author}
          </p>
          <div className={styles.sagaContainer}>
            <div className={styles.saga}>{sagaTitle}</div>
            <p className={styles.sagaOrder}>
              {hasSagaNumber ? `#${bookInfo.order_in_saga}` : ''}
            </p>
          </div>

          <p className={styles.synopsis}>{bookInfo.synopsis}</p>
          <div className={styles.genresContainer}>
            {bookInfo.literary_genres.data.map((genre) => (
              <p key={genre.id} className={styles.genres}>
                #{genre.attributes.title}{' '}
              </p>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
