const datesModule = require("..boilerplate/getDate");
const minMaxDate = require("../solutions/promises");

jest.mock(`./getDate`, () => ({
  getDate: jest.fn(() => Promise.resolve()),
}));

describe("minMaxDate", () => {
  it("get min max date", async () => {
    datesModule.getDate
      .mockImplementationOnce(() => Promise.resolve(new Date("01-01-2023")))
      .mockImplementationOnce(() => Promise.resolve(new Date("06-01-2023")))
      .mockImplementationOnce(() => Promise.resolve(new Date("12-01-2023")));
    const result = await minMaxDate(3);
    console.log(result);
    expect(result.minDate.getTime()).toBe(new Date("01-01-2023").getTime());
    expect(result.maxDate.getTime()).toBe(new Date("12-01-2023").getTime());
  });
});
