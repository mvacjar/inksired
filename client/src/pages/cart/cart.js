import { CartLayout } from '@/layouts';
import { useRouter } from 'next/router';

export default function CartPage() {
  const { query } = useRouter();

  return (
    <div>
      <CartLayout />
    </div>
  );
}
