import { IContenidoEditor } from "@global/models/interfaces";
import {
  CrearContenidoEditorDTO,
  BuscarContenidoEditorDTO,
  ActualizarContenidoEditorDTO,
} from "../dto";
import * as repository from "../repository/mongodb";
import { EliminarContenidoEditorDTO } from "../dto";

export const crear = async (
  dto: CrearContenidoEditorDTO
): Promise<IContenidoEditor> => {
  return await repository.crud.crear(dto);
};

export const obtener = async (
  dto: BuscarContenidoEditorDTO
): Promise<IContenidoEditor> => {
  return await repository.crud.obtener(dto);
};

export const actualizar = async (
  dto: ActualizarContenidoEditorDTO
): Promise<IContenidoEditor> => {
  return await repository.crud.actualizar(dto);
};

export const eliminarLogicamente = async (dto: EliminarContenidoEditorDTO): Promise<IContenidoEditor> => {
    return await repository.crud.actualizar({
        buscarPor: dto.buscarPor,
        actualizado: {
            estado: 'eliminado',
            fechaEliminacion: dto.fechaEliminacion,
        },
    });
}
