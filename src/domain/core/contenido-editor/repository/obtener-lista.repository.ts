import { ContenidoEditorModel } from "@domain/_connections/mongodb";
import { mongoToContenidoEditor } from "@domain/_helpers";

export const obtenerListaPorID = async (listaId: string[]) => {
  const filtros = {};
  const or = [];
  listaId.map((id) => or.push({ _id: id }));
  filtros["$or"] = or;

  const listaMongo = await ContenidoEditorModel.find(filtros);
  return listaMongo.map((v) => mongoToContenidoEditor(v));
};
