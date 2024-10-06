import { Schema, model, Document } from 'mongoose';
import { constants } from '@global/configs/constants';
import { IConfigFichaProfesional, TFichaDatosFormularioTipo } from '@global/models/ag_ficha';

// Definir la interfaz para el documento
interface IConfigFichaProfesionalMongoose extends Document, Omit<IConfigFichaProfesional, '_id'> {};

// Guardar el valor por defecto de cada campo aqui (para los required=false)
const dv = {
  listaFormularioHabilitado: ['datos-cliente'] as TFichaDatosFormularioTipo[],
  fechaCreacion: Date.now,
};

// Schema de mongoose
const ConfigFichaProfesionalSchema = new Schema<IConfigFichaProfesionalMongoose>({
  idProfesional: { type: String, required: true, unique: true },
  listaFormularioHabilitado: { type: [String], required: false, default: dv.listaFormularioHabilitado },
  fechaCreacion: { type: Date, required: false, default: dv.fechaCreacion },
}, { versionKey: false });

export const ConfigFichaProfesionalModel = model<IConfigFichaProfesionalMongoose>(
  constants.nombreStore.configFichaProfesional,
  ConfigFichaProfesionalSchema
);
