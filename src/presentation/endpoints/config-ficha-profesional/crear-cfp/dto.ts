import { IsOptional, IsString, IsNotEmpty, IsArray } from 'class-validator';

export class CrearConfigFichaProfesionalDTO {
  @IsString()
  @IsNotEmpty({ message: 'El idProfesional no puede estar vacío' })
  idProfesional: string;
  
  @IsOptional()
  @IsArray()
  listaFormularioHabilitado?: string[];

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