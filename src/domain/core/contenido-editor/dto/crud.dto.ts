import { IContenidoEditor, IContenidoEditorOpcional } from "@global/models/interfaces";
import { obtener } from "../repository/crud.repository";
import { ContenidoEditorModel } from "@domain/_connections/mongodb";

export interface CrearContenidoEditorDTO {
  contenidoEditor: IContenidoEditor;
}

export interface BuscarContenidoEditorDTO {
  id?: string;
  porUsuarioProfesionayCliente?: {
    idUsuarioProfesional: string;
    idCliente: string;
  };
  porProfesionalyCliente?: {
    idProfesional: string;
    idCliente: string;
  };
}

export interface ActualizarContenidoEditorDTO {
  buscarPor: BuscarContenidoEditorDTO;
  actualizado: IContenidoEditorOpcional;
}

export const eliminar = async (dto: BuscarContenidoEditorDTO): Promise<IContenidoEditor> => {
  const ficha: IContenidoEditor = await obtener(dto);
  if (!ficha) return null;

  await ContenidoEditorModel.findByIdAndDelete(ficha.id);

  return ficha;
}