import React, { useState } from "react";
import Swal from "sweetalert2";
import { TextField, MenuItem, Button, Box } from "@mui/material";
const Formulario = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [requisitos, setRequisitos] = useState([""]);
  const [claseVacante, setClaseVacante] = useState("Proyecto");
  const [salario, setSalario] = useState(1800);
  const handleRequisitoChange = (index, value) => {
    const newRequisitos = [...requisitos];
    newRequisitos[index] = value;
    setRequisitos(newRequisitos);
  };
  const addRequisito = () => {
    setRequisitos([...requisitos, ""]);
  };
  const handleSalarioChange = (value) => {
    const updatedSalario = Math.max(1800, value);
    setSalario(updatedSalario);
  };
  const handleSubmit = () => {
    Swal.fire({
      title: "Éxito!",
      text: "La publicación se ha enviado correctamente.",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: 3,
        maxWidth: "500px",
        margin: "auto",
        backgroundColor: "#f7f9fc",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>Crear Vacante</h2>
      <TextField
        label="Título"
        variant="outlined"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        fullWidth
      />
      <TextField
        label="Descripción"
        variant="outlined"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        multiline
        rows={4}
        fullWidth
      />
      <Box>
        <h3 style={{ marginBottom: "8px" }}>Requisitos</h3>
        {requisitos.map((requisito, index) => (
          <TextField
            key={index}
            label={`Requisito ${index + 1}`}
            variant="outlined"
            value={requisito}
            onChange={(e) => handleRequisitoChange(index, e.target.value)}
            fullWidth
            sx={{ marginBottom: 1 }}
          />
        ))}
        <Button variant="outlined" onClick={addRequisito} sx={{ mt: 1 }}>
          Agregar Requisito
        </Button>
      </Box>
      <TextField
        select
        label="Clase de Vacante"
        value={claseVacante}
        onChange={(e) => setClaseVacante(e.target.value)}
        fullWidth
      >
        <MenuItem value="Proyecto">Proyecto</MenuItem>
        <MenuItem value="Empleo">Empleo</MenuItem>
      </TextField>
      <TextField
        label="Salario"
        type="number"
        variant="outlined"
        value={salario}
        onChange={(e) => handleSalarioChange(Number(e.target.value))}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ mt: 2 }}
      >
        Publicar
      </Button>
    </Box>
  );
};

export default Formulario;
