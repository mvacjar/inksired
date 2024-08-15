import { BasicModal } from '@/components/Shared/BasicModal/BasicModal';
import { AddressForm } from '../AddressForm';
import { useState } from 'react';
import Button from '@mui/material/Button';

export function NewAddress(props) {
  const [open, setOpen] = useState(false);
  const { onReload } = props;

  const handleOpenClose = (shouldOpen) => {
    setOpen(shouldOpen);
  };

  const styleButton = {
    display: 'inline-block',
    bgcolor: '#96503e',
    color: '#fffbef',
    borderRadius: 10,
    fontSize: 13,
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    marginTop: '0',
    whiteSpace: 'nowrap',
    transition: 'transform ease 0.2s',
    width: 'auto',

    '&:hover': {
      backgroundColor: '#96503e',
      transform: 'scale(1.05)',
    },
  };

  return (
    <>
      <Button onClick={() => handleOpenClose(true)} sx={styleButton}>
        Create
      </Button>

      <BasicModal open={open} onClose={handleOpenClose} title='New Address'>
        <AddressForm
          onClose={() => handleOpenClose(false)}
          onReload={onReload}
        />
      </BasicModal>
    </>
  );
}
