import styles from './lastBookPublished.module.scss';
import { useState, useEffect } from 'react';
import { Book } from '@/api';

const bookCtrl = new Book();

export function LastBookPublished() {
  const [saveLastBook, setSaveLastBook] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await bookCtrl.getLastBookPublished();
        setGame(response.data.slice(0, 5));
        setSaveLastBook(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!saveLastBook) return null;

  return <div>LastBookPublished</div>;
}
