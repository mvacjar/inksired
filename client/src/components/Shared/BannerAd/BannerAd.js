import styles from './bannerAd.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export function BannerAd(props) {
  const { title, subtitle, btnTitle, btnLink, image } = props;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <Link href={btnLink} className={styles.btn}>
              {btnTitle}
            </Link>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={image}
              alt='Banner Ad'
              width={400}
              height={300}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </>
  );
}
