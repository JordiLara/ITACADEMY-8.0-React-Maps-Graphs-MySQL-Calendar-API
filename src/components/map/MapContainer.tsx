import React from "react";
import { useRoutesContext } from "../../context/RoutesContext";
import MapView from "./MapView";

const MapContainer: React.FC = () => {
  const { routes } = useRoutesContext();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-stone-800 mb-4">Mapa de Rutas</h2>
      <div className="h-[600px] rounded-lg overflow-hidden">
        <MapView routes={routes} />
      </div>
    </div>
  );
};

export default MapContainer;
