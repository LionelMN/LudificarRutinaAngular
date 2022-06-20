import { Rutina } from './rutinaI';
import { Premio } from './premioI';

export interface Usuario {
  nombre : string,
  imagen : string,
  puntuacion : number,
  rutinas? : Rutina[],
  premios? : Premio[]
}
