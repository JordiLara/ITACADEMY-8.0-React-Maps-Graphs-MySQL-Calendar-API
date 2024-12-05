export interface Route {
  id: number;
  nombre: string;
  descripcion: string;
  origen: string;
  destino: string;
  distancia_km: number;
  desnivel_m: number;
  dificultad: 'baja' | 'media' | 'alta';
  createdAt?: Date;
  updatedAt?: Date;
}