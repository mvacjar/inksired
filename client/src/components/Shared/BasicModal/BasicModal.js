import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const styleTitle = {
  color: '#fffbef',
  textAlign: 'center',
  fontFamily: 'Bangla MN',
  pb: 0,
  pt: 2,
};

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: '#96503e',
  color: '#6687b6',
  border: 'none',
  borderRadius: 3,
  boxShadow: 14,
  p: 3,
  '@media (max-width: 768px)': {
    width: '80%',
  },
};

export function BasicModal({ open, onClose, children, title }) {
  return (
    <Modal open={open} onClose={() => onClose(false)}>
      <Box sx={styleModal}>
        <Typography variant='h6' component='h2' sx={styleTitle}>
          {title}
        </Typography>
        <Typography variant='div' sx={{ mt: 2 }}>
          {children}
        </Typography>
      </Box>
    </Modal>
  );
}
