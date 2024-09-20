import { IFichaContenidoEditor } from '@global/models/interfaces';
import {
  ActualizarFichaContenidoEditorDTO,
  BuscarFichaContenidoEditorDTO,
  CrearFichaContenidoEditorDTO,
} from '../../dto';
import { FichaContenidoEditorModel } from '@domain/_connections/mongodb';
import { mongoToFichaContenidoEditor } from '@domain/_helpers';

const filtroParaObtenerUnRegistro = (buscarPor: BuscarFichaContenidoEditorDTO) => {
  const filtros: any = {};
  if (buscarPor._id) {
    filtros._id = buscarPor._id;
  } else if (buscarPor.idFicha) {
    filtros.idFicha = buscarPor.idFicha;
  } else return null;

  return filtros;
};

export const crear = async (dto: CrearFichaContenidoEditorDTO): Promise<IFichaContenidoEditor> => {
  const modelMongoDB = await FichaContenidoEditorModel.create(dto.fichaContenidoEditor);
  return await obtener({ _id: modelMongoDB._id.toString() });
};

export const obtener = async (dto: BuscarFichaContenidoEditorDTO): Promise<IFichaContenidoEditor> => {
  // Proceso de filtracion
  const filtros = filtroParaObtenerUnRegistro(dto);
  if (!filtros) return null;

  const modelMongoDB = await FichaContenidoEditorModel.findOne(filtros);
  if (!modelMongoDB) return null;

  return mongoToFichaContenidoEditor(modelMongoDB);
};

export const actualizar = async (dto: ActualizarFichaContenidoEditorDTO): Promise<IFichaContenidoEditor> => {
  // Proceso de filtracion
  const filtros = filtroParaObtenerUnRegistro(dto.buscarPor);
  if (!filtros) return null;

  const obj = await FichaContenidoEditorModel.findOneAndUpdate(
    filtros,
    dto.actualizado,
    { new: true }
  );
  if (!obj) return null;

  return mongoToFichaContenidoEditor(obj);
};

