export interface IConfigFichaProfesional {
  _id: string;
  idUsuarioProfesional: string;
  idProfesional: string;
  contenido: Array<string>;
  fechaCreacion: Date;
}

export interface IConfigFichaProfesionalOpcional {
  _id?: string;
  idUsuarioProfesional?: string;
  idProfesional?: string;
  contenido?: Array<string>;
  fechaCreacion?: Date;
}