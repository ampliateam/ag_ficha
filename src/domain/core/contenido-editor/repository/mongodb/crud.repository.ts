import { IContenidoEditor } from "@global/models/interfaces";
import {
  ActualizarContenidoEditorDTO,
  BuscarContenidoEditorDTO,
  CrearContenidoEditorDTO,
} from "../../dto";
import { ContenidoEditorModel } from "@domain/_connections/mongodb";
import { mongoToContenidoEditor } from "@domain/_helpers";

export const crear = async (
  dto: CrearContenidoEditorDTO
): Promise<IContenidoEditor> => {
  const modelMongoDB = await ContenidoEditorModel.create(dto.contenidoEditor);
  return await obtener({ _id: modelMongoDB._id.toString() });
};

export const obtener = async (
  dto: BuscarContenidoEditorDTO
): Promise<IContenidoEditor> => {
  // Proceso de filtracion
  const filtros: any = {};
  if (dto._id) {
    filtros._id = dto._id;
  } else if (dto.porUsuarioProfesionayCliente) {
    filtros.idUsuarioProfesional = dto.porUsuarioProfesionayCliente.idUsuarioProfesional;
    filtros.idCliente = dto.porUsuarioProfesionayCliente.idCliente;
  } else if (dto.porProfesionalyCliente) {
    filtros.idUsuarioProfesional = dto.porUsuarioProfesionayCliente.idUsuarioProfesional;
    filtros.idCliente = dto.porUsuarioProfesionayCliente.idCliente;
  } else return null;

  // Obtener todos los servicios agendaes que tengan estado "habilitado" O "deshabilitado"
  filtros["$or"] = [
    { estado: "habilitado" },
  ];

  const modelMongoDB = await ContenidoEditorModel.findOne(filtros);
  if (!modelMongoDB) return null;
  return mongoToContenidoEditor(modelMongoDB);
};

export const actualizar = async (
  dto: ActualizarContenidoEditorDTO
): Promise<IContenidoEditor> => {
  const contenidoEditor: IContenidoEditor = await obtener(dto.buscarPor);
  if (!contenidoEditor) return null;

  await ContenidoEditorModel.updateOne(
    {
      _id: contenidoEditor._id,
    },
    dto.actualizado
  );

  return Object.assign(contenidoEditor, dto.actualizado);
};

