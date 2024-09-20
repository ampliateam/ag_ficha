import { IConfigFichaProfesional } from '@global/models/interfaces';
import {
  ActualizarConfigFichaProfesionalDTO,
  BuscarConfigFichaProfesionalDTO,
  CrearConfigFichaProfesionalDTO,
} from '../../dto';
import { ConfigFichaProfesionalModel } from '@domain/_connections/mongodb';
import { mongoToConfigFichaProfesional } from '@domain/_helpers';

const filtroParaObtenerUnRegistro = (buscarPor: BuscarConfigFichaProfesionalDTO) => {
  const filtros: any = {};
  if (buscarPor._id) {
    filtros._id = buscarPor._id;
  } else if (buscarPor.idProfesional) {
    filtros.idProfesional = buscarPor.idProfesional;
  } else return null;

  return filtros;
};

export const crear = async (dto: CrearConfigFichaProfesionalDTO): Promise<IConfigFichaProfesional> => {
  const modelMongoDB = await ConfigFichaProfesionalModel.create(dto.configFichaProfesional);
  return await obtener({ _id: modelMongoDB._id.toString() });
};

export const obtener = async (dto: BuscarConfigFichaProfesionalDTO): Promise<IConfigFichaProfesional> => {
  // Proceso de filtracion
  const filtros = filtroParaObtenerUnRegistro(dto);
  if (!filtros) return null;

  const modelMongoDB = await ConfigFichaProfesionalModel.findOne(filtros);
  if (!modelMongoDB) return null;

  return mongoToConfigFichaProfesional(modelMongoDB);
};

export const actualizar = async (dto: ActualizarConfigFichaProfesionalDTO): Promise<IConfigFichaProfesional> => {
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
};
