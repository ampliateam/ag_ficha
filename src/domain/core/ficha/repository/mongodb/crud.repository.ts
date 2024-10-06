import { IFicha } from '@global/models/ag_ficha';
import {
  CrearFichaDTO,
  ActualizarFichaDTO,
  BuscarFichaDTO,
} from '../../dto';
import { FichaModel } from '@domain/_connections/mongodb';
import { mongoToFicha } from '@domain/_helpers';
import { manejadorDeErrorMongodb } from '@domain/_errors';

// Referenciar el manejador de error correspondiente
const manejadorDeError = manejadorDeErrorMongodb;

const filtroParaObtenerUnRegistro = (buscarPor: BuscarFichaDTO) => {
  const filtros: any = {};
  if (buscarPor._id) {
    filtros._id = buscarPor._id;
  } else if (buscarPor.idCliente) {
    filtros.idCliente = buscarPor.idCliente;
  } else if (buscarPor.porProfesionalyCliente) {
    filtros.idProfesional = buscarPor.porProfesionalyCliente.idProfesional;
    filtros.idCliente = buscarPor.porProfesionalyCliente.idCliente;
  } else return null;

  return filtros;
};

export const crear = async (dto: CrearFichaDTO): Promise<IFicha> => {
  try {
    const modelMongoDB = await FichaModel.create(dto.ficha);
    return await obtener({ _id: modelMongoDB._id.toString() });
  } catch (error) {
    return manejadorDeError(error)
  }
};

export const obtener = async (dto: BuscarFichaDTO): Promise<IFicha> => {
  try {
    // Proceso de filtracion
    const filtros = filtroParaObtenerUnRegistro(dto);
    if (!filtros) return null;

    const modelMongoDB = await FichaModel.findOne(filtros);
    if (!modelMongoDB) return null;

    return mongoToFicha(modelMongoDB);
  } catch (error) {
    return manejadorDeError(error)
  }
};

export const actualizar = async (dto: ActualizarFichaDTO): Promise<IFicha> => {
  try {
    // Proceso de filtracion
    const filtros = filtroParaObtenerUnRegistro(dto.buscarPor);
    if (!filtros) return null;

    const obj = await FichaModel.findOneAndUpdate(
      filtros,
      dto.actualizado,
      { new: true }
    );
    if (!obj) return null;

    return mongoToFicha(obj);
  } catch (error) {
    return manejadorDeError(error)
  }
  
};
