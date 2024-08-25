import { Book, Author, Saga } from '@/api';

export { default } from './searchPage';

export async function getServerSideProps(context) {
  const {
    query: { s, page = 1 },
  } = context;

  const bookCtrl = new Book();
  const responseBooks = await bookCtrl.searchBooks(s, page);
  console.log('Books:', responseBooks.data);

  const authorCtrl = new Author();
  const responseAuthors = await authorCtrl.searchAuthors(s, page);
  console.log('Authors:', responseAuthors.data);

  const sagaCtrl = new Saga();
  const responseSagas = await sagaCtrl.allSagas(page, s);
  console.log('Sagas:', responseSagas.data);

  return {
    props: {
      searchText: s,
      books: responseBooks.data,
      booksPagination: responseBooks.meta.pagination,
      authors: responseAuthors.data,
      authorsPagination: responseAuthors.meta.pagination,
      sagas: responseSagas.data,
      sagasPagination: responseSagas.meta.pagination,
    },
  };
}
