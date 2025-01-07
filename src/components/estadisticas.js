import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import "../styles/estadisticas.css"; // Opcional: para agregar estilos personalizados
// Registrar elementos de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);
const PieCharts = () => {
  // Estado inicial con los datos de las vacantes
  const [vacantes, setVacantes] = useState([
    {
      id: 1,
      titulo: "Vacante 1",
      data: { interes: 60, aplicados: 40 },
    },
    {
      id: 2,
      titulo: "Vacante 2",
      data: { interes: 70, aplicados: 30 },
    },
    {
      id: 3,
      titulo: "Vacante 3",
      data: { interes: 80, aplicados: 20 },
    },
    {
      id: 4,
      titulo: "Vacante 4",
      data: { interes: 50, aplicados: 50 },
    },
  ]);
  // Función para eliminar una vacante
  const borrarVacante = (id) => {
    const nuevasVacantes = vacantes.filter((vacante) => vacante.id !== id); // Filtrar por id
    setVacantes(nuevasVacantes); // Actualizar el estado
  };
  // Configuración de opciones para los gráficos
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom", // Ubicación de la leyenda
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };
  return (
    <div className="charts-container">
      {vacantes.map((vacante) => (
        <div className="chart-wrapper" key={vacante.id}>
          <h3 className="chart-title">{vacante.titulo}</h3>
          <Pie
            data={{
              labels: ["Interés", "Aplicados"],
              datasets: [
                {
                  label: "Usuarios",
                  data: [vacante.data.interes, vacante.data.aplicados],
                  backgroundColor: ["#6DECB9", "#11999E"], // Colores personalizados
                  hoverBackgroundColor: ["#47CFAA", "#0E7D89"], // Colores al pasar el mouse
                },
              ],
            }}
            options={options}
          />
          <button
            className="delete-button"
            onClick={() => borrarVacante(vacante.id)}
          >
            Borrar Vacante
          </button>
        </div>
      ))}
    </div>
  );
};

export default PieCharts;