import InfoAccount from '@/components/Account/InfoAccount/InfoAccount';
import Footer from '@/components/Footer/Footer';
import { Separator } from '@/components/Shared';
import { BasicLayout } from '@/layouts';

export default function AccountPage() {
  return (
    <>
      <BasicLayout />
      <Separator height={150} />
      <InfoAccount />
      <Separator height={50} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Footer />
      </div>
      <Separator height={50} />
    </>
  );
}
