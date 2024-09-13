import { IConfigFichaProfesional, IConfigFichaProfesionalOpcional } from "@global/models/interfaces";

export interface CrearConfigFichaProfesionalDTO {
  configFichaProfesional: IConfigFichaProfesional;
}

export interface BuscarConfigFichaProfesionalDTO {
  _id?: string;
  idUsuarioProfesional?: string;
  idProfesional?: string;
}

export interface ActualizarConfigFichaProfesionalDTO {
  buscarPor: BuscarConfigFichaProfesionalDTO;
  actualizado: IConfigFichaProfesionalOpcional;
}
