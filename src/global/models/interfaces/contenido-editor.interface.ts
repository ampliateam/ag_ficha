import { TFichaEstado } from '../types/ficha.type';

export interface IContenidoEditor {
  _id: string;
  idUsuarioProfesional: string;
  idProfesional: string;
  idCliente: string;
  contenido: string;
  estado: TFichaEstado;
  fechaCreacion: Date;
  fechaEliminacion: Date;
}

export interface IContenidoEditorOpcional {
  _id?: string;
  idUsuarioProfesional?: string;
  idProfesional?: string;
  idCliente?: string;
  contenido?: string;
  estado?: TFichaEstado;
  fechaCreacion?: Date;
  fechaEliminacion?: Date;
}