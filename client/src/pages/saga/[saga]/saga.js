import styles from './saga.module.scss';
import { BasicLayout } from '@/layouts';
import { Separator } from '@/components/Shared';
import Footer from '@/components/Footer/Footer';

export default function SagasPage(props) {
  console.log('props', props);
  return (
    <>
      <div className={styles.bodyBook}>
        <BasicLayout />
        <Separator height={150} />
        <div className={styles.bodyContainer}></div>
        <Separator height={50} />
        <div className={styles.footerContainer}>
          <Footer />
        </div>
        <Separator height={50} />
      </div>
    </>
  );
}
