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
            className={styles.title}
          />
          <span className={styles.line}></span>
        </div>
        <section className={styles.footerContainer}>
          <arcticle className={styles.linksContainer}>
            <Link href='#'>Conditions and Terms</Link>
            <Link href='#'>Privacy Policy</Link>
            <Link href='#'>Contact</Link>
            <Link href='#'>FAQS</Link>
          </arcticle>
          <article className={styles.iconsContainer}>
            <Link href='https://github.com/mvacjar' target='_blank'>
              <Image src='/images/github.png' width={40} height={40} />
            </Link>
            <Link href='https://www.linkedin.com/in/mvacjar/' target='_blank'>
              <Image src='/images/linkedin.png' width={40} height={40} />
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
