import { Book, Author } from '@/api';

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

  return {
    props: {
      books: responseBooks.data,
      booksPagination: responseBooks.meta.pagination,
      searchText: s,
      authors: responseAuthors.data,
      authorsPagination: responseAuthors.meta.pagination,
    },
  };
}
