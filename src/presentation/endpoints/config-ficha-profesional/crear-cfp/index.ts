import { verificarCreacion } from "./middleware";
import { crearConfigFichaProfesional } from "./controller";

export const list = [
  verificarCreacion,
  crearConfigFichaProfesional
];