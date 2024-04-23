import { BuscarFichaDTO } from "./crud.dto";

export interface EliminarFichaDTO {
    buscarPor: BuscarFichaDTO;
    fechaEliminacion: Date;
}
