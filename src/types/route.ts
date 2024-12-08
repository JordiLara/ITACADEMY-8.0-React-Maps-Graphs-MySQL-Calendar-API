export interface Route {
  id: number;
  nombre: string;
  descripcion: string;
  origen: string;
  destino: string;
  latitud_origen: number;
  longitud_origen: number;
  latitud_destino: number;
  longitud_destino: number;
  distancia_km: number;
  desnivel_m: number;
  dificultad: 'baja' | 'media' | 'alta';
  createdAt?: Date;
  updatedAt?: Date;
}