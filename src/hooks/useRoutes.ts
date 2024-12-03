import { useState, useEffect, useCallback } from 'react';
import { Route } from '../types/route';
import { routesApi } from '../api/routes';

export const useRoutes = () => {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRoutes = useCallback(async () => {
    try {
      setLoading(true);
      const data = await routesApi.getAll();
      setRoutes(Array.isArray(data) ? data : []);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setRoutes([]);
    } finally {
      setLoading(false);
    }
  }, []);

useEffect(() => {
    fetchRoutes();
  }, [fetchRoutes]);


  return { 
    routes, 
    loading, 
    error, 
    refetch: fetchRoutes,

  };
};