import { FichaModel } from "@domain/_connections/mongodb";
import { mongoToFicha } from "@domain/_helpers";

// Tener cuidado mientras se use el plan de mongodb "pago-por-uso"
export const obtener = async (filtros: any) => {
  const listaModelMongo = await FichaModel.find(filtros);
  return listaModelMongo.map(v => mongoToFicha(v));
};

export const actualizar = async (filtros: any, data: any, opciones?: any) => {
  const opcionesAux = opciones || { new: true, runValidators: true };
  await FichaModel.updateMany(filtros, data, opcionesAux);
  const actualizados = await FichaModel.find(filtros);
  return actualizados.map(p => {
    return Object.assign(mongoToFicha(p), data);
  });
};

export const obtenerPorID = async (id: string) => {
  const modelMongo = await FichaModel.findById(id);
  return mongoToFicha(modelMongo);
};

export const actualizarPorID = async (filtros: any, data: any, opciones?: any) => {
  const opcionesAux = opciones || { new: true, runValidators: true };
  const actualizados = await FichaModel.find(filtros);
  await FichaModel.findByIdAndUpdate(actualizados[0]._id, data, opcionesAux);
  return Object.assign(mongoToFicha(actualizados[0]), data);
};
