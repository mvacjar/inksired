import styles from './joinLayout.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

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
            <CloseTwoToneIcon style={{ fill: '#2D2D2D', fontSize: 30 }} />
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
