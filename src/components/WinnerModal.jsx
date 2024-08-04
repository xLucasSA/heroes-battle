import * as React from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';

const style = {
  color: "black",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const WinnerModal = ({ open, handleClose, winner }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="winner-modal-title"
      aria-describedby="winner-modal-description"
    >
      <Box sx={style} className="flex items-center flex-col">
        <Typography id="winner-modal-title" variant="h6" component="h2">
          Winning Hero!
        </Typography>
        <Typography id="winner-modal-description" sx={{ mt: 2 }}>
          {winner ? (
            <>
              <img src={winner.images.sm} alt={winner.name} className="rounded mb-4" />
              <div className="font-bold text-xl mb-2">{winner.name}</div>
              <p className="text-gray-700 text-base">{winner.biography.placeOfBirth}</p>
            </>
          ) : (
            "Nenhum herói selecionado."
          )}
        </Typography>
        <Button onClick={handleClose} variant="contained" color="primary" sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default WinnerModal;