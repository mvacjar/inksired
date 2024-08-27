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

  // Hide navbar on scroll

  // const handleScroll = () => {
  //   if (typeof window !== 'undefined') {
  //     if (window.scrollY > lastScrollY && window.scrollY > 10) {
  //       setHidden(true);
  //     } else {
  //       setHidden(false);
  //     }
  //     setLastScrollY(window.scrollY);
  //   }
  // };

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('scroll', handleScroll);

  //     return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //     };
  //   }
  // }, [lastScrollY]);

  // Routing for icons

  const toCart = () => {
    router.push('/cart');
  };

  const toLogin = () => {
    router.push('/join/sign-in');
  };

  const toSignUp = () => {
    router.push('/join/sign-up');
  };

  // Search bar functionality

  useEffect(() => {
    setSearchValue(router.query.s || '');
  }, [router.query]);

  const handleSearchOnChange = (e) => setSearchValue(e.target.value);

  const handleClearInput = (e) => {
    e.preventDefault();
    setSearchValue('');
  };

  const handleOnChange = (e) => {
    handleSearchOnChange(e);
  };

  // Clean search input and redirect to search page

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

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.imageWrapper}>
          <div className={styles.narbarWrapper}>
            <div className={styles.narbarContainer}>
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
                  <div className={styles.searchIconWrapper}>
                    <div className={styles.searchIconContainer}>
                      <Image
                        src='/images/xBlue.svg'
                        width={20}
                        height={20}
                        alt='clear-icon'
                        className={styles.xIcon}
                        onClick={handleClearInput}
                        title='Delete'
                      />
                      <button type='submit' className={styles.searchButton}>
                        <Image
                          src='/images/search.svg'
                          width={21}
                          height={21}
                          alt='search-icon'
                          className={styles.searchIcon}
                          title='Search'
                        />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className={styles.cartIconContainer}>
                {user ? (
                  <Image
                    src='/images/cart.svg'
                    width={45}
                    height={45}
                    alt='cart-icon'
                    className={styles.cartIcon}
                    onClick={toCart}
                    title='Shopping Cart'
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
          </div>
        </div>
      </nav>
    </>
  );
}
