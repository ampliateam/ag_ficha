import { IFichaContenidoEditor } from '@global/models/interfaces';
import {
  ActualizarFichaContenidoEditorDTO,
  BuscarFichaContenidoEditorDTO,
  CrearFichaContenidoEditorDTO,
} from '../../dto';
import { FichaContenidoEditorModel } from '@domain/_connections/mongodb';
import { mongoToFichaContenidoEditor } from '@domain/_helpers';
import { manejadorDeErrorMongodb } from '@domain/_errors';

// Referenciar el manejador de error correspondiente
const manejadorDeError = manejadorDeErrorMongodb;

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
  try {
    const modelMongoDB = await FichaContenidoEditorModel.create(dto.fichaContenidoEditor);
    return await obtener({ _id: modelMongoDB._id.toString() });
  } catch (error) {
    return manejadorDeError(error)
  }
};

export const obtener = async (dto: BuscarFichaContenidoEditorDTO): Promise<IFichaContenidoEditor> => {
  try {
    // Proceso de filtracion
    const filtros = filtroParaObtenerUnRegistro(dto);
    if (!filtros) return null;

    const modelMongoDB = await FichaContenidoEditorModel.findOne(filtros);
    if (!modelMongoDB) return null;

    return mongoToFichaContenidoEditor(modelMongoDB);
  } catch (error) {
    return manejadorDeError(error)
  }
};

export const actualizar = async (dto: ActualizarFichaContenidoEditorDTO): Promise<IFichaContenidoEditor> => {
  try {
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
  } catch (error) {
    return manejadorDeError(error)
  }
};

