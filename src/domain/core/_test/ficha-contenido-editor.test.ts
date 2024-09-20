import { conexionConMongoDB } from '@global/connections/mongodb.connection';
import { services } from '@domain/services';

describe('CRUD - contenidoEditor', () => {
  const ids = [
    '66edb99c321f393a5c910b8d',
    '66edb9af70df14033915c3ac',
    '66edb9e948d26ac35b4ce405',
  ];

  beforeAll(async () => {
    await conexionConMongoDB();
  });

  test.skip('Crear', async () => {
    // Creamos un nuevo objeto
    const objNuevo = await services.core.fichaContenidoEditor.crud.crear({
      fichaContenidoEditor: {
        idFicha: 'ficha-000000000000000002',
        contenido: 'Contenidoooo iniciaaal',
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
      services.core.fichaContenidoEditor.crud.obtener({ _id: ids[0] }),
      services.core.fichaContenidoEditor.db.obtener({ _id: ids[1] }),
      services.core.fichaContenidoEditor.db.obtener({ _id: { '$in': ids } }),
    ]);

    expect(dataCrud._id).toEqual(ids[0]);
    expect(dataDb._id).toEqual(ids[1]);
    listaDb.map(obj => {
      expect(ids).toContain(obj._id);
    });
  });

  test.skip('Actualizar', async () => {
    const objActualizado = await services.core.fichaContenidoEditor.crud.actualizar({
      buscarPor: { _id: ids[0] },
      actualizado: { contenido: 'Contenidoooo actualizadooo' },
    });

    expect(objActualizado._id).toEqual(ids[0]);
  });
});
