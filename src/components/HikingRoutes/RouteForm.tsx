import React, { useState } from "react";
import { Route } from "../../types/route";

interface RouteFormProps {
  initialValues: Partial<Route>;
  onSubmit: (values: Partial<Route>) => void;
  onCancel: () => void;
}

const RouteForm: React.FC<RouteFormProps> = ({
  initialValues,
  onSubmit,
  onCancel,
}) => {
  const [formValues, setFormValues] = useState<Partial<Route>>(initialValues);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!formValues.dificultad) {
      formValues.dificultad = "baja";
    }

    onSubmit(formValues);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-lg shadow-md"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          type="text"
          name="nombre"
          value={formValues.nombre || ""}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Descripción
        </label>
        <input
          type="text"
          name="descripcion"
          value={formValues.descripcion || ""}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        />
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Origen
          </label>
          <input
            type="text"
            name="origen"
            value={formValues.origen || ""}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Latitud de Origen
          </label>
          <input
            type="number"
            name="latitud_origen"
            value={formValues.latitud_origen || ""}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Longitud de Origen
          </label>
          <input
            type="number"
            name="longitud_origen"
            value={formValues.longitud_origen || ""}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Destino
          </label>
          <input
            type="text"
            name="destino"
            value={formValues.destino || ""}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Latitud de Destino
            </label>
            <input
              type="number"
              name="latitud_destino"
              value={formValues.latitud_destino || ""}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Longitud de Destino
            </label>
            <input
              type="number"
              name="longitud_destino"
              value={formValues.longitud_destino || ""}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Distancia (km)
            </label>
            <input
              type="number"
              name="distancia_km"
              value={formValues.distancia_km || ""}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Desnivel (m)
            </label>
            <input
              type="number"
              name="desnivel_m"
              value={formValues.desnivel_m || ""}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Dificultad
              </label>
              <select
                name="dificultad"
                value={formValues.dificultad || "baja"}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                required
              >
                <option value="baja">Baja</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
              </select>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={onCancel}
                className="bg-gray-500 text-white py-2 px-4 rounded-md"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-emerald-600 text-white py-2 px-4 rounded-md"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RouteForm;
