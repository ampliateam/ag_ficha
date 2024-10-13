import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class CrearConfigFichaProfesionalDTO {
  @IsString()
  @IsNotEmpty({ message: 'El idProfesional no puede estar vacío' })
  idProfesional: string;
  
  @IsArray()
  @IsNotEmpty({ message: 'La listaFormularioHabilitado no puede estar vacío' })
  listaFormularioHabilitado: Array<string>;

  constructor (dto: any) {
    this.idProfesional = dto.idProfesional;
    this.listaFormularioHabilitado = dto.listaFormularioHabilitado;
  }

  toObject () {
    return {
      idProfesional: this.idProfesional,
      listaFormularioHabilitado: this.listaFormularioHabilitado,
    };
  }
}