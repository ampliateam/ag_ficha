import { Schema, model } from "mongoose";
import { constants } from "@global/configs/constants";

// // Guardar el valor por defecto de cada campo aqui

const ConfigFichaProfesionalSchema = new Schema(
  {
    idUsuarioProfesional: { type: String, required: true },
    idProfesional: { type: String, required: true, unique: true },
    contenido: { type: Array, required: true },
    fechaCreacion: { type: Date, required: true },
  }, { versionKey: false }
);

ConfigFichaProfesionalSchema.pre("findOneAndDelete", (next, opts) => {
  try {
    opts.next();
  } catch (error) {
    next(error);
  }
});

export const ConfigFichaProfesionalModel = model(
  constants.nombreStore.configFichaProfesional,
  ConfigFichaProfesionalSchema
);
