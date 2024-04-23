
export interface IDatosPaciente {}

export interface IHistoriaMedica {}

export interface IHistoriaOdontologica {}

export interface ITratamiento {}

export interface IOdontograma {}

export interface IFichaOdontologica {
  datosPaciente: IDatosPaciente;
  historiaMedica: IHistoriaMedica;
  historiaOdontologica: IHistoriaOdontologica;
  tratamientos: ITratamiento;
  odontograma: IOdontograma;
}

export interface IFichaOdontologicaOpcional {
  datosPacient?: IDatosPaciente;
  historiaMedica?: IHistoriaMedica;
  historiaOdontologica?: IHistoriaOdontologica;
  tratamientos?: ITratamiento;
  odontograma?: IOdontograma;
}