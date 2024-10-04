import { ConfigFichaProfesionalModel } from '@domain/_connections/mongodb';
import { manejadorDeErrorMongodb } from '@domain/_errors';
import { mongoToConfigFichaProfesional } from '@domain/_helpers';

// Referenciar el manejador de error correspondiente
const manejadorDeError = manejadorDeErrorMongodb;

// Tener cuidado mientras se use el plan de mongodb 'pago-por-uso'
export const obtener = async (filtros: any) => {
  try {
    const listaModelMongo = await ConfigFichaProfesionalModel.find(filtros);
    return listaModelMongo.map(v => mongoToConfigFichaProfesional(v));
  } catch (error) {
    return manejadorDeError(error)
  }
};

export const actualizar = async (filtros: any, data: any, opciones?: any) => {
  try {
    const opcionesAux = opciones || { new: true, runValidators: true };
    await ConfigFichaProfesionalModel.updateMany(filtros, data, opcionesAux);
    const actualizados = await ConfigFichaProfesionalModel.find(filtros);
    return actualizados.map(p => {
    return Object.assign(mongoToConfigFichaProfesional(p), data);
  });
  } catch (error) {
    return manejadorDeError(error)
  }
};

export const obtenerPorID = async (id: string) => {
  try {
    const modelMongo = await ConfigFichaProfesionalModel.findById(id);
    return mongoToConfigFichaProfesional(modelMongo);
  } catch (error) {
    return manejadorDeError(error)
  }
};

export const actualizarPorID = async (filtros: any, data: any, opciones?: any) => {
  try {
    const opcionesAux = opciones || { new: true, runValidators: true };
    const actualizados = await ConfigFichaProfesionalModel.find(filtros);
    await ConfigFichaProfesionalModel.findByIdAndUpdate(actualizados[0]._id, data, opcionesAux);
    return Object.assign(mongoToConfigFichaProfesional(actualizados[0]), data);
  } catch (error) {
    return manejadorDeError(error)
  }
};
