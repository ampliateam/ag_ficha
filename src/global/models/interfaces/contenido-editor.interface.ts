import { TFichaEstado } from '../types/ficha.type';

export interface IContenidoEditor {
  id: string;
  idUsuarioProfesional: string;
  idProfesional: string;
  idCliente: string;
  contenido: string;
  estado: TFichaEstado;
  fechaCreacion: Date;
  fechaEliminacion: Date;
}

export interface IContenidoEditorOpcional {
  id?: string;
  idUsuarioProfesional?: string;
  idProfesional?: string;
  idCliente?: string;
  contenido?: string;
  estado?: TFichaEstado;
  fechaCreacion?: Date;
  fechaEliminacion?: Date;
}