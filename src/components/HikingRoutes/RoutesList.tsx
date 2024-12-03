import { useRoutes } from "../../hooks/useRoutes";
import { MapPin, AlertCircle, SignpostBig, Route, ChartNoAxesCombined } from "lucide-react";

const RoutesList = () => {
  const { routes, loading, error } = useRoutes();

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center gap-2 p-4 text-red-600 bg-red-50 rounded-lg">
        <AlertCircle className="h-5 w-5" />
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {routes.map((route) => (
        <div
          key={route.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="p-4">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-stone-800">
                {route.nombre}
              </h3>
            </div>
            <p className="text-stone-600 mt-2">{route.descripcion}</p>
            <div className="mt-4 flex items-center gap-2 text-stone-500">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">
                Origen:
                <span className="font-medium">{route.origen}</span>
              </span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-stone-500">
              <SignpostBig className="h-4 w-4" />
              <span className="text-sm">
                Destinación:
                <span className="font-medium">{route.destino}</span>
              </span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-stone-500">
              <Route className="h-4 w-4" />
              <span className="text-sm">
                Distancia_km:
                <span className="font-medium">{route.distancia_km}</span>
              </span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-stone-500">
              <ChartNoAxesCombined className="h-4 w-4" />
              <span className="text-sm">
                Desnivel_m:
                <span className="font-medium">{route.desnivel_m}</span>
              </span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-stone-500">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">
                Dificultad:{" "}
                <span className="font-medium">{route.dificultad}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoutesList;
