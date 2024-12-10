import React, { useState } from "react";
import { useRoutesContext } from "../../context/RoutesContext";
import MapView from "./MapView";

const MapContainer: React.FC = () => {
  const { routes } = useRoutesContext();
  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null);

  const filteredRoutes = difficultyFilter
    ? routes.filter(
        (route) =>
          route.dificultad.toLowerCase() === difficultyFilter.toLowerCase()
      )
    : routes;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-stone-800 mb-4">Mapa de Rutas</h2>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setDifficultyFilter(null)}
          className={`px-4 py-2 rounded-md ${
            difficultyFilter === null ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Todas
        </button>
        <button
          onClick={() => setDifficultyFilter("baja")}
          className={`px-4 py-2 rounded-md ${
            difficultyFilter === "baja"
              ? "bg-green-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Baja
        </button>
        <button
          onClick={() => setDifficultyFilter("media")}
          className={`px-4 py-2 rounded-md ${
            difficultyFilter === "media"
              ? "bg-orange-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Media
        </button>
        <button
          onClick={() => setDifficultyFilter("alta")}
          className={`px-4 py-2 rounded-md ${
            difficultyFilter === "alta"
              ? "bg-red-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Alta
        </button>
      </div>
      <div className="h-[600px] rounded-lg overflow-hidden">
        <MapView routes={filteredRoutes} />
      </div>
    </div>
  );
};

export default MapContainer;
