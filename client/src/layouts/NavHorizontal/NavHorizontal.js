import styles from './navHorizontal.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function NavHorizontal() {
  return (
    <>
      <nav className={styles.navbar}>
        <form className={styles.searchForm}>
          <input
            type='text'
            className={styles.searchInput}
            placeholder='Search...'
          />
          <Link href='/search' className={styles.searchIconContainer}>
            <Image
              src='/images/loupe.svg'
              width={20}
              height={20}
              alt='loupe-icon'
              className={styles.searchIcon}
            />
          </Link>
        </form>
        <div className={styles.cartIconContainer}>
          <Image
            src='/images/cart.png'
            width={45}
            height={45}
            alt='cart-icon'
            className={styles.cartIcon}
          />
        </div>
      </nav>
    </>
  );
}
