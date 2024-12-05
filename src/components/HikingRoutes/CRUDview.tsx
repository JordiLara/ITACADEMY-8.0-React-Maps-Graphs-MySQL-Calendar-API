import React from 'react';

const CRUDView = ({ routes, onEdit, onDelete, onAdd }: any) => (
  <div className="p-4">
    <div className="flex justify-end mb-4">
      <button
        className="bg-emerald-600 text-white py-2 px-4 rounded-md"
        onClick={onAdd}
      >
        Añadir Ruta
      </button>
    </div>
    <table className="w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Nombre</th>
          <th className="border border-gray-300 px-4 py-2">Descripción</th>
          <th className="border border-gray-300 px-4 py-2">Origen</th>
          <th className="border border-gray-300 px-4 py-2">Destino</th>
          <th className="border border-gray-300 px-4 py-2">Distancia_km</th>
          <th className="border border-gray-300 px-4 py-2">Desnivel_m</th>
          <th className="border border-gray-300 px-4 py-2">Dificultad</th>
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
              {route.distancia_km || "N/A"}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {route.desnivel_m || "N/A"}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {route.dificultad || "N/A"}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <button
                className="bg-blue-500 text-white py-1 px-3 rounded-md mr-2"
                onClick={() => onEdit(route)}
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

export default CRUDView;
