import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

interface Event {
  id: number;
  date: string;
  startTime: string;
  routeId: number;
}

interface EventsContextProps {
  events: Event[];
  loading: boolean;
  error: string | null;
  fetchEvents: () => Promise<void>;
  addEvent: (newEvent: Omit<Event, "id">) => Promise<void>;
  updateEvent: (id: number, updatedEvent: Partial<Event>) => Promise<void>;
  deleteEvent: (id: number) => Promise<void>;
}

const EVENTS_API_URL =
  process.env.REACT_APP_EVENTS_API_URL || "http://localhost:3001/eventos";

const EventsContext = createContext<EventsContextProps | undefined>(undefined);

export const EventsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(EVENTS_API_URL);
      const data = await response.json();
      setEvents(data);
      setError(null);
    } catch (err) {
      setError("Error al cargar eventos");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const addEvent = async (newEvent: Omit<Event, "id">) => {
    try {
      const response = await fetch(EVENTS_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEvent),
      });
      if (response.ok) {
        const createdEvent = await response.json();
        setEvents((prev) => [...prev, createdEvent]);
      } else {
        setError("Error al crear evento");
      }
    } catch {
      setError("Error al crear evento");
    }
  };

  const updateEvent = async (id: number, updatedEvent: Partial<Event>) => {
    try {
      const response = await fetch(`${EVENTS_API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedEvent),
      });
      if (response.ok) {
        const updated = await response.json();
        setEvents((prev) =>
          prev.map((event) => (event.id === id ? updated : event))
        );
      } else {
        setError("Error al actualizar evento");
      }
    } catch {
      setError("Error al actualizar evento");
    }
  };

  const deleteEvent = async (id: number) => {
    try {
      const response = await fetch(`${EVENTS_API_URL}/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setEvents((prev) => prev.filter((event) => event.id !== id));
      } else {
        setError("Error al eliminar evento");
      }
    } catch {
      setError("Error al eliminar evento");
    }
  };

  return (
    <EventsContext.Provider
      value={{
        events,
        loading,
        error,
        fetchEvents,
        addEvent,
        updateEvent,
        deleteEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

export const useEventsContext = (): EventsContextProps => {
  const context = useContext(EventsContext);
  if (!context) {
    throw new Error("useEventsContext debe usarse dentro de EventsProvider");
  }
  return context;
};
