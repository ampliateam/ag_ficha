import { Schema, model, Document } from 'mongoose';
import { constants } from '@global/configs/constants';
import { TDatosFormulario, TFichaEstado } from '@global/models/types';
import { IFicha } from '@global/models/interfaces';

// Definir la interfaz para el documento
interface IFichaMongoose extends Document, Omit<IFicha, '_id'> {};

// Guardar el valor por defecto de cada campo aqui (para los required=false)
const dv = {
  datosFormulario: [{
    tipo: 'datos-cliente',
    datos: {}
  }] as TDatosFormulario[],
  estado: 'habilitado' as TFichaEstado,
  fechaCreacion: Date.now,
};

// Schema de mongoose
const FichaSchema = new Schema<IFichaMongoose>({
  idProfesional: { type: String, required: true },
  idCliente: { type: String, required: true, unique: true },
  tipoFicha: { type: String, required: true },
  datosFormulario: { type: [Object], required: false, default: dv.datosFormulario },
  estado: { type: String, required: false, default: dv.estado },
  fechaCreacion: { type: Date, required: false, default: dv.fechaCreacion },
}, { versionKey: false });

// Crear un índice único compuesto
FichaSchema.index({
  idProfesional: 1,
  idCliente: 1,
  estado: 1,
}, {
  unique: true,
  partialFilterExpression: { estado: { $in: ['habilitado', 'deshabilitado'] } }
});

export const FichaModel = model<IFichaMongoose>(constants.nombreStore.ficha, FichaSchema);

