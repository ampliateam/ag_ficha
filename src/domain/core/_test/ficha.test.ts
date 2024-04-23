import { conexionConMongoDB } from "@global/connections/mongodb.connection";
import { services } from "@domain/services";

describe("CRUD - Agenda", () => {
  const idUsuarioProfesional = "123456";
  const idProfesional = "000000000000000000000001";
  const id = "000000000000000000000000";
  const idCliente = "000000000000000000000001";

  beforeAll(async () => {
    await conexionConMongoDB();

    // Eliminamos los usuarios de prueba
    const fichaExistente = await services.core.ficha.crud.obtener({
      porUsuarioProfesionayCliente: {
        idUsuarioProfesional,
        idCliente,
      },
    });
    if (fichaExistente) {
      await services.core.ficha.crud.eliminar({
        porUsuarioProfesionayCliente: {
          idUsuarioProfesional,
          idCliente,
        },
      });
    }

    // Crear un ficha
    const fichaNuevo = await services.core.ficha.crud.crear({
      ficha: {
        id,
        idUsuarioProfesional,
        idProfesional,
        idCliente,
        tipoFicha: "odontologica",
        datosFicha: {
          datosPaciente: undefined,
          historiaMedica: undefined,
          historiaOdontologica: undefined,
          tratamientos: undefined,
          odontograma: undefined
        },
        estado: "habilitado",
        fechaCreacion: new Date(),
        fechaEliminacion: undefined,
      },
    });

    expect(fichaNuevo.id).toEqual(id);
  });

  test("Obtener ficha", async () => {
    // Obtener ficha
    const ficha = await services.core.ficha.crud.obtener({
      porUsuarioProfesionayCliente: {
        idUsuarioProfesional,
        idCliente,
      },
    });

    expect(ficha.id).toEqual(id);
  });
  test("Actualizar ficha", async () => {
    // Obtener ficha
    const ficha = await services.core.ficha.crud.actualizar({
      buscarPor: { id },
      actualizado: {
        datosFicha: {
          datosPaciente: undefined,
          historiaMedica: undefined,
          historiaOdontologica: undefined,
          tratamientos: undefined,
          odontograma: undefined
        }
      },
    });

    expect(ficha.id).toEqual(id);
  });
});
