import { useState, useRef, useEffect } from 'react';
import styles from './hamburgerMenu.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function HamburgerMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const menu = menuRef.current;

    const handleAnimationEnd = () => {
      if (!openMenu) {
        menu.style.display = 'none';
      }
    };

    menu.addEventListener('animationend', handleAnimationEnd);

    return () => {
      menu.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [openMenu]);

  useEffect(() => {
    if (openMenu) {
      menuRef.current.style.display = 'block';
    }
  }, [openMenu]);

  return (
    <div className={styles.hamburgerMenu}>
      <Image
        src='/images/logo.svg'
        width={45}
        height={45}
        alt='icon-menu'
        className={`${styles.logo} ${
          openMenu ? styles.spinRight : styles.spinLeft
        }`}
        onClick={toggleMenu}
      />

      <nav
        ref={menuRef}
        className={`${styles.dropdownMenu} ${
          openMenu ? styles.slideRight : styles.slideLeft
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
          <Link href='' className={styles.linkBottom}>
            Logout
          </Link>
          <span className={styles.line}></span>
        </section>
      </nav>
    </div>
  );
}
