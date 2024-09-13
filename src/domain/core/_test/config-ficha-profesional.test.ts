import { conexionConMongoDB } from "@global/connections/mongodb.connection";
import { services } from "@domain/services";

describe.skip("CRUD - configFichaProfesional", () => {
  const _id = "000000000000000000000000";
  const idUsuarioProfesional = "000000000000000000000004";
  const idProfesional = "000000000000000000000001";

  beforeAll(async () => {
    await conexionConMongoDB();
  });

  test.skip('Crear - ConfigFichaProfesional', async () => {
    // Creamos un nuevo servicio de agenda
    const configFichaProfesionalNuevo = await services.core.configFichaProfesional.crud.crear(
      {
        configFichaProfesional: {
          _id,
          fechaCreacion: new Date(),
          idUsuarioProfesional,
          idProfesional,
          contenido: ['osdiwiufwfieifiwefwfnj'],
        },
      }
    );
    console.log('configFichaProfesionalNuevo',configFichaProfesionalNuevo)
    expect(configFichaProfesionalNuevo._id).toEqual(_id);
  });

  test.skip("Obtener configFichaProfesional", async () => {
    // Obtenemos el servicio de un agenda
    const configFichaProfesional = await services.core.configFichaProfesional.crud.obtener({
      _id,
    });

    expect(configFichaProfesional._id).toEqual(_id);
  });

  test.skip("Actualizar configFichaProfesional", async () => {
    // Obtenemos el servicio de un agenda
    const configFichaProfesional = await services.core.configFichaProfesional.crud.actualizar(
      {
        buscarPor: { _id },
        actualizado: {
          contenido: ['panchooo'],
        },
      }
    );

    expect(configFichaProfesional._id).toEqual(_id);
  });
});
