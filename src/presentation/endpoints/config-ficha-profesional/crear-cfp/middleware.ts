import { NextFunction, Request, Response } from "express";
import { validarDTO } from "@presentation/_helpers";
import { CrearConfigFichaProfesionalDTO } from "./dto";

export const verificarCreacion = (req: Request, res: Response, next: NextFunction) => {
  try {
    const dto = new CrearConfigFichaProfesionalDTO({
      idProfesional: req.body.idProfesional,
      listaFormularioHabilitado: req.body.listaFormularioHabilitado,
    });

    // Verificar DTO
    validarDTO(dto);

    // Realizar otras verificaciones
    // ...

    // Construir datos
    req.personalizado.extra.dto = dto.toObject();

    next();
  } catch (error) {
    next(error);
  }
};