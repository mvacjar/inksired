import { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import styles from './hamburgerMenu.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function HamburgerMenu() {
  const { logout } = useAuth();
  const [openMenu, setOpenMenu] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!openMenu && menuRef.current) {
      menuRef.current.style.display = 'none';
    }
  }, []);

  useEffect(() => {
    const menu = menuRef.current;

    if (openMenu) {
      menu.style.display = 'block';
    } else {
      const handleAnimationEnd = () => {
        if (!openMenu) {
          menu.style.display = 'none';
        }
      };
      menu.addEventListener('animationend', handleAnimationEnd);
      return () => {
        menu.removeEventListener('animationend', handleAnimationEnd);
      };
    }
  }, [openMenu]);

  const toggleMenu = () => {
    setShouldAnimate(true);
    setOpenMenu((prevOpenMenu) => !prevOpenMenu);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <Image
        src='/images/logo.svg'
        width={45}
        height={45}
        alt='icon-menu'
        className={`${styles.logo} ${
          shouldAnimate && (openMenu ? styles.spinLeft : styles.spinRight)
        }`}
        onClick={toggleMenu}
      />

      <nav
        ref={menuRef}
        className={`${styles.dropdownMenu} ${
          shouldAnimate && (openMenu ? styles.slideRight : styles.slideLeft)
        }`}
      >
        <section className={styles.menuContainer}>
          <Link href='#' className={styles.linkTop}>
            Profile
          </Link>
          <span className={styles.line}></span>
          <Link href='#' className={styles.link}>
            Contact
          </Link>
          <span className={styles.line}></span>
          <Link
            href='/join/sign-in'
            className={styles.linkBottom}
            onClick={logout}
          >
            Logout
          </Link>
          <span className={styles.line}></span>
        </section>
      </nav>
    </div>
  );
}
