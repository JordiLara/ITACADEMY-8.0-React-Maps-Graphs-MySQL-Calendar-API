
import React, { useState } from "react";
import RouteForm from "./RouteForm";
import { Route } from "../../types/route"

interface CRUDViewProps {
  routes: Route[];
  onAdd: (route: Omit<Route, "id">) => void;
  onEdit: (route: Route) => void;
  onDelete: (id: number) => void;
}

const CRUDView: React.FC<CRUDViewProps> = ({ routes, onEdit, onDelete, onAdd }) => {
  const [editingRoute, setEditingRoute] = useState<Route | null>(null);

  const handleCancel = () => {
    setEditingRoute(null);
  };

  const handleSave = (values: Partial<Route>) => {
    if (editingRoute?.id) {
      onEdit({ ...editingRoute, ...values } as Route);
    } else {
      onAdd(values as Omit<Route, "id">);
    }
    setEditingRoute(null);
  };

  return (
    <div className="p-4">
      {editingRoute ? (
        <RouteForm
        initialValues={editingRoute || {}}
        onSubmit={handleSave}
        onCancel={handleCancel}
        />

      ) : (
        <>
          <button
          className="mb-4 bg-emerald-600 text-white py-2 px-4 rounded-md"
          onClick={() => setEditingRoute({} as Route )}
          >
            Añadir Ruta
          </button>
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Nombre</th>
                <th className="border border-gray-300 px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route) => (
                <tr key={route.id}>
                  <td className="border border-gray-300 px-4 py-2">{route.nombre}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => setEditingRoute(route)}
                      className="bg-blue-500 text-white py-1 px-3 rounded-md mr-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => onDelete(route.id)}
                      className="bg-red-500 text-white py-1 px-3 rounded-md"
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default CRUDView;    