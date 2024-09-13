import { IContenidoEditor, IContenidoEditorOpcional } from "@global/models/interfaces";

export interface CrearContenidoEditorDTO {
  contenidoEditor: IContenidoEditor;
}

export interface BuscarContenidoEditorDTO {
  _id?: string;
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
