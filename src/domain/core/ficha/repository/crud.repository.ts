import { IFicha } from "@global/models/interfaces";
import {
  CrearFichaDTO,
  ActualizarFichaDTO,
  BuscarFichaDTO,
} from "../dto";
import { FichaModel } from "@domain/_connections/mongodb";
import { mongoToFicha } from "@domain/_helpers";

export const crear = async (
  dto: CrearFichaDTO
): Promise<IFicha> => {
  const modelMongoDB = await FichaModel.create(dto.ficha);
  return await obtener({ id: modelMongoDB.id });
};

export const obtener = async (
  dto: BuscarFichaDTO
): Promise<IFicha> => {
  // Proceso de filtracion
  const filtros: any = {};
  if (dto.id) {
    filtros._id = dto.id;
  } else if (dto.porProfesionalyCliente) {
    filtros.idProfesional = dto.porProfesionalyCliente.idProfesional;
    filtros.idCliente = dto.porProfesionalyCliente.idCliente;
  } else if (dto.porUsuarioProfesionayCliente) {
    filtros.idUsuarioProfesional = dto.porUsuarioProfesionayCliente.idUsuarioProfesional;
    filtros.idCliente = dto.porUsuarioProfesionayCliente.idCliente;
  } else return null;

  const modelMongoDB = await FichaModel.findOne(filtros);
  if (!modelMongoDB) return null;
  return mongoToFicha(modelMongoDB);
};

export const actualizar = async (
  dto: ActualizarFichaDTO
): Promise<IFicha> => {
  const ficha: IFicha = await obtener(dto.buscarPor);
  if (!ficha) return null;

  await FichaModel.updateOne(
    {
      _id: ficha.id,
    },
    dto.actualizado
  );

  return Object.assign(ficha, dto.actualizado);
};

export const eliminar = async (dto: BuscarFichaDTO): Promise<IFicha> => {
  const ficha: IFicha = await obtener(dto);
  if (!ficha) return null;

  await FichaModel.findByIdAndDelete(ficha.id);

  return ficha;
}