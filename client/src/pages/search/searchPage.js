import styles from './searchPage.module.scss';
import { useEffect } from 'react';
import { size } from 'lodash';
import { useRouter } from 'next/router';
import { BasicLayout } from '@/layouts';
import {
  GridBooks,
  GridAuthors,
  Pagination,
  Separator,
} from '@/components/Shared';
import Footer from '@/components/Footer/Footer';

export default function searchPage(props) {
  const router = useRouter();
  const { books, authors, booksPagination, authorsPagination } = props;
  const { s: searchValue } = router.query;

  const hasResultBooks = size(books) > 0;
  const hasResultAuthors = size(authors) > 0;

  useEffect(() => {
    document.getElementById('searchBar').focus();
  }, []);

  return (
    <>
      <BasicLayout />
      <Separator height={100} />
      <div className={styles.containerBody}>
        {hasResultBooks ? (
          <>
            <GridBooks books={books} />
            <Separator height={50} />
            <div className={styles.container}>
              <Pagination
                totalPages={booksPagination.pageCount}
                defaultPage={booksPagination.currentPage}
              />
            </div>
          </>
        ) : hasResultAuthors ? (
          <>
            <GridAuthors authors={authors} />
            <Separator height={50} />
            <div className={styles.container}>
              <Pagination
                totalPages={authorsPagination.pageCount}
                defaultPage={authorsPagination.currentPage}
              />
            </div>
          </>
        ) : (
          <p className={styles.messageNotFound}>
            Ouch! We still don't have anything about it! Look for another thing!
            🤞
          </p>
        )}
      </div>
      <Separator height={50} />
      <div className={styles.container}>
        <Footer />
      </div>
      <Separator height={50} />
    </>
  );
}
