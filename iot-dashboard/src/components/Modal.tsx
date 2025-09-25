import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { ModalProps } from '../types/Modal';

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 200,
  maxHeight: "80vh",
  overflowY: 'auto',
  bgcolor: "#222",
  color: "#fff",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};
export const AppModal: React.FC<ModalProps> = ({ open, onClose, children}) => (
    <Modal open={open} onClose={onClose}>
        <Box sx={style}>
            {children}
        </Box>
    </Modal>
);
export default AppModal;