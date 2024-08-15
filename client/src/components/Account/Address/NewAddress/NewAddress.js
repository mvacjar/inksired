import { BasicModal } from '@/components/Shared/BasicModal/BasicModal';
import { AddressForm } from '../AddressForm';
import { useState } from 'react';

export function NewAddress(props) {
  const [open, setOpen] = useState(false);
  const { onReload } = props;

  const handleOpenClose = (shouldOpen) => {
    setOpen(shouldOpen);
  };

  return (
    <>
      <BasicModal open={open} onClose={handleOpenClose} title='New Address'>
        <AddressForm
          onClose={() => handleOpenClose(false)}
          onReload={onReload}
        />
      </BasicModal>
    </>
  );
}
