import { NextFunction, Request, Response } from "express";
import { services } from "@domain/services";
import { generarRespuestaServidor } from "@presentation/_helpers";

export const crearConfigFichaProfesional = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { dto } = req.personalizado.extra;

    const configFichaProfesional = await services.core.configFichaProfesional.crud.crear({
      configFichaProfesional: {
        idProfesional: dto.idProfesional,
        listaFormularioHabilitado: dto.listaFormularioHabilitado,
      }
    });

    const respuestaServidor = generarRespuestaServidor({
      exito: true,
      mensaje: 'Se creo el configFichaProfesional de forma correcta.',
      resultado: configFichaProfesional,
    });

    res.status(200).json(respuestaServidor);
  } catch (error) {
    next(error);
  }
}