import styles from './footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <section className={styles.footerWrapper}>
        <div className={styles.titleContainer}>
          <Image
            src='/images/logo_light.svg'
            width={156}
            height={79}
            alt='logo'
            className={styles.title}
          />
          <span className={styles.line}></span>
        </div>
        <section className={styles.footerContainer}>
          <article className={styles.linksContainer}>
            <Link href='#'>Conditions and Terms</Link>
            <Link href='#'>Privacy Policy</Link>
            <Link href='#'>Contact</Link>
            <Link href='#'>FAQS</Link>
          </article>
          <article className={styles.iconsContainer}>
            <Link
              href='https://github.com/mvacjar'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/images/github.png'
                width={40}
                height={40}
                alt='github'
              />
            </Link>
            <Link
              href='https://www.linkedin.com/in/mvacjar/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src='/images/linkedin.png'
                width={40}
                height={40}
                alt='linkdein'
              />
            </Link>
          </article>
        </section>
        <div className={styles.linesContainer}>
          <span className={styles.line}></span>

          <h3 className={styles.signed}>Coded with 🦾🤎 by Mvacjar</h3>
        </div>
      </section>
    </>
  );
}
