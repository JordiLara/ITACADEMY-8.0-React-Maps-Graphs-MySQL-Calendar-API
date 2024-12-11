import React, { useState, useEffect } from "react";
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
}

const EventModal: React.FC<EventModalProps> = ({
  open,
  onClose,
  event,
  routes,
}) => {
  const [date, setDate] = useState(event?.date || "");
  const [startTime, setStartTime] = useState(event?.startTime || "");
  const [selectedRoute, setSelectedRoute] = useState<number | null>(
    event?.routeId || null
  );
  const { addEvent, updateEvent, deleteEvent } = useEventsContext();

  useEffect(() => {
    if (event) {
      setDate(event.date);
      setStartTime(event.startTime);
      setSelectedRoute(event.routeId);
    }
  }, [event]);

  const handleSave = async () => {
    if (!date || !startTime || !selectedRoute) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (event) {
      await updateEvent(event.id, { date, startTime, routeId: selectedRoute });
    } else {
      await addEvent({ date, startTime, routeId: selectedRoute });
    }

    onClose();
  };

  const handleDelete = async () => {
    if (event) {
      await deleteEvent(event.id);
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h3 className="text-lg font-bold mb-4">
          {event ? "Editar Evento" : "Crear Evento"}
        </h3>
        <div className="mb-4">
          <label>Fecha</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label>Hora de Inicio</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label>Ruta</label>
          <select
            value={selectedRoute || ""}
            onChange={(e) => setSelectedRoute(Number(e.target.value))}
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
            <button onClick={handleDelete} className="bg-red-600 text-white">
              Eliminar
            </button>
          )}
          <button onClick={onClose}>Cancelar</button>
          <button onClick={handleSave} className="bg-green-600 text-white">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
