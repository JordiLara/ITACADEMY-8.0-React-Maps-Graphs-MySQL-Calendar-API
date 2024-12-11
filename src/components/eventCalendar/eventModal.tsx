import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Route } from "../../types/route";
import { useEventsContext } from "../../context/EventContext";

interface EventModalProps {
  open: boolean;
  onClose: () => void;
  event?: {
    id: number;
    date: string;
    startTime: string;
    routeId: number;
  } | null;
  routes: Route[];
  date: string | null;
}

const EventModal: React.FC<EventModalProps> = ({
  open,
  onClose,
  event,
  routes,
  date,
}) => {
  const [startTime, setStartTime] = useState(event?.startTime || "");
  const [selectedRoute, setSelectedRoute] = useState<number | null>(
    event?.routeId || null
  );
  const { addEvent, updateEvent, deleteEvent } = useEventsContext();

  useEffect(() => {
    if (event) {
      setStartTime(event.startTime);
      setSelectedRoute(event.routeId);
    } else {
      setStartTime("");
      setSelectedRoute(null);
    }
  }, [event]);

  const handleSave = async () => {
    if (!date || !startTime || !selectedRoute) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (event) {
      await updateEvent(event.id, { date, startTime, routeId: selectedRoute });
      alert("Evento actualizado con éxito.");
    } else {
      await addEvent({ date, startTime, routeId: selectedRoute });
      alert("Evento creado con éxito.");
    }

    onClose();
  };

  const handleDelete = async () => {
    if (event) {
      await deleteEvent(event.id);
      alert("Evento eliminado con éxito.");
      onClose();
    }
  };

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h3 className="text-lg font-bold mb-4">
          {event ? "Editar Evento" : "Crear Evento"}
        </h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Fecha
          </label>
          <input
            type="text"
            value={date || ""}
            readOnly
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Hora de Inicio
          </label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Ruta
          </label>
          <select
            value={selectedRoute || ""}
            onChange={(e) => setSelectedRoute(Number(e.target.value))}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          >
            <option value="">Selecciona una Ruta</option>
            {routes.map((route) => (
              <option key={route.id} value={route.id}>
                {route.origen} - {route.destino}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-end gap-2">
          {event && (
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white py-2 px-4 rounded-md"
            >
              Eliminar
            </button>
          )}
          <button
            onClick={onClose}
            className="bg-gray-500 text-white py-2 px-4 rounded-md"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="bg-emerald-600 text-white py-2 px-4 rounded-md"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default EventModal;
