import { IConfigFichaProfesionalOpcional } from '@global/models/ag_ficha';

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
