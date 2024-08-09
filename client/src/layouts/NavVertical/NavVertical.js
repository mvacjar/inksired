import styles from './navVertical.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.menuContainer}>
          <div className={styles.logoContainer}>
            <Link href='/menu'>
              <Image
                src='/images/logo.svg'
                width={45}
                height={45}
                className={styles.logo}
              />
            </Link>
          </div>
          <div className={styles.linksContainer}>
            <Link href='/profile' className={styles.links}>
              <Image
                src='/images/home.svg'
                width={35}
                height={35}
                className={styles.link}
              />
            </Link>
            <Link href='/bookshelf'>
              <Image
                src='/images/shelf.svg'
                width={35}
                height={35}
                className={styles.link}
              />
            </Link>
            <Link href='/calification'>
              <Image
                src='/images/star.svg'
                width={35}
                height={35}
                className={styles.link}
              />
            </Link>
            <Link href='/forum'>
              <Image
                src='/images/forum.png'
                width={35}
                height={40}
                className={styles.link}
              />
            </Link>
          </div>
          <div className={styles.titleNavContainer}>
            <Link href='/home'>
              <Image
                src='/images/logo_dark_nospace.svg'
                width={120}
                height={120}
                className={styles.titleNav}
              />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
