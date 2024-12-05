import api from './axios';
import { Route } from '../types/route';

export const routesApi = {
  getAll: async (): Promise<Route[]> => {
    try {
      const response = await api.get<Route[]>('/rutas');
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error('Error fetching routes:', error);
      return [];
    }
  },

  getById: async (id: number): Promise<Route | null> => {
    try {
      const response = await api.get<Route>(`/rutas/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching route:', error);
      return null;
    }
  },

  create: async (newRoute: Omit<Route, 'id'>): Promise<Route | null> => {
    try{
      const response = await api.post<Route>('/rutas', newRoute);
      return response.data;
    } catch (error) {
      console.error('Error al crear la ruta:', error);
      return null;
    }
  },

  update: async (id: number, updatedRoute: Partial<Route>): Promise<Route | null> => {
    try {
      const response = await api.put<Route>(`/rutas/${id}`, updatedRoute);
      return response.data;
    } catch (error) {
      console.error('Error al actualizar la ruta:', error);
      return null;
    }
  },

  delete: async (id: number): Promise<boolean> => {
    try {
      await api.delete(`/rutas/${id}`);
      return true;
    } catch (error) {
      console.error('Error al intentar borrar la ruta:', error);
      return false;
    }
  },
};