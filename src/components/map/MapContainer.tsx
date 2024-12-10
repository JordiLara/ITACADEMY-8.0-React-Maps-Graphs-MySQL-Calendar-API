import React, { useState } from "react";
import { useRoutesContext } from "../../context/RoutesContext";
import MapView from "./MapView";

const MapContainer: React.FC = () => {
  const { routes } = useRoutesContext();
  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null);

  const filteredRoutes = difficultyFilter
    ? routes.filter(
        (route) => route.dificultad.toLowerCase() === difficultyFilter
      )
    : routes;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-stone-800 mb-4">Mapa de Rutas</h2>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setDifficultyFilter("null")}
          className="bg-gray-200 px-4 py-2 rounded-md"
        >
          Todas
        </button>
        <button
          onClick={() => setDifficultyFilter("baja")}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Baja
        </button>
        <button
          onClick={() => setDifficultyFilter("media")}
          className="bg-orange-500 text-white px-4 py-2 rounded-md"
        >
          Media
        </button>
        <button
          onClick={() => setDifficultyFilter("alta")}
          className="bg-red-500  text-white px-4 py-2 rounded-md"
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
