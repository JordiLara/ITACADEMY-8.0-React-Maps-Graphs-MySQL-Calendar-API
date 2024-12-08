import React, { useState, useEffect } from "react";
import CRUDView from "./CRUDview";
import { routesApi } from "../../api/routes";
import {
  Route as RouteIcon,
  ChartNoAxesCombined,
  MapPin,
  AlertCircle,
  SignpostBig,
  LocateFixed,
} from "lucide-react"; 
import { Route } from "../../types/route"; 


const RoutesList: React.FC = () => {
  const [routes, setRoutes] = useState<Route[]>([]); 
  const [isCRUDView, setIsCRUDView] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 

  
  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const data = await routesApi.getAll();
        setRoutes(data);
      } catch (error: any) {
        setError(error.message || 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };
    fetchRoutes();
  }, []);
        
  const handleToggleView = () => {
    setIsCRUDView(!isCRUDView);
  };

  const handleAddRoute = async (newRoute: Omit<Route, "id">) => {
    try {
      const createdRoute = await routesApi.create(newRoute);
      if (createdRoute) {
        setRoutes((prevRoutes) => [...prevRoutes, createdRoute]);
        alert('Nueva ruta añadida.');
      }
    } catch (error) {
      console.error('Error al añadir una nueva ruta:', error);
    }
  };
    
  const handleEditRoute = async (updatedRoute: Route) => {
    try {
      const updated = await routesApi.update(updatedRoute.id, updatedRoute);
      if (updated) {
        setRoutes((prevRoutes) => 
        prevRoutes.map((route) => 
        route.id === updated.id ? updated : route
      )
    );
    alert('Ruta actualizada con éxito.');
      }
    } catch (error) {
      console.error('Error al editar la ruta:', error);
    }
  };

  const handleDeleteRoute = async (id: number) => {
    try {
      const success = await routesApi.delete(id);
      if (success) {
        setRoutes((prevRoutes) => prevRoutes.filter((route) => route.id !== id));
        alert('Ruta eliminada con éxito')
      }
    } catch (error) {
      console.error('Error al eliminar la ruta:', error);
    }
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
          onAdd={handleAddRoute}
          onEdit={handleEditRoute}
          onDelete={handleDeleteRoute}
        />
      ) : (
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
                    <span className="font-medium">{route.longitud_destino}</span>
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
