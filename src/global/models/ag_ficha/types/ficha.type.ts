export type TTipoFicha =
  | 'odontologia'
  | 'nutricion'
  | 'entrenamiento'
  | 'psicologia';

export type TFichaEstado =
  | 'habilitado'
  | 'deshabilitado';

export type TFichaDatosFormularioTipo =
  | 'datos-cliente'
  | 'historia-medica'
  | 'historia-odontologica'
  | 'odontograma';

export type TDatosFormulario = {
  tipo: TFichaDatosFormularioTipo;
  datos: any;
};