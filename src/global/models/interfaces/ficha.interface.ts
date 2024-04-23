import { TFichaEstado, TTipoFicha } from "../types/ficha.type";
import { IFichaOdontologica } from "./ficha-odontologica.interface";

export interface IFicha {
  id: string;
  idUsuarioProfesional: string;
  idProfesional: string;
  idCliente: string;
  tipoFicha: TTipoFicha;
  datosFicha: IFichaOdontologica; // | IFichaPsicologica
  estado: TFichaEstado;
  fechaCreacion: Date;
  fechaEliminacion: Date | null;
}

export interface IFichaOpcional {
  id?: string;
  idUsuarioProfesional?: string;
  idProfesional?: string;
  idCliente?: string;
  tipoFicha?: TTipoFicha;
  datosFicha?: IFichaOdontologica; // | IFichaPsicologica
  estado?: TFichaEstado;
  fechaCreacion?: Date;
  fechaEliminacion?: Date | null;
}
