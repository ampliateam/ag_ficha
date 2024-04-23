import { Schema, Types, model } from "mongoose";
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
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false,
  }
);

// Duplicate the ID field.
FichaSchema.virtual("id").set(function (v: string) {
  this._id = new Types.ObjectId(v);
});
FichaSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

export const FichaModel = model(constants.nombreStore.ficha, FichaSchema);
