import { CartLayout } from '@/layouts';
import { useRouter } from 'next/router';
import { useCart } from '@/hooks';
import { useEffect, useState } from 'react';
import { Book } from '@/api';
import { HeaderCart } from '@/layouts';

const bookCtrl = new Book();

export default function CartPage() {
  const [books, setBooks] = useState([]);
  const { cart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!cart || !Array.isArray(cart)) {
          setBooks([]);
          return;
        }

        const data = [];
        for (const item of cart) {
          const response = await bookCtrl.getBookById(item.id);
          data.push({ ...response.data, quantity: item.quantity });
        }
        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [cart]);

  return (
    <div>
      <CartLayout books={books} />
    </div>
  );
}
