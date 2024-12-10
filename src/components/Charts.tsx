import React from "react";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { useRoutesContext } from "../context/RoutesContext";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

const RouteCharts: React.FC = () => {
  const { routes } = useRoutesContext();

  const difficulties = ["Baja", "Media", "Alta"];
  const difficultyData = difficulties.map(
    (level) => routes.filter((route) => route.dificultad === level).length
  );

  const pieData = {
    labels: ["Baja", "Media", "Alta"],
    datasets: [
      {
        label: "Rutas por Dificultad",
        data: difficultyData,
        backgroundColor: ["#34d399", "#fb923c", "#ef4444"],
        hoverOffset: 4,
      },
    ],
  };
console.log("Dificultad - Datos del gráfico:", difficultyData);
console.log("Rutas disponibles:", routes);
  const lineData = {
    labels: routes.map((route) => route.origen),
    datasets: [
      {
        label: "Desnivel (m)",
        data: routes.map((route) => route.desnivel_m),
        borderColor: "#6366f1",
        borderWidth: 2,
        full: false,
      },
      {
        label: "Distancia (km)",
        data: routes.map((route) => route.distancia_km),
        borderColor: "#34d399",
        borderWidth: 2,
        full: false,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-stone-800 mb-4">
          Distribución de Rutas por Dificultad
        </h3>
        <Pie data={pieData} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-stone-800 mb-4">
          Desnivel y Distancia de las Rutas
        </h3>
        <Line data={lineData} />
      </div>
    </div>
  );
};

export default RouteCharts;
