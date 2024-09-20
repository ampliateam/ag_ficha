import { conexionConMongoDB } from '@global/connections/mongodb.connection';
import { services } from '@domain/services';

describe('CRUD - Ficha', () => {
  const ids = [
    '66edaa672c8db9c976524d35',
    '66edaa8fa6445ee475d2f6c0',
    '66edaaa3dd035ec8f8159e97',
  ];

  beforeAll(async () => {
    await conexionConMongoDB();
  });

  test.skip('Crear', async () => {
    const objNuevo = await services.core.ficha.crud.crear({
      ficha: {
        idProfesional: 'profesional-000000000000',
        idCliente: 'cliente-0000000000000002',
        tipoFicha: 'odontologia',
        // datosFormulario: [{
        //   tipo: 'datos-cliente',
        //   datos: {},
        // }],
        estado: 'habilitado',
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
      services.core.ficha.crud.obtener({ _id: ids[0] }),
      services.core.ficha.db.obtener({ _id: ids[1] }),
      services.core.ficha.db.obtener({ _id: { '$in': ids } }),
    ]);

    expect(dataCrud._id).toEqual(ids[0]);
    expect(dataDb._id).toEqual(ids[1]);
    listaDb.map(obj => {
      expect(ids).toContain(obj._id);
    });
  });

  test.skip('Actualizar', async () => {
    const objActualizado = await services.core.ficha.crud.actualizar({
      buscarPor: { _id: ids[0] },
      actualizado: {
        datosFormulario: [
          {
            tipo: 'datos-cliente',
            datos: { dato: null },
          },
          {
            tipo: 'odontograma',
            datos: { dato: null },
          },
        ]
      },
    });

    expect(objActualizado._id).toEqual(ids[0]);
  });
});
