import styles from './joinLayout.module.scss';
import { Icon } from 'semantic-ui-react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';

export function JoinLayout({ children }) {
  const { user } = useAuth();
  const router = useRouter();
  if (user) {
    router.push('/');
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
          <Link href='/' className={styles.logoContainer}>
            <Image
              src='/images/logo_light_nospace.svg'
              alt='Logo light'
              width={150}
              height={78}
              className={styles.logo}
              priority={true}
            />
          </Link>
          <Link href='/'>
            <Icon name='close' size='large' style={{ color: '#2D2D2D' }} />
          </Link>
        </div>
      </div>
      <div className={styles.containerBlock}>
        <div className={styles.block}>{children}</div>
      </div>
    </>
  );
}
