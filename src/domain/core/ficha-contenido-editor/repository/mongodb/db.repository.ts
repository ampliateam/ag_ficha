import { FichaContenidoEditorModel } from '@domain/_connections/mongodb';
import { manejadorDeErrorMongodb } from '@domain/_errors';
import { mongoToFichaContenidoEditor } from '@domain/_helpers';

// Referenciar el manejador de error correspondiente
const manejadorDeError = manejadorDeErrorMongodb;

// Tener cuidado mientras se use el plan de mongodb 'pago-por-uso'
export const obtener = async (filtros: any) => {
  try {
    const listaModelMongo = await FichaContenidoEditorModel.find(filtros);
    return listaModelMongo.map(v => mongoToFichaContenidoEditor(v));
  } catch (error) {
    return manejadorDeError(error)
  }
};

export const actualizar = async (filtros: any, data: any, opciones?: any) => {
  try {
    const opcionesAux = opciones || { new: true, runValidators: true };
    await FichaContenidoEditorModel.updateMany(filtros, data, opcionesAux);
    const actualizados = await FichaContenidoEditorModel.find(filtros);
    return actualizados.map(p => {
      return Object.assign(mongoToFichaContenidoEditor(p), data);
    });
  } catch (error) {
    return manejadorDeError(error)
  }
};

export const obtenerPorID = async (id: string) => {
  try {
    const modelMongo = await FichaContenidoEditorModel.findById(id);
    return mongoToFichaContenidoEditor(modelMongo);
  } catch (error) {
    return manejadorDeError(error)
  }
};

export const actualizarPorID = async (filtros: any, data: any, opciones?: any) => {
  try {
    const opcionesAux = opciones || { new: true, runValidators: true };
    const actualizados = await FichaContenidoEditorModel.find(filtros);
    await FichaContenidoEditorModel.findByIdAndUpdate(actualizados[0]._id, data, opcionesAux);
    return Object.assign(mongoToFichaContenidoEditor(actualizados[0]), data);
  } catch (error) {
    return manejadorDeError(error)
  }
};
