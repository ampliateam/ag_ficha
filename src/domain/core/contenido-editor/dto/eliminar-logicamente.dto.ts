import { BuscarContenidoEditorDTO } from "./crud.dto";

export interface EliminarContenidoEditorDTO {
    buscarPor: BuscarContenidoEditorDTO;
    fechaEliminacion: Date;
}
