import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";


const Calendar = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-stone-800 mb-4">
        Calendari d'Excursions
      </h2>
      <div className="mt-4">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          height="auto"
        />
      </div>
    </div>
  );
};

export default Calendar;
