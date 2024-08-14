import styles from './accountPage.module.scss';
import NavVertical from '@/components/Navbars/NavVertical/NavVertical';
import InfoAccount from '@/components/InfoAccount/InfoAccount';

export default function AccountPage() {
  return (
    <>
      <NavVertical />
      <InfoAccount />
    </>
  );
}
