import { IConfigFichaProfesional } from '@global/models/interfaces';
import {
  CrearConfigFichaProfesionalDTO,
  BuscarConfigFichaProfesionalDTO,
  ActualizarConfigFichaProfesionalDTO,
} from '../dto';
import * as repository from '../repository/mongodb';

export const crear = async (dto: CrearConfigFichaProfesionalDTO): Promise<IConfigFichaProfesional> => {
  return await repository.crud.crear(dto);
};

export const obtener = async (dto: BuscarConfigFichaProfesionalDTO): Promise<IConfigFichaProfesional> => {
  return await repository.crud.obtener(dto);
};

export const actualizar = async (dto: ActualizarConfigFichaProfesionalDTO): Promise<IConfigFichaProfesional> => {
  return await repository.crud.actualizar(dto);
};
