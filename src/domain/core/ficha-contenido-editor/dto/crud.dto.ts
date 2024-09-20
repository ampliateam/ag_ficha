import { IFichaContenidoEditorOpcional } from '@global/models/interfaces';

export interface CrearFichaContenidoEditorDTO {
  fichaContenidoEditor: IFichaContenidoEditorOpcional;
};

export interface BuscarFichaContenidoEditorDTO {
  _id?: string;
  idFicha?: string;
};

export interface ActualizarFichaContenidoEditorDTO {
  buscarPor: BuscarFichaContenidoEditorDTO;
  actualizado: IFichaContenidoEditorOpcional;
};
