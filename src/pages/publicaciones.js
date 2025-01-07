import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Formulario from "../components/form_publi";
import PieCharts from '../components/estadisticas';

const Publicaciones = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#333", marginBottom: "20px" }}>Publicaciones</h1>
      <Button
        variant="outlined"
        onClick={() => navigate("/perfil")}
        style={{ marginBottom: "20px" }}
      >
        Regresar
      </Button>
      <Formulario />
      <PieCharts />
    </div>
  );
};

export default Publicaciones;
