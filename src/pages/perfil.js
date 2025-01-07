import React, { useState } from "react";
import Button from "@mui/material/Button";
import CustomTextField from "../components/CustomTextField";
import ImageUploader from "../components/ImageUploader";
import UploadForm from "../components/upload";
import Botones from "../components/opciones";
import axios from "axios";

function Perfil() {
  const [previewImage, setPreviewImage] = useState(null);
  const [descripcion, setDescripcion] = useState("");
  const [habilidades, setHabilidades] = useState(["", "", "", ""]);
  const [experiencia, setExperiencia] = useState(["", "", "", ""]);
  const [contacto, setContacto] = useState(["", "", ""]);
  const [cvFile, setCvFile] = useState(null);
  const [id_usuario] = useState(""); // Añadido para almacenar el ID de usuario

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCvChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCvFile(file);
    }
  };

  const handleArrayChange = (index, array, setArray) => (e) => {
    const updatedArray = [...array];
    updatedArray[index] = e.target.value;
    setArray(updatedArray);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("descripcion", descripcion);
    habilidades.forEach((habilidad, index) => formData.append(`habilidad_${index + 1}`, habilidad));
    experiencia.forEach((exp, index) => formData.append(`experiencia_${index + 1}`, exp));
    contacto.forEach((cont, index) => formData.append(`contacto_${index + 1}`, cont));

    // Agregar el ID de usuario al formulario
    formData.append("id_usuario", id_usuario);

    if (cvFile) {
      formData.append("CVS", cvFile);
    }

    if (previewImage) {
      const imageFile = dataURLtoFile(previewImage, "profile-image.png");
      formData.append("profileImage", imageFile);
    }

    try {
      const response = await axios.post("http://localhost:5000/api/subir-datos-perfil", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("Perfil guardado correctamente");
      }
    } catch (error) {
      console.error("Error al guardar el perfil:", error);
      alert("Hubo un error al guardar el perfil. Intenta nuevamente.");
    }
  };

  // Convierte la imagen base64 a archivo para poder enviarlo
  const dataURLtoFile = (dataURL, filename) => {
    let arr = dataURL.split(",");
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
          maxWidth: "800px",
          margin: "auto",
          backgroundColor: "#FFC4E1",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Foto de perfil */}
        <ImageUploader previewImage={previewImage} handleImageChange={handleImageChange} />

        {/* Formulario para subir el CV */}
        <UploadForm handleCvChange={handleCvChange} />

        {/* Descripción */}
        <div style={{ width: "100%" }}>
          <h2>Descripción</h2>
          <CustomTextField
            label="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            multiline
            rows={4}
          />
        </div>

        {/* Habilidades */}
        <div style={{ width: "100%" }}>
          <h2>Habilidades</h2>
          {habilidades.map((habilidad, index) => (
            <CustomTextField
              key={index}
              label={`Habilidad ${index + 1}`}
              value={habilidad}
              onChange={handleArrayChange(index, habilidades, setHabilidades)}
            />
          ))}
        </div>

        {/* Experiencia */}
        <div style={{ width: "100%" }}>
          <h2>Experiencia</h2>
          {experiencia.map((exp, index) => (
            <CustomTextField
              key={index}
              label={`Experiencia ${index + 1}`}
              value={exp}
              onChange={handleArrayChange(index, experiencia, setExperiencia)}
            />
          ))}
        </div>

        {/* Contacto */}
        <div style={{ width: "100%" }}>
          <h2>Contacto</h2>
          {contacto.map((contact, index) => (
            <CustomTextField
              key={index}
              label={`Contacto ${index + 1}`}
              value={contact}
              onChange={handleArrayChange(index, contacto, setContacto)}
            />
          ))}
        </div>

        {/* Botón Guardar */}
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#F07DEA",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#6A4FB5",
            },
          }}
          onClick={handleSubmit} // Enviar el formulario
        >
          Guardar Perfil
        </Button>
      </div>
      <Botones />
    </>
  );
}

export default Perfil;
