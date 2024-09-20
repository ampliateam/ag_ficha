import { IFichaOpcional } from '@global/models/interfaces';

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
