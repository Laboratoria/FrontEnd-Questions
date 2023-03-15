const factStats = require("../factStats");

describe("factStats", () => {
  it("el fact mas nuevo debe ser 'Hola' y el fact mas largo es 'Soy el mas largo'", () => {
    const result =  factStats(3);

    expect(result.newestFact.name).toBe('Hola');
    expect(result.largestFact).toBe('Soy el mas largo');
    expect(result.sumary.total).toBe(3);
  });
});
