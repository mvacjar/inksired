import { forEach } from 'lodash';
import { ENV, authFetch } from '@/utils';

export class Cart {
  add(bookId) {
    const books = this.getAll();
    const objectIndex = books.findIndex((book) => book.id === bookId);

    if (objectIndex < 0) {
      books.push({
        id: bookId,
        quantity: 1,
      });
    } else {
      const book = books[objectIndex];
      books[objectIndex].quantity = book.quantity + 1;
      console.log(books[objectIndex].quantity);
    }

    localStorage.setItem(ENV.CART, JSON.stringify(books));
  }

  getAll() {
    const response = localStorage.getItem(ENV.CART);

    if (!response) {
      return [];
    } else {
      return JSON.parse(response);
    }
  }

  count() {
    const response = this.getAll();
    let count = 0;

    forEach(response, (book) => {
      count += book.quantity;
    });

    return count;
  }
}
