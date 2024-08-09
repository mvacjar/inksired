import styles from './joinLayout.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';

export function JoinLayout(props) {
  const { children } = props;
  const { user } = useAuth();
  const router = useRouter();

  if (user) {
    router.push('/');
    return null;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src='/images/join-background.svg'
            alt='Join Background'
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.navJoin}>
          <Link href='#' className={styles.logoContainer}>
            <Image
              src='/images/logo_light.svg'
              alt='Logo light'
              width={150}
              height={78}
              className={styles.logo}
              priority
            />
          </Link>
          <Link href='#'>
            <Image
              src='/images/x.svg'
              alt='Logo light'
              width={17}
              height={17}
              className={styles.logoX}
              priority
            />
          </Link>
        </div>
      </div>
      <div className={styles.containerBlock}>
        <div className={styles.block}>{children}</div>
      </div>
    </>
  );
}
