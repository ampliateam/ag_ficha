import { IConfigFichaProfesional } from '@global/models/interfaces';
import {
  ActualizarConfigFichaProfesionalDTO,
  BuscarConfigFichaProfesionalDTO,
  CrearConfigFichaProfesionalDTO,
} from '../../dto';
import { ConfigFichaProfesionalModel } from '@domain/_connections/mongodb';
import { mongoToConfigFichaProfesional } from '@domain/_helpers';
import { manejadorDeErrorMongodb } from '@domain/_errors';

// Referenciar el manejador de error correspondiente
const manejadorDeError = manejadorDeErrorMongodb;

const filtroParaObtenerUnRegistro = (buscarPor: BuscarConfigFichaProfesionalDTO) => {
  try {
    const filtros: any = {};
    if (buscarPor._id) {
      filtros._id = buscarPor._id;
    } else if (buscarPor.idProfesional) {
      filtros.idProfesional = buscarPor.idProfesional;
    } else return null;

    return filtros;
  } catch (error) {
    return manejadorDeError(error);
  }
};

export const crear = async (dto: CrearConfigFichaProfesionalDTO): Promise<IConfigFichaProfesional> => {
  const modelMongoDB = await ConfigFichaProfesionalModel.create(dto.configFichaProfesional);
  return await obtener({ _id: modelMongoDB._id.toString() });
};

export const obtener = async (dto: BuscarConfigFichaProfesionalDTO): Promise<IConfigFichaProfesional> => {
  try {
    // Proceso de filtracion
    const filtros = filtroParaObtenerUnRegistro(dto);
    if (!filtros) return null;

    const modelMongoDB = await ConfigFichaProfesionalModel.findOne(filtros);
    if (!modelMongoDB) return null;

    return mongoToConfigFichaProfesional(modelMongoDB);
  } catch (error) {
    return manejadorDeError(error)
  }
};

export const actualizar = async (dto: ActualizarConfigFichaProfesionalDTO): Promise<IConfigFichaProfesional> => {
  try {
    // Proceso de filtracion
    const filtros = filtroParaObtenerUnRegistro(dto.buscarPor);
    if (!filtros) return null;

    const obj = await ConfigFichaProfesionalModel.findOneAndUpdate(
      filtros,
      dto.actualizado,
      { new: true }
    );
    if (!obj) return null;

    return mongoToConfigFichaProfesional(obj);
  } catch (error) {
    return manejadorDeError(error)
  }
};
