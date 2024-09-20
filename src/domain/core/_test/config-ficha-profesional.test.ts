import { conexionConMongoDB } from '@global/connections/mongodb.connection';
import { services } from '@domain/services';

describe('CRUD - configFichaProfesional', () => {
  const ids = [
    '66eda55ecd908886150187bf',
    '66eda572b95745c49a75cda0',
    '66eda5aab4038a35cf09d67f',
  ];

  beforeAll(async () => {
    await conexionConMongoDB();
  });

  test.skip('Crear', async () => {
    const objNuevo = await services.core.configFichaProfesional.crud.crear({
      configFichaProfesional: {
        idProfesional: 'profesional-000000000002',
        listaFormularioHabilitado: ['datos-cliente'],
        fechaCreacion: new Date(),
      },
    });

    expect(objNuevo).toBeTruthy();
  });

  test.skip('Obtener', async () => {
    const [
      dataCrud,
      [dataDb],
      listaDb,
    ] = await Promise.all([
      services.core.configFichaProfesional.crud.obtener({ _id: ids[0] }),
      services.core.configFichaProfesional.db.obtener({ _id: ids[1] }),
      services.core.configFichaProfesional.db.obtener({ _id: { '$in': ids } }),
    ]);

    expect(dataCrud._id).toEqual(ids[0]);
    expect(dataDb._id).toEqual(ids[1]);
    listaDb.map(obj => {
      expect(ids).toContain(obj._id);
    });
  });

  test.skip('Actualizar', async () => {
    const objActualizado = await services.core.configFichaProfesional.crud.actualizar({
      buscarPor: { _id: ids[0] },
      actualizado: {
        listaFormularioHabilitado: ['datos-cliente', 'odontograma'],
      },
    });

    expect(objActualizado._id).toEqual(ids[0]);
    expect(objActualizado.listaFormularioHabilitado).toContain('odontograma');
  });
});
