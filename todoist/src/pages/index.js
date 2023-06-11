import { useState } from "react"
import styles from "../styles/Home.module.css"
import Item from "../components/item.js"
import KeepMountedModal from "@/components/Modal"
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

export default function Home(){
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [tasks, setTasks] = useState([]);

  const handleModalSubmit = (data) => {
    setFormData(data);
    setTasks([...tasks, data]);
    setModalOpen(false);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleExcluir = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <Box 
      sx={{
        width:'50%',
        height:'50%',
        marginTop:'4%',
        marginLeft:'25%'
      }}>

      <h1>Hoje</h1>
      <Divider variant="middle" />
      {modalOpen && (
        <KeepMountedModal onSubmit={handleModalSubmit} onClose={handleClose} />
      )}
      {tasks.map((task, index) => (
        <Item
          key={index}
          title={task.title}
          description={task.description}
          handleExcluir={() => handleExcluir(index)}
        />
      ))}
      <IconButton 
        variant="text" 
        onClick={() => setModalOpen(true)}
        >
          <AddIcon/>
      </IconButton>
      <b>Adicionar Tarefa</b>
    </Box>
  );
}
