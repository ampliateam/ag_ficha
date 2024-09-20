import { IConfigFichaProfesionalOpcional } from '@global/models/interfaces';

export interface CrearConfigFichaProfesionalDTO {
  configFichaProfesional: IConfigFichaProfesionalOpcional;
}

export interface BuscarConfigFichaProfesionalDTO {
  _id?: string;
  idProfesional?: string;
}

export interface ActualizarConfigFichaProfesionalDTO {
  buscarPor: BuscarConfigFichaProfesionalDTO;
  actualizado: IConfigFichaProfesionalOpcional;
}
