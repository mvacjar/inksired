import styles from './newAddress.module.scss';
import { BasicModal } from '@/components/Shared/BasicModal/BasicModal';
import { AddressForm } from '../AddressForm';
import { useState } from 'react';

export function NewAddress() {
  const [show, setShow] = useState(false);

  const onOpenClose = (e) => {
    e.preventDefault();
    setShow((prevState) => !prevState);
  };

  return (
    <>
      <BasicModal show={show} onOpenClose={onOpenClose}>
        <AddressForm onClose={onOpenClose} />
      </BasicModal>
    </>
  );
}
