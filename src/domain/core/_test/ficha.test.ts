import { conexionConMongoDB } from "@global/connections/mongodb.connection";
import { services } from "@domain/services";

describe("CRUD - Agenda", () => {
  const _id = "000000000000000000000000";
  const idUsuarioProfesional = "123456";
  const idProfesional = "000000000000000000000001";
  const idCliente = "000000000000000000000001";

  beforeAll(async () => {
    await conexionConMongoDB();
  });

  test('Crear - Ficha', async () => {
    // Crear un ficha
    const fichaNuevo = await services.core.ficha.crud.crear({
      ficha: {
        _id,
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

    expect(fichaNuevo._id).toEqual(_id);
  });

  test("Obtener ficha", async () => {
    // Obtener ficha
    const ficha = await services.core.ficha.crud.obtener({
      porUsuarioProfesionayCliente: {
        idUsuarioProfesional,
        idCliente,
      },
    });

    expect(ficha._id).toEqual(_id);
  });

  test("Actualizar ficha", async () => {
    // Obtener ficha
    const ficha = await services.core.ficha.crud.actualizar({
      buscarPor: { _id },
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

    expect(ficha._id).toEqual(_id);
  });
});
