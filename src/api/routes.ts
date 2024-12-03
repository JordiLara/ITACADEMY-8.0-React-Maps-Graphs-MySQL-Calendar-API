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

}