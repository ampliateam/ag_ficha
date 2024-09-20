import { envs } from './envs';

const constantes = {
  codigoServicioPrincipal: 'ag_ficha',
  nombreStore: {
    parametroSistema: 'ParametrosSistema',
    ficha: 'Fichas',
    fichaContenidoEditor: 'FichaContenidoEditor',
    configFichaProfesional: 'ConfigFichaProfesional'
  },
  parametroBusqueda: {
    baseUrlAgUsuario: 'base_url_ag_usuario',
    baseUrlAgCliente: 'base_url_ag_cliente',
    baseUrlAgProfesional: 'base_url_ag_profesional',
    baseUrlAgAgenda: 'base_url_ag_ficha',
  },
};

if (envs.modoTest) {
  constantes.nombreStore.parametroSistema += '_test';
  constantes.nombreStore.ficha += '_test';
  constantes.nombreStore.fichaContenidoEditor += '_test';
}

export const constants = constantes;
