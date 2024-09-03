import { Schema, model } from "mongoose";
import { constants } from "@global/configs/constants";

// // Guardar el valor por defecto de cada campo aqui
const defaultValue = {
  fechaEliminacion: null,
};

const ContenidoEditorSchema = new Schema(
  {
    idUsuarioProfesional: { type: String, required: true },
    idProfesional: { type: String, required: true },
    idCliente: { type: String, required: true },
    contenido: { type: String, required: true },
    estado: { type: String, required: true },
    fechaCreacion: { type: Date, required: true },
    fechaEliminacion: { type: Date, required: false, defaultValue: defaultValue.fechaEliminacion},
  }, { versionKey: false }
);

// Crear un índice único compuesto
ContenidoEditorSchema.index({
  idProfesional: 1,
  idCliente: 1,
  estado: 1,
}, {
  unique: true,
  partialFilterExpression: { estado: { $in: ['habilitado', 'deshabilitado'] } }
});

ContenidoEditorSchema.pre("findOneAndDelete", (next, opts) => {
  try {
    opts.next();
  } catch (error) {
    next(error);
  }
});

export const ContenidoEditorModel = model(
  constants.nombreStore.contenidoEditor,
  ContenidoEditorSchema
);
