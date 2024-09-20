export interface IFichaContenidoEditor {
  _id: string;
  idFicha: string;
  contenido: string;
  fechaCreacion: Date;
};

export interface IFichaContenidoEditorOpcional {
  _id?: string;
  idFicha?: string;
  contenido?: string;
  fechaCreacion?: Date;
};
