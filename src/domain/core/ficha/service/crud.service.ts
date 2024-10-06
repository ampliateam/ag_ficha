import { IFicha } from '@global/models/ag_ficha';
import {
  CrearFichaDTO,
  BuscarFichaDTO,
  ActualizarFichaDTO,
} from '../dto';
import * as repository from '../repository/mongodb';

export const crear = async (dto: CrearFichaDTO): Promise<IFicha> => {
  return await repository.crud.crear(dto);
};

export const obtener = async (dto: BuscarFichaDTO): Promise<IFicha> => {
  return await repository.crud.obtener(dto);
};

export const actualizar = async (dto: ActualizarFichaDTO): Promise<IFicha> => {
  return await repository.crud.actualizar(dto);
};
