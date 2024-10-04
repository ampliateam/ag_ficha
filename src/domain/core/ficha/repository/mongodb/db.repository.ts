import { FichaModel } from '@domain/_connections/mongodb';
import { manejadorDeErrorMongodb } from '@domain/_errors';
import { mongoToFicha } from '@domain/_helpers';

// Referenciar el manejador de error correspondiente
const manejadorDeError = manejadorDeErrorMongodb;

// Tener cuidado mientras se use el plan de mongodb 'pago-por-uso'
export const obtener = async (filtros: any) => {
  try {
    const listaModelMongo = await FichaModel.find(filtros);
    return listaModelMongo.map(v => mongoToFicha(v));
  } catch (error) {
    return manejadorDeError(error)
  }
};

export const actualizar = async (filtros: any, data: any, opciones?: any) => {
  try {
    const opcionesAux = opciones || { new: true, runValidators: true };
    await FichaModel.updateMany(filtros, data, opcionesAux);
    const actualizados = await FichaModel.find(filtros);
    return actualizados.map(p => {
      return Object.assign(mongoToFicha(p), data);
    });
  } catch (error) {
    return manejadorDeError(error)
  }
};

export const obtenerPorID = async (id: string) => {
  try {
    const modelMongo = await FichaModel.findById(id);
    return mongoToFicha(modelMongo);
  } catch (error) {
    return manejadorDeError(error)
  }
};

export const actualizarPorID = async (filtros: any, data: any, opciones?: any) => {
  try {
    const opcionesAux = opciones || { new: true, runValidators: true };
    const actualizados = await FichaModel.find(filtros);
    await FichaModel.findByIdAndUpdate(actualizados[0]._id, data, opcionesAux);
    return Object.assign(mongoToFicha(actualizados[0]), data);
  } catch (error) {
    return manejadorDeError(error)
  }
};
