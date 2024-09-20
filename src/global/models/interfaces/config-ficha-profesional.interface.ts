import { TFichaDatosFormularioTipo } from '../types';

export interface IConfigFichaProfesional {
  _id: string;
  idProfesional: string;
  listaFormularioHabilitado: TFichaDatosFormularioTipo[];
  fechaCreacion: Date;
};

export interface IConfigFichaProfesionalOpcional {
  _id?: string;
  idProfesional?: string;
  listaFormularioHabilitado?: TFichaDatosFormularioTipo[];
  fechaCreacion?: Date;
};
