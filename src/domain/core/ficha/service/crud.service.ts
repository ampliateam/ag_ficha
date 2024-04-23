import { IFicha } from "@global/models/interfaces";
import {
  CrearFichaDTO,
  BuscarFichaDTO,
  ActualizarFichaDTO,
} from "../dto";
import * as repository from "../repository";

export const crear = async (
  dto: CrearFichaDTO
): Promise<IFicha> => {
  return await repository.crud.crear(dto);
};

export const obtener = async (
  dto: BuscarFichaDTO
): Promise<IFicha> => {
  return await repository.crud.obtener(dto);
};

export const actualizar = async (
  dto: ActualizarFichaDTO
): Promise<IFicha> => {
  return await repository.crud.actualizar(dto);
};

export const eliminar = async (dto: BuscarFichaDTO): Promise<IFicha> => {
  return await repository.crud.eliminar(dto);
}
