import Basket from './Basket/Basket';
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
          <h1>Resume</h1>
        </div>
      </article>
    </>
  );
}
