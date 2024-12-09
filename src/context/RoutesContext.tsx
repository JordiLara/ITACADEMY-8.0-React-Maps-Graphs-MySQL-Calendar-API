import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Route } from "../types/route";
import { routesApi } from "../api/routes";

interface RoutesContextProps {
  routes: Route[];
  loading: boolean;
  error: string | null;
  addRoute: (newRoute: Omit<Route, "id">) => Promise<void>;
  editRoute: (updatedRoute: Route) => Promise<void>;
  deleteRoute: (id: number) => Promise<void>;
  refetchRoutes: () => Promise<void>;
}

const RoutesContext = createContext<RoutesContextProps | undefined>(undefined);

export const RoutesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRoutes = useCallback(async () => {
    try {
      setLoading(true);
      const data = await routesApi.getAll();
      setRoutes(Array.isArray(data) ? data : []);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setRoutes([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRoutes();
  }, [fetchRoutes]);

  const addRoute = async (newRoute: Omit<Route, "id">) => {
    try {
      const createdRoute = await routesApi.create(newRoute);
      if (createdRoute) {
        setRoutes((prevRoutes) => [...prevRoutes, createdRoute]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  const editRoute = async (updatedRoute: Route) => {
    try {
      const editedRoute = await routesApi.update(updatedRoute.id, updatedRoute);
      if (editedRoute) {
        setRoutes((prevRoutes) =>
          prevRoutes.map((route) =>
            route.id === editedRoute.id ? editedRoute : route
          )
        );
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  const deleteRoute = async (id: number) => {
    try {
      const success = await routesApi.delete(id);
      if (success) {
        setRoutes((prevRoutes) =>
          prevRoutes.filter((route) => route.id !== id)
        );
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  const contextValue: RoutesContextProps = {
    routes,
    loading,
    error,
    addRoute,
    editRoute,
    deleteRoute,
    refetchRoutes: fetchRoutes,
  };

  return (
    <RoutesContext.Provider value={contextValue}>
      {children}
    </RoutesContext.Provider>
  );
};

export const useRoutesContext = (): RoutesContextProps => {
  const context = useContext(RoutesContext);
  if (!context) {
    throw new Error("useRoutesContext must be used within a RoutesProvider");
  }
  return context;
};
