import styles from './barInfo.module.scss';
import { map } from 'lodash';
import { data } from './BarInfo.data';
import Image from 'next/image';

export function BarInfo() {
  return (
    <>
      <article className={styles.article}>
        <section className={styles.section}>
          {map(data, (item) => {
            return (
              <div className={styles.infoContainer} key={item.icon}>
                <Image
                  src={item.src}
                  alt='Dragon delivery'
                  name={item.icon}
                  width={50}
                  height={50}
                  className={styles.icon}
                />
                <div className={styles.textContainer}>
                  <h5 className={styles.titleContainer}>{item.title}</h5>
                  <span className={styles.descriptionContainer}>
                    {item.description}
                  </span>
                </div>
              </div>
            );
          })}
        </section>
      </article>
    </>
  );
}
