import styles from './addressBox.module.scss';
import Image from 'next/image';

export function AddressBox(props) {
  const { addressId, address } = props;
  return (
    <>
      <article className={styles.boxWrapper}>
        <section className={styles.boxContainer}>
          <h3 className={styles.text}>{address.title}</h3>
          <p className={styles.text}>{address.address}</p>
          <p className={styles.text}>
            {address.city}, {address.country}
          </p>
          <p className={styles.text}>{address.postal_code}</p>
          <p className={styles.text}>{address.telephone}</p>
        </section>
        <section className={styles.iconsContainer}>
          <Image
            src='/images/pen.svg'
            alt='Edit'
            width={35}
            height={35}
            className={styles.iconEdit}
          />
          <Image
            src='/images/x.svg'
            alt='Delete'
            width={35}
            height={35}
            className={styles.iconDelete}
          />
        </section>
      </article>
    </>
  );
}
