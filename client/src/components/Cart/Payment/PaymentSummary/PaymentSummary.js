import styles from './paymentSummary.module.scss';
import { useEffect, useState } from 'react';
import { forEach, map } from 'lodash';
import { CalcDiscountPrice } from '@/utils';
import { CardElement } from '@stripe/react-stripe-js';
import { useAuth, useCart } from '@/hooks';
import { Cart } from '@/api';

export function PaymentSumary(props) {
  const [total, setTotal] = useState(null);
  const { books, addressSelected } = props;
  const deliveryPrice = 5.0;
  const formattedDeliveryPrice = parseFloat(deliveryPrice.toFixed(2));

  const cardStyles = {
    style: {
      base: {
        color: '#fffbef',
        fontSize: '1rem',
        '::placeholder': {
          color: '#fffbef',
        },
      },
    },
  };

  useEffect(() => {
    let total = 0;

    forEach(books, (book) => {
      const price = CalcDiscountPrice(
        book.attributes.price,
        book.attributes.discount
      );
      total += price * book.quantity + formattedDeliveryPrice;
    });
    setTotal(total.toFixed(2));
  }, [books]);

  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.paymentTitle}>Payment</h2>
      <div className={styles.block}>
        <div className={styles.products}>
          {books.map((book) => (
            <div key={book.id} className={styles.product}>
              <div className={styles.infoContainer}>
                <p className={styles.title}>{book.attributes.title}</p>
                <p>{book.attributes.authors?.data?.attributes?.name_author}</p>
              </div>
              <div className={styles.infoProducts}>
                <span className={styles.quantity}>
                  {book.quantity > 0 && `${book.quantity}x`}
                </span>
                <div>
                  {CalcDiscountPrice(
                    book.attributes.price,
                    book.attributes.discount
                  )}
                  €
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.total}>
        <div className={styles.blockTotal}>
          <div className={styles.totalPrice}>
            <div className={styles.total}>Total: &nbsp;</div>
            <div className={styles.price}>{total}€</div>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <CardElement options={cardStyles} />
      </div>
    </section>
  );
}
