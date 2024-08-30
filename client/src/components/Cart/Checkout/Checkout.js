import Basket from './Basket/Basket';
import Resume from './Summary/Summary';
import styles from './checkout.module.scss';

export function Checkout(props) {
  const { books } = props;
  return (
    <>
      <article className={styles.checkoutContainer}>
        <div className={styles.basket}>
          <Basket books={books} />
        </div>
        <div className={styles.resume}>
          <Resume />
        </div>
      </article>
    </>
  );
}
