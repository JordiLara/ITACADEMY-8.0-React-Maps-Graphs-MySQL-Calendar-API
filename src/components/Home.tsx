import { MapPin, Calendar, BarChart3 } from "lucide-react";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-stone-800 mb-4">
          Descubre Nuevas Rutas de Senderismo
        </h1>
        <p className="text-lg text-stone-600">
          Explora las mejores rutas de Cataluña y planea tus aventuras
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-10 w-10 text-emerald-600" />
          </div>
          <h2 className="text-xl font-semibold text-stone-800 mb-2 text-center">
            Mapa Interactivo
          </h2>
          <p className="text-stone-600 text-center">
            Explora todas las rutas disponibles en nuestro mapa interactivo
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="h-10 w-10 text-emerald-600" />
          </div>
          <h2 className="text-xl font-semibold text-stone-800 mb-2 text-center">
            Calendario de Eventos
          </h2>
          <p className="text-stone-600 text-center">
            Planifica tus excursiones y no te pierdas ningún evento
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <BarChart3 className="h-10 w-10 text-emerald-600" />
          </div>
          <h2 className="text-xl font-semibold text-stone-800 mb-2 text-center">
            Estadisticas
          </h2>
          <p className="text-stone-600 text-center">
            Analiza los datos de tus rutas y tu progreso
          </p>
        </div>
      </div>

      <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-stone-800 mb-4">
          Ruta Destacada
        </h2>
        <div className="aspect-video rounded-lg overflow-hidden mb-4">
          <img
            src="https://images.alltrails.com/eyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNTEwMzM4NDkvN2UxZWY2YTNjMjZlYTMwNzFkODIzOWU3ZTNjMWZlZWEuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJ3ZWJwIiwicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJoZWlnaHQiOjIwNDgsImZpdCI6Imluc2lkZSJ9LCJyb3RhdGUiOm51bGwsImpwZWciOnsidHJlbGxpc1F1YW50aXNhdGlvbiI6dHJ1ZSwib3ZlcnNob290RGVyaW5naW5nIjp0cnVlLCJvcHRpbWlzZVNjYW5zIjp0cnVlLCJxdWFudGlzYXRpb25UYWJsZSI6M319fQ=="
            alt="Ruta destacada"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-stone-800 mb-2">
          Montserrat - Sant Jeroni
        </h3>
        <p className="text-stone-600">
          Una de las rutas más emblemáticas de Cataluña, con vistas
          espectaculares desde el punto más alto de Montserrat.
        </p>
      </div>
    </div>
  );
};

export default Home;
