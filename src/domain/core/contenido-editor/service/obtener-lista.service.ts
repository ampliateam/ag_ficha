import { IContenidoEditor } from "@global/models/interfaces";
import * as repository from "../repository";

export const obtenerListaPorID = async (
  listaId: string[]
): Promise<IContenidoEditor[]> => {
  return await repository.obtenerListaPorID(listaId);
};
