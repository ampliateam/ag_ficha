import { Schema, model, Document } from 'mongoose';
import { constants } from '@global/configs/constants';
import { IFichaContenidoEditor } from '@global/models/interfaces';

// Definir la interfaz para el documento
interface IFichaContenidoEditorMongoose extends Document, Omit<IFichaContenidoEditor, '_id'> {};

// Guardar el valor por defecto de cada campo aqui (para los required=false)
const dv = {
  contenido: '',
  fechaCreacion: Date.now,
};

// Schema de mongoose
const FichaContenidoEditorSchema = new Schema<IFichaContenidoEditorMongoose>({
  idFicha: { type: String, required: true, unique: true },
  contenido: { type: String, required: false, default: dv.contenido },
  fechaCreacion: { type: Date, required: false, default: dv.fechaCreacion },
}, { versionKey: false });

export const FichaContenidoEditorModel = model<IFichaContenidoEditorMongoose>(
  constants.nombreStore.fichaContenidoEditor,
  FichaContenidoEditorSchema
);
