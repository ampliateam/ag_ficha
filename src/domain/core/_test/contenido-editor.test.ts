import { conexionConMongoDB } from "@global/connections/mongodb.connection";
import { services } from "@domain/services";

describe("CRUD - contenidoEditor", () => {
  const id = "000000000000000000000000";
  const idUsuarioProfesional = "000000000000000000000004";
  const idProfesional = "000000000000000000000001";
  const idCliente = "000000000000000000000001";

  beforeAll(async () => {
    await conexionConMongoDB();

    // Obtenemos el servicio de un contenidoEditor y eliminar si existe
    const contenidoEditorExistente =
      await services.core.contenidoEditor.crud.obtener({
        id,
      });
    if (contenidoEditorExistente) {
      await services.core.contenidoEditor.crud.eliminarLogicamente({
        buscarPor: { id },
        fechaEliminacion: new Date(),
      });
    }

    // Creamos un nuevo servicio de agenda
    const contenidoEditorNuevo = await services.core.contenidoEditor.crud.crear(
      {
        contenidoEditor: {
          id,
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

    expect(contenidoEditorNuevo.id).toEqual(id);
  });

  test("Obtener contenidoEditor", async () => {
    // Obtenemos el servicio de un agenda
    const contenidoEditor = await services.core.contenidoEditor.crud.obtener({
      id,
    });

    expect(contenidoEditor.id).toEqual(id);
  });

  test("Actualizar contenidoEditor", async () => {
    // Obtenemos el servicio de un agenda
    const contenidoEditor = await services.core.contenidoEditor.crud.actualizar(
      {
        buscarPor: { id },
        actualizado: {
          contenido: "Todo bien y vos",
        },
      }
    );

    expect(contenidoEditor.id).toEqual(id);
  });

  test("Obtener lista servicio contenidoEditor", async () => {
    const listaId = ["000000000000000000000000"];

    // Obtener lista de servicios agendaes
    const lista = await services.core.contenidoEditor.obtenerListaPorID(
      listaId
    );

    // Si no existe ningun servicio agenda, verificar
    if (!lista.length) {
      return expect(lista.length).toEqual(0);
    }

    // Verificar lista de id de servicios agendaes
    for (const id of listaId) {
      expect(lista.find((v) => v.id === id)?.id || "").toEqual(id);
    }
  });
});
