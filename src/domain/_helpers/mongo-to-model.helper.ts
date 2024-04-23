import { IFicha, IContenidoEditor } from "@global/models/interfaces";
import { IParametroSistema } from "@domain/_models/interfaces";

const mongoToModel = (mongo: any) => {
  if (!mongo) return null;
  const mongoObj = mongo.toObject();
  const mongoKeys = Object.keys(mongoObj);

  const obj = {};
  mongoKeys.map((key) => (obj[key] = mongoObj[key]));
  delete obj["_id"];

  return obj;
};

export const mongoToParametroBusqueda = (mongo: any): IParametroSistema => {
  return mongoToModel(mongo) as IParametroSistema;
};

export const mongoToFicha = (mongo: any): IFicha => {
  return mongoToModel(mongo) as IFicha;
};

export const mongoToContenidoEditor = (mongo: any): IContenidoEditor => {
  return mongoToModel(mongo) as IContenidoEditor;
};
