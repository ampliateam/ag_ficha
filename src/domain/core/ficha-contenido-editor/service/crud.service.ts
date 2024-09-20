import { IFichaContenidoEditor } from '@global/models/interfaces';
import {
  CrearFichaContenidoEditorDTO,
  BuscarFichaContenidoEditorDTO,
  ActualizarFichaContenidoEditorDTO,
} from '../dto';
import * as repository from '../repository/mongodb';

export const crear = async (dto: CrearFichaContenidoEditorDTO): Promise<IFichaContenidoEditor> => {
  return await repository.crud.crear(dto);
};

export const obtener = async (dto: BuscarFichaContenidoEditorDTO): Promise<IFichaContenidoEditor> => {
  return await repository.crud.obtener(dto);
};

export const actualizar = async (dto: ActualizarFichaContenidoEditorDTO): Promise<IFichaContenidoEditor> => {
  return await repository.crud.actualizar(dto);
};
