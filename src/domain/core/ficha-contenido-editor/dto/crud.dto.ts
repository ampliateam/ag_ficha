import { IFichaContenidoEditorOpcional } from '@global/models/ag_ficha';

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
