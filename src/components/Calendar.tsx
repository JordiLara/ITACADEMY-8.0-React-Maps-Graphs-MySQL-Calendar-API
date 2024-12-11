import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEventsContext } from "../context/EventContext";
import { useRoutesContext } from "../context/RoutesContext";
import EventModal from "./eventCalendar/EventModal";

const Calendar: React.FC = () => {
  const { events } = useEventsContext();
  const { routes } = useRoutesContext();
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleDateClick = (_info: { dateStr: string }) => {
    setSelectedEvent(null);
    setModalOpen(true);
  };

  const handleEventClick = (info: any) => {
    const clickedEvent = events.find(
      (event) => event.id === Number(info.event.id)
    );
    setSelectedEvent(clickedEvent);
    setModalOpen(true);
  };

  return (
    <div>
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
      />
      <EventModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        event={selectedEvent}
        routes={routes}
      />
    </div>
  );
};

export default Calendar;
