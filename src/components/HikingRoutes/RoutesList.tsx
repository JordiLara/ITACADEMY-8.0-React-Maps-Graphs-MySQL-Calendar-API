import React, { useState } from "react";
import { useRoutes } from "../../hooks/useRoutes";
import {
  MapPin,
  AlertCircle,
  SignpostBig,
  Route,
  ChartNoAxesCombined,
} from "lucide-react";

const CRUDView = ({ routes, onEdit, onDelete, onAdd }: any) => (
  <div className="p-4">
    <button
      className="mb-4 bg-emerald-600 text-white py-2 px-4 rounded-md"
      onClick={onAdd}
    >
      Añadir Ruta
    </button>
    <table className="w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Nombre</th>
          <th className="border border-gray-300 px-4 py-2">Descripción</th>
          <th className="border border-gray-300 px-4 py-2">Origen</th>
          <th className="border border-gray-300 px-4 py-2">Destino</th>
          <th className="border border-gray-300 px-4 py-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {routes.map((route: any) => (
          <tr key={route.id}>
            <td className="border border-gray-300 px-4 py-2">{route.nombre}</td>
            <td className="border border-gray-300 px-4 py-2">
              {route.descripcion}
            </td>
            <td className="border border-gray-300 px-4 py-2">{route.origen}</td>
            <td className="border border-gray-300 px-4 py-2">
              {route.destino}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <button
                className="bg-blue-500 text-white py-1 px-3 rounded-md mr-2"
                onClick={() => onEdit(route.id)}
              >
                Editar
              </button>
              <button
                className="bg-red-500 text-white py-1 px-3 rounded-md"
                onClick={() => onDelete(route.id)}
              >
                Borrar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const RoutesList = () => {
  const { routes, loading, error } = useRoutes();
  const [isCRUDView, setIsCRUDView] = useState(false);

  const handleToggleView = () => {
    setIsCRUDView(!isCRUDView);
  };

  const handleAddRoute = () => {
    alert("Añadir nueva ruta (funcionalidad pendiente)");
  };

  const handleEditRoute = (id: string) => {
    alert(`Editar ruta con ID: ${id}`);
  };

  const handleDeleteRoute = (id: string) => {
    alert(`Borrar ruta con ID: ${id}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center gap-2 p-4 text-red-600 bg-red-50 rounded-lg">
        <AlertCircle className="h-5 w-5" />
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <button
        className="mb-4 bg-emerald-600 text-white py-2 px-4 rounded-md"
        onClick={handleToggleView}
      >
        {isCRUDView ? "Volver a Vista Detallada" : "Cambiar a Vista CRUD"}
      </button>

      {isCRUDView ? (
        <CRUDView
          routes={routes}
          onAdd={handleAddRoute}
          onEdit={handleEditRoute}
          onDelete={handleDeleteRoute}
        />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {routes.map((route) => (
            <div
              key={route.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-stone-800">
                    {route.nombre}
                  </h3>
                </div>
                <p className="text-stone-600 mt-2">{route.descripcion}</p>
                <div className="mt-4 flex items-center gap-2 text-stone-500">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">
                    Origen: <span className="font-medium">{route.origen}</span>
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-stone-500">
                  <SignpostBig className="h-4 w-4" />
                  <span className="text-sm">
                    Destino:{" "}
                    <span className="font-medium">{route.destino}</span>
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-stone-500">
                  <Route className="h-4 w-4" />
                  <span className="text-sm">
                    Distancia_km:{" "}
                    <span className="font-medium">{route.distancia_km}</span>
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-stone-500">
                  <ChartNoAxesCombined className="h-4 w-4" />
                  <span className="text-sm">
                    Desnivel_m:{" "}
                    <span className="font-medium">{route.desnivel_m}</span>
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-stone-500">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">
                    Dificultad:{" "}
                    <span className="font-medium">{route.dificultad}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoutesList;
