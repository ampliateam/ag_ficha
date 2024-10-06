import { IFichaContenidoEditor } from '@global/models/ag_ficha';
import * as repository from '../repository/mongodb';

export const obtener = async (dto: any): Promise<IFichaContenidoEditor[]> => {
  return await repository.db.obtener(dto);
};

export const actualizar = async (dto: any, data: any): Promise<IFichaContenidoEditor[]> => {
  const actualizados = await repository.db.actualizar(dto, data);
  return actualizados;
};

export const obtenerPorID = async (id: string) => {
  return await repository.db.obtenerPorID(id);
};

export const actualizarPorID = async (dto: any, data: any) => {
  const actualizado = await repository.db.actualizarPorID(dto, data);
  return actualizado;
};
