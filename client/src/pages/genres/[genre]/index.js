import { LiteraryGenres, Book } from '@/api';
export { default } from './genrePage';

export async function getServerSideProps(context) {
  const { query, params } = context;
  const { page = 1 } = query;
  const { genre } = params;

  console.log('slug_genre:', genre);

  const genreCtrl = new LiteraryGenres();
  const responseGenre = await genreCtrl.getBySlug(genre);

  const bookCtrl = new Book();
  const responseBooks = await bookCtrl.getByGenreSlug(genre, page);
  console.log('responseBooks:', responseBooks);
  console.log('responseGenre:', responseGenre);

  return {
    props: {
      books: responseBooks.data,
      genres: responseGenre,
      pagination: responseBooks.meta.pagination,
    },
  };
}
