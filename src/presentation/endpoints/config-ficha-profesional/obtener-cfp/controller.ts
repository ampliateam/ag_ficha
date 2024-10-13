import { NextFunction, Request, Response } from "express";
import { services } from "@domain/services";
import { generarRespuestaServidor } from "@presentation/_helpers";
import { generarErrorCapaPresentation } from "@presentation/_errors";

export const obtenerCFP = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      _id,
      idProfesional,
    } = req.query;

    const filtro = {};
    if (_id) filtro['_id'] = _id
    else if (idProfesional) filtro['idProfesional'] = idProfesional
    else {
      throw generarErrorCapaPresentation({
        estado: 400, 
        codigo: 'faltan_datos', 
        mensajeServidor: 'No hay datos de [_id] o [idProfesional] para realizar la busqueda.', 
        mensajeCliente: 'No hay datos para realizar la busqueda.', 
        resultado: null
      });
    };
    const configFichaProfesional = await services.core.configFichaProfesional.crud.obtener(filtro);
    if (!configFichaProfesional) {
      const respuestaServidor = generarRespuestaServidor({
        exito: true,
        mensaje: 'No existe el Config Ficha Profesional.',
        resultado: null,
      });

      return res.json(respuestaServidor);
    }

    // Elimiar datos sencibles
    // ...

    const respuestaServidor = generarRespuestaServidor({
      exito: true,
      mensaje: 'Se obtuvo el configFichaProfesional de forma correcta.',
      resultado: configFichaProfesional,
    });

    return res.json(respuestaServidor);
  } catch (error) {
    return next(error);
  }
}
