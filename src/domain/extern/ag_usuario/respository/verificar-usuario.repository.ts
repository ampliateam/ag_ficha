import { manejadorDeErrorAgendalia } from "@domain/_errors";
import * as axios from "@domain/_connections/axios";
import { IAutenticacionExterno, IAutenticacionPersona, IUsuario } from "@global/models/ag_usuario";
import { ICredencialUsuario } from "@global/models/_system";
import { formatearCredencialesHeaders } from "@domain/_helpers";

// Referenciar el manejador de error correspondiente
const manejadorDeError = manejadorDeErrorAgendalia;

export const verificarUsuarioPersona = async (cu: ICredencialUsuario) => {
  try {
    const credencialHeaders = formatearCredencialesHeaders(cu);
    const response = await axios.ag_usuario.post('/auth/verificar-persona', {}, {
      headers: { ...credencialHeaders }
    });

    return {
      tipo: response.data.resultado.tipo as string,
      usuario: response.data.resultado.usuario as IUsuario,
      persona: {
        autenticacion: response.data.resultado.persona.autenticacion as IAutenticacionPersona,
        token: response.data.resultado.persona.token as string,
      }
    };
  } catch (error) {
    return manejadorDeError(error);
  }
};

export const verificarUsuarioExterno = async (cu: ICredencialUsuario) => {
  try {
    const credencialHeaders = formatearCredencialesHeaders(cu);
    const response = await axios.ag_usuario.post('/auth/verificar-externo', {}, {
      headers: { ...credencialHeaders }
    });

    return {
      tipo: response.data.resultado.tipo as string,
      usuario: response.data.resultado.usuario as IUsuario,
      externo: {
        autenticacion: response.data.resultado.externo.autenticacion as IAutenticacionExterno,
        identificacion: {
          publicKey: response.data.resultado.externo.identificacion.publicKey as string,
          timestamp: response.data.resultado.externo.identificacion.timestamp as number,
          signature: response.data.resultado.externo.identificacion.signature as string,
        },
      }
    };
  } catch (error) {
    return manejadorDeError(error);
  }
};
