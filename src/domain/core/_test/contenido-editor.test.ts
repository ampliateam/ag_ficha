import { conexionConMongoDB } from "@global/connections/mongodb.connection";
import { services } from "@domain/services";

describe("CRUD - contenidoEditor", () => {
  const _id = "000000000000000000000000";
  const idUsuarioProfesional = "000000000000000000000004";
  const idProfesional = "000000000000000000000001";
  const idCliente = "000000000000000000000001";

  beforeAll(async () => {
    await conexionConMongoDB();
  });

  test('Crear - ContenidoEditor', async () => {
    // Creamos un nuevo servicio de agenda
    const contenidoEditorNuevo = await services.core.contenidoEditor.crud.crear(
      {
        contenidoEditor: {
          _id,
          fechaCreacion: new Date(),
          fechaEliminacion: null,
          idUsuarioProfesional,
          idProfesional,
          idCliente,
          contenido: "Hola que tal",
          estado: "habilitado",
        },
      }
    );

    expect(contenidoEditorNuevo._id).toEqual(_id);
  });

  test("Obtener contenidoEditor", async () => {
    // Obtenemos el servicio de un agenda
    const contenidoEditor = await services.core.contenidoEditor.crud.obtener({
      _id,
    });

    expect(contenidoEditor._id).toEqual(_id);
  });

  test("Actualizar contenidoEditor", async () => {
    // Obtenemos el servicio de un agenda
    const contenidoEditor = await services.core.contenidoEditor.crud.actualizar(
      {
        buscarPor: { _id },
        actualizado: {
          contenido: "Todo bien y vos",
        },
      }
    );

    expect(contenidoEditor._id).toEqual(_id);
  });
});
