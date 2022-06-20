import { Tarea } from './tareaI';

export interface Rutina {
  nombre : string,
  descripcion : string,
  tareas : Tarea[],
  terminadas : number
}
