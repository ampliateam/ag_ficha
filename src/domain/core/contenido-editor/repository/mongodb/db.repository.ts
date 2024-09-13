import { ContenidoEditorModel } from "@domain/_connections/mongodb";
import { mongoToContenidoEditor } from "@domain/_helpers";

// Tener cuidado mientras se use el plan de mongodb "pago-por-uso"
export const obtener = async (filtros: any) => {
  const listaModelMongo = await ContenidoEditorModel.find(filtros);
  return listaModelMongo.map(v => mongoToContenidoEditor(v));
};

export const actualizar = async (filtros: any, data: any, opciones?: any) => {
  const opcionesAux = opciones || { new: true, runValidators: true };
  await ContenidoEditorModel.updateMany(filtros, data, opcionesAux);
  const actualizados = await ContenidoEditorModel.find(filtros);
  return actualizados.map(p => {
    return Object.assign(mongoToContenidoEditor(p), data);
  });
};

export const obtenerPorID = async (id: string) => {
  const modelMongo = await ContenidoEditorModel.findById(id);
  return mongoToContenidoEditor(modelMongo);
};

export const actualizarPorID = async (filtros: any, data: any, opciones?: any) => {
  const opcionesAux = opciones || { new: true, runValidators: true };
  const actualizados = await ContenidoEditorModel.find(filtros);
  await ContenidoEditorModel.findByIdAndUpdate(actualizados[0]._id, data, opcionesAux);
  return Object.assign(mongoToContenidoEditor(actualizados[0]), data);
};
