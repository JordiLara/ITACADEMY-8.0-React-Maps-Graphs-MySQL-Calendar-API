import { MapPin, Calendar, BarChart3 } from "lucide-react";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-stone-800 mb-4">
          Descobreix Noves Rutes de Senderisme
        </h1>
        <p className="text-lg text-stone-600">
          Explora les millors rutes de Catalunya i planifica les teves aventures
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-10 w-10 text-emerald-600" />
          </div>
          <h2 className="text-xl font-semibold text-stone-800 mb-2 text-center">
            Mapa Interactiu
          </h2>
          <p className="text-stone-600 text-center">
            Explora totes les rutes disponibles en el nostre mapa interactiu
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="h-10 w-10 text-emerald-600" />
          </div>
          <h2 className="text-xl font-semibold text-stone-800 mb-2 text-center">
            Calendari d'Events
          </h2>
          <p className="text-stone-600 text-center">
            Planifica les teves excursions i no et perdis cap esdeveniment
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <BarChart3 className="h-10 w-10 text-emerald-600" />
          </div>
          <h2 className="text-xl font-semibold text-stone-800 mb-2 text-center">
            Estadístiques
          </h2>
          <p className="text-stone-600 text-center">
            Analitza les dades de les teves rutes i el teu progrés
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
          Una de les rutes més emblemàtiques de Catalunya, amb vistes
          espectaculars des del punt més alt de Montserrat.
        </p>
      </div>
    </div>
  );
};

export default Home;
