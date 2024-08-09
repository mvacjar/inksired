import { useState } from 'react';
import styles from './navHorizontal.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function NavHorizontal() {
  const [searchValue, setSearchValue] = useState('');

  const handleClearInput = (e) => {
    e.preventDefault();
    setSearchValue('');
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <nav className={styles.navbar}>
        <form className={styles.searchForm} onSubmit={handleSearch}>
          <input
            type='text'
            className={styles.searchInput}
            placeholder='Search...'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type='submit' className={styles.searchIconContainer}>
            <div className={styles.iconsSearch}>
              <Image
                src='/images/x.svg'
                width={17}
                height={17}
                alt='clear-icon'
                className={styles.xIcon}
                onClick={handleClearInput}
              />
              <Image
                src='/images/loupe.svg'
                width={20}
                height={20}
                alt='loupe-icon'
                className={styles.searchIcon}
              />
            </div>
          </button>
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
