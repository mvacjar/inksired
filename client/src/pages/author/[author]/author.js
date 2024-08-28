import styles from './author.module.scss';
import { BasicLayout } from '@/layouts';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Label, Separator } from '@/components/Shared';
import { map, groupBy, partition } from 'lodash';
import { CalcDiscountPrice } from '@/utils';
import { Author } from '@/components/HomeComponents/Author';

export default function AuthorPage(props) {
  const { author } = props;

  return (
    <>
      <div className={styles.bodyBook}>
        <BasicLayout />
        <Separator height={150} />
        <div className={styles.bodyContainer}>
          <Author author={author} />
        </div>
        <Separator height={50} />
        <div className={styles.footerContainer}>
          <Footer />
        </div>
        <Separator height={50} />
      </div>
    </>
  );
}
