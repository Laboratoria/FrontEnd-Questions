const {getFact} = require("./getFact");
const {factStats} = require("./asynAwait")

jest.mock(`./getFact`, () => ({
  getFact: jest.fn(() => Promise.resolve()),
}));

describe("factStats", () => {
  it("el fact mas nuevo debe ser 'Hola' y el fact mas largo es 'Soy el mas largo'", async () => {
    getFact
    .mockImplementationOnce(() => Promise.resolve({       
      "text": "hola",
      "createdAt": "1990-09-06",
      },))
    .mockImplementationOnce(() => Promise.resolve({       
      "text": "Soy el mas largo",
      "createdAt": "1980-09-06",
      }))
    .mockImplementationOnce(() => Promise.resolve({       
      "text": "Adios",
      "createdAt": "1970-09-06",
      }));
    const result =  await factStats(3);
    expect(result.newestFact.createdAt.getTime()).toBe(new Date('1990-09-06').getTime());
    expect(result.largestFact.fact).toBe('Soy el mas largo');
    expect(result.sumary.total).toBe(3);
  });

  it("Si no puede obtener facts debe arrojar la excepcion 'Algo salio y no pude trater los facts'", async () => {
    getFact
      .mockImplementationOnce(() => Promise.reject())
      try {
        await factStats(3)
      } catch (error) {
        expect(error.message).toBe('Algo salio y no pude trater los facts')
      }
  });
});
