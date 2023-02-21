const datesModule = require(".getDate");
const minMaxDate = require("./minMaxDate");

describe("minMaxDate", () => {
  it("get min max date", () => {
    const result =  minMaxDate(3);

    expect(result.minDate.getTime()).toBe(new Date("01-01-2023").getTime());
    expect(result.maxDate.getTime()).toBe(new Date("12-01-2023").getTime());
  });
});
