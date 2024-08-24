import { useState, useEffect } from 'react';
import styles from './navHorizontal.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';

export default function NavHorizontal() {
  const { user } = useAuth();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  // hide navbar on scroll

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 10) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY]);

  // routers

  const toCart = () => {
    router.push('/cart');
  };

  const toLogin = () => {
    router.push('/join/sign-in');
  };

  const toSignUp = () => {
    router.push('/join/sign-up');
  };

  // search functions

  useEffect(() => {
    setSearchValue(router.query.s || '');
  }, [router.query]);

  const handleSearchOnChange = (e) => setSearchValue(e.target.value);

  const handleClearInput = (e) => {
    e.preventDefault();
    setSearchValue('');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedValue = searchValue.trim();

    if (trimmedValue) {
      const capitalizedValue =
        trimmedValue.charAt(0).toUpperCase() + trimmedValue.slice(1);
      router.push({
        pathname: '/search',
        query: { s: capitalizedValue },
      });
    }
  };

  const handleOnChange = (e) => {
    handleSearchOnChange(e);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${hidden ? styles.hidden : ''}`}>
        <div className={styles.imageWrapper}>
          <Image
            src='/images/layer-horizontal.svg'
            alt='Join Background'
            fill
            priority
            style={{ objectFit: 'cover' }}
            className={styles.horizontalBackground}
          />
          <div className={styles.searchContainer}>
            <form className={styles.searchForm} onSubmit={handleSearch}>
              <input
                id='searchBar'
                type='text'
                className={styles.searchInput}
                placeholder='Search...'
                value={searchValue}
                onChange={handleOnChange}
              />
              <button type='submit' className={styles.searchIconContainer}>
                <div className={styles.iconsSearch}>
                  <Image
                    src='/images/x.svg'
                    width={18}
                    height={18}
                    alt='clear-icon'
                    className={styles.xIcon}
                    onClick={handleClearInput}
                  />
                  <Image
                    src='/images/loupe.svg'
                    width={21}
                    height={21}
                    alt='loupe-icon'
                    className={styles.searchIcon}
                  />
                </div>
              </button>
            </form>
          </div>
          <div className={styles.cartIconContainer}>
            {user ? (
              <Image
                src='/images/cart2.png'
                width={45}
                height={45}
                alt='cart-icon'
                className={styles.cartIcon}
                onClick={toCart}
              />
            ) : (
              <div className={styles.buttonsContainer}>
                <button className={styles.signInButton} onClick={toLogin}>
                  Sign In
                </button>
                <button className={styles.signUpButton} onClick={toSignUp}>
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
