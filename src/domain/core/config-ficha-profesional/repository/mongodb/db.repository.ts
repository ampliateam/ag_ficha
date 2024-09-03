import { ConfigFichaProfesionalModel } from "@domain/_connections/mongodb";
import { mongoToConfigFichaProfesional } from "@domain/_helpers";

// Tener cuidado mientras se use el plan de mongodb "pago-por-uso"
export const obtener = async (filtros: any) => {
  const listaModelMongo = await ConfigFichaProfesionalModel.find(filtros);
  return listaModelMongo.map(v => mongoToConfigFichaProfesional(v));
};

export const actualizar = async (filtros: any, data: any, opciones?: any) => {
  const opcionesAux = opciones || { new: true, runValidators: true };
  await ConfigFichaProfesionalModel.updateMany(filtros, data, opcionesAux);
  const actualizados = await ConfigFichaProfesionalModel.find(filtros);
  return actualizados.map(p => {
    return Object.assign(mongoToConfigFichaProfesional(p), data);
  });
};

export const obtenerPorID = async (id: string) => {
  const modelMongo = await ConfigFichaProfesionalModel.findById(id);
  return mongoToConfigFichaProfesional(modelMongo);
};

export const actualizarPorID = async (filtros: any, data: any, opciones?: any) => {
  const opcionesAux = opciones || { new: true, runValidators: true };
  const actualizados = await ConfigFichaProfesionalModel.find(filtros);
  await ConfigFichaProfesionalModel.findByIdAndUpdate(actualizados[0]._id, data, opcionesAux);
  return Object.assign(mongoToConfigFichaProfesional(actualizados[0]), data);
};
