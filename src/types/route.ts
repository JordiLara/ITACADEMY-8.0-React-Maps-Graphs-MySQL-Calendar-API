export interface Route {
  id?: number;
  nombre: string;
  descripcion: string;
  origen: [string, number];
  destino: [string, number];
  distancia_km: number;
  desnivel_m: number;
  dificultad: 'easy' | 'moderate' | 'hard';
  createdAt?: Date;
  updatedAt?: Date;
}