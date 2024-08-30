import { Separator } from '@/components/Shared';
import Footer from '@/components/Footer/Footer';
import { NavCart } from '@/components/Navbars/Cart/NavCart';
import { HeaderCart } from '../HeaderCart';

export function CartLayout(props) {
  const { children, books } = props;

  return (
    <>
      <NavCart />
      <Separator height={200} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <HeaderCart books={books} />
      </div>
      <Separator height={100} />
      <div>{children}</div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Separator height={100} />
        <Footer />
      </div>
    </>
  );
}
