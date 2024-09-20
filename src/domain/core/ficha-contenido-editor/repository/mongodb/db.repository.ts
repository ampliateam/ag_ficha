import { FichaContenidoEditorModel } from '@domain/_connections/mongodb';
import { mongoToFichaContenidoEditor } from '@domain/_helpers';

// Tener cuidado mientras se use el plan de mongodb 'pago-por-uso'
export const obtener = async (filtros: any) => {
  const listaModelMongo = await FichaContenidoEditorModel.find(filtros);
  return listaModelMongo.map(v => mongoToFichaContenidoEditor(v));
};

export const actualizar = async (filtros: any, data: any, opciones?: any) => {
  const opcionesAux = opciones || { new: true, runValidators: true };
  await FichaContenidoEditorModel.updateMany(filtros, data, opcionesAux);
  const actualizados = await FichaContenidoEditorModel.find(filtros);
  return actualizados.map(p => {
    return Object.assign(mongoToFichaContenidoEditor(p), data);
  });
};

export const obtenerPorID = async (id: string) => {
  const modelMongo = await FichaContenidoEditorModel.findById(id);
  return mongoToFichaContenidoEditor(modelMongo);
};

export const actualizarPorID = async (filtros: any, data: any, opciones?: any) => {
  const opcionesAux = opciones || { new: true, runValidators: true };
  const actualizados = await FichaContenidoEditorModel.find(filtros);
  await FichaContenidoEditorModel.findByIdAndUpdate(actualizados[0]._id, data, opcionesAux);
  return Object.assign(mongoToFichaContenidoEditor(actualizados[0]), data);
};
