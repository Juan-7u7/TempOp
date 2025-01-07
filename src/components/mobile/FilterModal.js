import React from 'react';

const FilterModal = ({ filters, onClose, onChange }) => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}
  >
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '15px',
        width: '90%',
        maxWidth: '350px',
        padding: '15px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h3 style={{ marginTop: 0, textAlign: 'center', color: '#333' }}>Filtrar por:</h3>

      <div style={{ display: 'grid', gap: '10px' }}>
        {Object.keys(filters).map((filter) => (
          <div key={filter}>
            <h4 style={{ marginBottom: '5px', color: '#007BFF' }}>{filter}</h4>
            <select
              style={{
                width: '100%',
                padding: '5px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
              value={filters[filter]}
              onChange={(e) => onChange(filter, e.target.value)}
            >
              {/* Renderiza las opciones dinámicamente */}
              {filters[filter].options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Botones */}
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={onClose}
          style={{
            padding: '10px',
            border: 'none',
            backgroundColor: '#ccc',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Cerrar
        </button>
        <button
          onClick={onClose}
          style={{
            padding: '10px',
            border: 'none',
            backgroundColor: '#007BFF',
            color: '#fff',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Aplicar
        </button>
      </div>
    </div>
  </div>
);

export default FilterModal;
