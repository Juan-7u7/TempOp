import React from "react";

const ImageUploader = ({ previewImage, handleImageChange }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "10px",
      backgroundColor: "#FFC4E1",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      width: "fit-content",
      margin: "auto",
    }}
  >
    <div
      style={{
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        overflow: "hidden",
        backgroundColor: "#EAEAEA",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      {previewImage ? (
        <img
          src={previewImage}
          alt="Foto de perfil"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <span style={{ color: "#6A4FB5", fontWeight: "bold" }}>Sin foto</span>
      )}
    </div>

    <label
      htmlFor="file-upload"
      style={{
        marginTop: "10px",
        padding: "10px 20px",
        backgroundColor: "#F07DEA",
        color: "#FFF",
        fontWeight: "bold",
        borderRadius: "20px",
        cursor: "pointer",
        transition: "0.3s",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#6A4FB5")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "#F07DEA")}
    >
      Seleccionar archivo
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{
          display: "none",
        }}
      />
    </label>
  </div>
);

export default ImageUploader;
