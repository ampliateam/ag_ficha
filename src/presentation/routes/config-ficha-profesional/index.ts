import { Router } from 'express';
import { mwVerificarPS } from '@presentation/_middlewares';
import * as cfp from '@presentation/endpoints/config-ficha-profesional';

const router = Router();

// Crea un config ficha profesional
router.post('/', [
  mwVerificarPS({ tps: ['persona'] }),
  ...cfp.crearCfp.list
]);

// Obtiene un config ficha segun filtros de query params
router.get('/', [
  mwVerificarPS(),
  ...cfp.obtenerCfp.list
]);

export default router;