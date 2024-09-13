import { IConfigFichaProfesional } from "@global/models/interfaces";
import {
  ActualizarConfigFichaProfesionalDTO,
  BuscarConfigFichaProfesionalDTO,
  CrearConfigFichaProfesionalDTO,
} from "../../dto";
import { ConfigFichaProfesionalModel } from "@domain/_connections/mongodb";
import { mongoToConfigFichaProfesional } from "@domain/_helpers";

export const crear = async (
  dto: CrearConfigFichaProfesionalDTO
): Promise<IConfigFichaProfesional> => {
  const modelMongoDB = await ConfigFichaProfesionalModel.create(dto.configFichaProfesional);
  return await obtener({ _id: modelMongoDB._id.toString() });
};

export const obtener = async (
  dto: BuscarConfigFichaProfesionalDTO
): Promise<IConfigFichaProfesional> => {
  // Proceso de filtracion
  const filtros: any = {};
  if (dto._id) {
    filtros._id = dto._id;
  } else if (dto.idUsuarioProfesional) {
    filtros.idUsuarioProfesional = dto.idUsuarioProfesional;
  } else if (dto.idProfesional) {
    filtros.idProfesional = dto.idProfesional;
  } else return null;

  const modelMongoDB = await ConfigFichaProfesionalModel.findOne(filtros);
  if (!modelMongoDB) return null;
  return mongoToConfigFichaProfesional(modelMongoDB);
};

export const actualizar = async (
  dto: ActualizarConfigFichaProfesionalDTO
): Promise<IConfigFichaProfesional> => {
  const configFichaProfesional: IConfigFichaProfesional = await obtener(dto.buscarPor);
  if (!configFichaProfesional) return null;

  await ConfigFichaProfesionalModel.updateOne(
    {
      _id: configFichaProfesional._id,
    },
    dto.actualizado
  );

  return Object.assign(configFichaProfesional, dto.actualizado);
};

