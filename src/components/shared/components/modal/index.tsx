import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props:any) {
    
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{maxHeight:'70%'}} >
      <Box onClick={handleOpen}>
        {props.label}
      </Box>
      
      <Modal
        open={isOpen}
        onClose={handleClose}
      >
        <Box sx={style}>
        {props.display}
        </Box>
      </Modal>
    </Box>
  );
}