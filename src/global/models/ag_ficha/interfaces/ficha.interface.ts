import {
  TFichaEstado,
  TTipoFicha,
  TDatosFormulario
} from '../types';

export interface IFicha {
  _id: string;
  idProfesional: string;
  idCliente: string;
  tipoFicha: TTipoFicha;
  datosFormulario: TDatosFormulario[];
  estado: TFichaEstado;
  fechaCreacion: Date;
};

export interface IFichaOpcional {
  _id?: string;
  idProfesional?: string;
  idCliente?: string;
  tipoFicha?: TTipoFicha;
  datosFormulario?: TDatosFormulario[];
  estado?: TFichaEstado;
  fechaCreacion?: Date;
};
