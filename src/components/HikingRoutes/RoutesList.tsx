import React, { useContext } from "react";
import CRUDView from "./CRUDview";
import {
  Route as RouteIcon,
  ChartNoAxesCombined,
  MapPin,
  AlertCircle,
  SignpostBig,
  LocateFixed,
} from "lucide-react";
import { useRoutesContext } from "../../context/RoutesContext";


const RoutesList: React.FC = () => {
  const { routes, loading, error, addRoute, editRoute, deleteRoute } =
    useRoutesContext();
  const [isCRUDView, setIsCRUDView] = React.useState(false);

  const handleToggleView = () => {
    setIsCRUDView(!isCRUDView);
  };

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
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <button
          className="bg-emerald-600 text-white py-2 px-4 rounded-md"
          onClick={handleToggleView}
        >
          {isCRUDView ? "Volver a Vista Detallada" : "Cambiar a Vista CRUD"}
        </button>
      </div>

      {isCRUDView ? (
        <CRUDView
          routes={routes}
          onAdd={addRoute}
          onEdit={editRoute}
          onDelete={deleteRoute}
        />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {routes.map((route: { id: React.Key | null | undefined; nombre: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; descripcion: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; origen: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; latitud_origen: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; longitud_origen: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; destino: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; latitud_destino: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; longitud_destino: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; distancia_km: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; desnivel_m: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; dificultad: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
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
                    Origen: <span className="font-medium">{route.origen}</span>
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-stone-500">
                  <LocateFixed className="h-4 w-4" />
                  <span className="text-sm">
                    Latitud de Origen:{" "}
                    <span className="font-medium">{route.latitud_origen}</span>
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-stone-500">
                  <LocateFixed className="h-4 w-4" />
                  <span className="text-sm">
                    Longitud de Origen:{" "}
                    <span className="font-medium">{route.longitud_origen}</span>
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-stone-500">
                  <SignpostBig className="h-4 w-4" />
                  <span className="text-sm">
                    Destino:{" "}
                    <span className="font-medium">{route.destino}</span>
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-stone-500">
                  <LocateFixed className="h-4 w-4" />
                  <span className="text-sm">
                    Latitud de Destino:{" "}
                    <span className="font-medium">{route.latitud_destino}</span>
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-stone-500">
                  <LocateFixed className="h-4 w-4" />
                  <span className="text-sm">
                    Longitud de Destino:{" "}
                    <span className="font-medium">
                      {route.longitud_destino}
                    </span>
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-stone-500">
                  <RouteIcon className="h-4 w-4" />
                  <span className="text-sm">
                    Distancia_km:{" "}
                    <span className="font-medium">{route.distancia_km}</span>
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-stone-500">
                  <ChartNoAxesCombined className="h-4 w-4" />
                  <span className="text-sm">
                    Desnivel_m:{" "}
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
      )}
    </div>
  );
};

export default RoutesList;
