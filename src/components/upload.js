import React from 'react';
import '../styles/upload.css'; // Asegúrate de crear este archivo y pegar el CSS que proporcionaste

function UploadForm({ handleCvChange }) {
  return (
    <form className="form">
      <span className="form-title">Sube tu CV</span>
      <p className="form-paragraph">
        Debes subirlo en PDF
      </p>
      <label htmlFor="file-input" className="drop-container">
        <span className="drop-title">Suelta tus archivos aquí.</span>
        o
        <input
          type="file"
          accept=".pdf"
          required
          id="file-input"
          onChange={handleCvChange}  // Aquí pasas el cambio de archivo
        />
      </label>
    </form>
  );
}


export default UploadForm;
