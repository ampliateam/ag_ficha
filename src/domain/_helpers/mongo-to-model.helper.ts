import { IFicha, IFichaContenidoEditor, IConfigFichaProfesional, IParametroSistema } from '@global/models/ag_ficha';

const mongoToModel = (mongo: any) => {
  if (!mongo) return null;

  const mongoObj = mongo.toObject();
  const mongoKeys = Object.keys(mongoObj);

  const obj = {};
  mongoKeys.map((key) => (obj[key] = mongoObj[key]));
  obj['_id'] = obj['_id'].toString();

  return obj;
};

export const mongoToParametroBusqueda = (mongo: any): IParametroSistema => {
  return mongoToModel(mongo) as IParametroSistema;
};

export const mongoToFicha = (mongo: any): IFicha => {
  return mongoToModel(mongo) as IFicha;
};

export const mongoToFichaContenidoEditor = (mongo: any): IFichaContenidoEditor => {
  return mongoToModel(mongo) as IFichaContenidoEditor;
};

export const mongoToConfigFichaProfesional = (mongo: any): IConfigFichaProfesional => {
  return mongoToModel(mongo) as IConfigFichaProfesional;
};