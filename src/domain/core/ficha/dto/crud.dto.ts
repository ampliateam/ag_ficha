import { IFicha, IFichaOpcional } from "@global/models/interfaces";

export interface CrearFichaDTO {
  ficha: IFicha;
}

export interface BuscarFichaDTO {
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

export interface ActualizarFichaDTO {
  buscarPor: BuscarFichaDTO;
  actualizado: IFichaOpcional;
}
