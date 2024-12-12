import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEventsContext } from "../context/EventContext";
import { useRoutesContext } from "../context/RoutesContext";
import EventModal from "./eventCalendar/eventModal";

const Calendar: React.FC = () => {
  const { events } = useEventsContext();
  const { routes } = useRoutesContext();
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateClick = (info: { dateStr: string }) => {
    setSelectedEvent(null);
    setSelectedDate(info.dateStr);
    setModalOpen(true);
  };

  const handleEventClick = (info: any) => {
    const clickedEvent = events.find(
      (event) => event.id === Number(info.event.id)
    );
    setSelectedEvent(clickedEvent);
    setSelectedDate(clickedEvent?.date || null);
    setModalOpen(true);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-stone-800 mb-4">
        Calendario de Eventos
      </h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events.map((event) => {
          const route = routes.find((route) => route.id === event.routeId);
          return {
            title: route?.origen || "Evento",
            start: event.date,
            id: event.id.toString(),
          };
        })}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        height="auto"
      />
      <EventModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        event={selectedEvent}
        routes={routes}
        date={selectedDate}
      />
    </div>
  );
};

export default Calendar;
