import styles from './paymentC.module.scss';
import { useEffect, useState } from 'react';
import { forEach } from 'lodash';
import { CalcDiscountPrice } from '@/utils';
import { CardElement } from '@stripe/react-stripe-js';

export function PaymentC(props) {
  const [totals, setTotals] = useState(null);
  const { books, addressSelected } = props;

  const cardStyles = {
    style: {
      base: {
        color: '#fffbef',
        fontSize: '1rem',
        '::placerholder': {
          color: '#fffbef',
        },
      },
    },
  };

  const deliveryPrice = 5.0;
  const formattedDeliveryPrice = parseFloat(deliveryPrice.toFixed(2));

  useEffect(() => {
    let totals = { original: 0, discount: 0, price: 0 };

    forEach(books, (book) => {
      const price = parseFloat(book.attributes.price) || 0;
      const discount = parseFloat(book.attributes.discount) || 0;
      const quantity = parseInt(book.quantity) || 0;
      const finalPrice = CalcDiscountPrice(price, discount);

      totals = {
        original: totals.original + price * quantity,
        discount: totals.discount + (price - finalPrice) * quantity,
        price: totals.price + formattedDeliveryPrice + finalPrice * quantity,
      };
    });

    setTotals(totals);
  }, [books]);

  if (!totals) return null;
  return (
    <>
      <section className={styles.sectionContainer}>
        {addressSelected && (
          <>
            <h2 className={styles.paymentTitle}>Payment</h2>
            <div className={styles.card}>
              <CardElement options={cardStyles} />
            </div>
          </>
        )}
      </section>
    </>
  );
}
