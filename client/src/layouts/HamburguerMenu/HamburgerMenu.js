import styles from './hamburgerMenu.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function HamburgerMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 500);
  };

  return (
    <>
      <div className={styles.hamburgerMenu}>
        <Image
          src='/images/logo.svg'
          width={45}
          height={45}
          alt='icon-menu'
          className={`${styles.logo} ${isSpinning ? styles.spin : ''}`}
          onClick={toggleMenu}
        />
        {openMenu && (
          <nav className={styles.dropdownMenu}>
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
        )}
      </div>
    </>
  );
}
