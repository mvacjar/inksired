import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
  '&:active': {
    border: 'none',
  },
  '@media (max-width: 768px)': {
    width: '80%',
  },
};

const styleButton = {
  bgcolor: '#96503e',
  color: '#fffbef',
  borderRadius: 10,
  fontSize: 13,
  border: 'none',
  cursor: 'pointer',
  padding: '0.5rem 1rem',
  marginTop: '0',
  whiteSpace: 'nowrap',
  textTransform: 'none',
  transition: 'transform ease 0.2s',
  '&:hover': {
    bgcolor: '#96503e',
    transform: 'scale(1.05)',
  },
};
export function BasicModal({ open, onClose, children, title }) {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Button onClick={() => onClose(true)} sx={styleButton}>
          Create
        </Button>
      </div>
      <Modal open={open} onClose={() => onClose(false)}>
        <Box sx={styleModal}>
          <Typography variant='h6' component='h2' sx={styleTitle}>
            {title}
          </Typography>
          <Typography sx={{ mt: 2 }}>{children}</Typography>
        </Box>
      </Modal>
    </div>
  );
}
