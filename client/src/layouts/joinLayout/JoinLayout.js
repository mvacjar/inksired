import styles from './joinLayout.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from 'semantic-ui-react';

export function JoinLayout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <Link href='/'>
            <Image
              src='/images/logo_light.svg'
              alt='Logo light'
              width={150}
              height={78}
            />
          </Link>
          <Link href='/'>
            <Icon name='close' size='large' style={{ color: '#2D2D2D' }} />
          </Link>
        </div>
        <div className={styles.containerBlocks}>
          <div className={styles.blockLeft}>{children}</div>
        </div>
        <div className={styles.blockRight}></div>
      </div>
    </>
  );
}
