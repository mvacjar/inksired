import styles from './navVertical.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import HamburgerMenu from '@/layouts/HamburguerMenu/HamburgerMenu';

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.menuContainer}>
          <div className={styles.logoContainer}>
            <HamburgerMenu />
          </div>
          <div className={styles.linksContainer}>
            <Link href='/profile' className={styles.links}>
              <Image
                src='/images/home.svg'
                width={35}
                height={35}
                alt='icon-menu'
                className={styles.link}
              />
            </Link>
            <Link href='/bookshelf'>
              <Image
                src='/images/shelf.svg'
                width={35}
                height={35}
                alt='icon-menu'
                className={styles.link}
              />
            </Link>
            <Link href='/calification'>
              <Image
                src='/images/star.svg'
                width={35}
                height={35}
                alt='icon-menu'
                className={styles.link}
              />
            </Link>
            <Link href='/forum'>
              <Image
                src='/images/forum.png'
                width={35}
                height={40}
                alt='icon-menu'
                className={styles.link}
              />
            </Link>
          </div>
          <div className={styles.titleNavContainer}>
            <Link href='/home'>
              <Image
                src='/images/logo_dark.svg'
                width={120}
                height={120}
                alt='logo-menu'
                priority
                className={styles.titleNav}
              />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
