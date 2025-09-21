import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 320,
  bgcolor: "#222",
  color: "#fff",
  borderRadius: 8,
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