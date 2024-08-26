import { Schema, model } from "mongoose";
import { constants } from "@global/configs/constants";

// Guardar el valor por defecto de cada campo aqui

const FichaSchema = new Schema(
  {
    idUsuarioProfesional: { type: String, required: true },
    idProfesional: { type: String, required: true },
    idCliente: { type: String, required: true },
    tipoFicha: { type: String, required: true },
    datosFicha: { type: Object, required: true },
    estado: { type: String, required: true },
    fechaCreacion: { type: Date, required: true },
    fechaEliminacion: { type: Date, required: false },
  },
  { versionKey: false }
);

export const FichaModel = model(constants.nombreStore.ficha, FichaSchema);
