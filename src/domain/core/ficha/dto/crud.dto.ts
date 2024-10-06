import { IFichaOpcional } from '@global/models/ag_ficha';

export interface CrearFichaDTO {
  ficha: IFichaOpcional;
};

export interface BuscarFichaDTO {
  _id?: string;
  idCliente?: string;
  porProfesionalyCliente?: {
    idProfesional: string;
    idCliente: string;
  };
};

export interface ActualizarFichaDTO {
  buscarPor: BuscarFichaDTO;
  actualizado: IFichaOpcional;
};
