import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from "react"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    onSubmit({ title, description });
  };
  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            <h1>Tarefa</h1>
            <TextField
              sx={{ width:'36ch' }}
              id="filled-hidden-label-normal"
              label="Titulo"
              variant="standard"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Typography>
          <Typography id="keep-mounted-modal-description" >
            <TextField
              sx={{ width:'45ch' }}
              id="margin-none filled-hidden-label-normal"
              defaultValue='Descrição'
              variant="outlined"
              multiline
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Typography>
          <button onClick={handleSubmit}>Enviar</button>
        </Box>
      </Modal>
    </div>
  );
}