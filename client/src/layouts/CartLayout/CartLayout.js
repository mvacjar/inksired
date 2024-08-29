import { Separator } from '@/components/Shared';
import { BasicLayout, HeaderCart } from '@/layouts';
import Footer from '@/components/Footer/Footer';

export function CartLayout(props) {
  const { children, books } = props;

  return (
    <>
      <BasicLayout />
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
