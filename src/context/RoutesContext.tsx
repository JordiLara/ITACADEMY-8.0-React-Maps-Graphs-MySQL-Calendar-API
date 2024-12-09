import React, { createContext, useContext, useState, useEffect } from "react";
import { routesApi } from "../api/routes";
import { Route } from "../types/route";

interface RoutesContextValue {
  routes: Route[];
  loading: boolean;
  error: string | null;
  refreshRoutes: () => Promise<void>;
}

const RoutesContext = createContext<RoutesContextValue | undefined>(undefined);

export const RoutesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRoutes = async () => {
    setLoading(true);
    try {
      const data = await routesApi.getAll();
      setRoutes(data);
      setError(null);
    } catch (err: any) {
      setError(err.message || "Error desconocido al cargar las rutas.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoutes();
  }, []);

  return (
    <RoutesContext.Provider
      value={{ routes, loading, error, refreshRoutes: fetchRoutes }}
    >
      {children}
    </RoutesContext.Provider>
  );
};

export const useRoutesContext = (): RoutesContextValue => {
  const context = useContext(RoutesContext);
  if (!context) {
    throw new Error("useRoutesContext debe usarse dentro de un RoutesProvider");
  }
  return context;
};
