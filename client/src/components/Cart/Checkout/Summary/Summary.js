import styles from './summary.module.scss';

export default function Summary() {
  return (
    <>
      <article className={styles.wrapperContainer}>
        <section className={styles.sectionContainer}>
          <h1 className={styles.titleComponent}>Summary</h1>
        </section>
      </article>
    </>
  );
}
