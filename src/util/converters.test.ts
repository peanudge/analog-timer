import { convertTimeToHourDeg, convertTimeToMinuteDeg } from "./converters";

describe("Converting hour hand degree of timer", () => {
  test("0h 0m must be converted as 0deg", () => {
    expect(convertTimeToMinuteDeg(0, 0)).toEqual(0);
  });
  test("1h must be converted as 30deg", () => {
    expect(convertTimeToHourDeg(1, 0)).toEqual(30);
  });
  test("1h 30m must be converted as 45deg", () => {
    expect(convertTimeToHourDeg(1, 30)).toEqual(45);
  });
  test("6h must be converted as 180deg", () => {
    expect(convertTimeToHourDeg(6, 0)).toEqual(180);
  });
  test("12h must be converted as 360deg", () => {
    expect(convertTimeToHourDeg(12, 0)).toEqual(360);
  });
  test("24h must be converted as 720deg", () => {
    expect(convertTimeToHourDeg(24, 0)).toEqual(720);
  });
});

describe("Converting minute hand degree of timer", () => {
  test("0m 0s must be converted as 0deg", () => {
    expect(convertTimeToMinuteDeg(0, 0)).toEqual(0);
  });
  test("1m must be converted as 6deg", () => {
    expect(convertTimeToMinuteDeg(1, 0)).toEqual(6);
  });
  test("1m 30s must be converted as 9deg", () => {
    expect(convertTimeToMinuteDeg(1, 30)).toEqual(9);
  });
  test("30m must be converted as 180deg", () => {
    expect(convertTimeToMinuteDeg(30, 0)).toEqual(180);
  });
  test("60m must be converted as 360deg", () => {
    expect(convertTimeToMinuteDeg(60, 0)).toEqual(360);
  });
  test("120m must be converted as 720deg", () => {
    expect(convertTimeToMinuteDeg(120, 0)).toEqual(720);
  });
});

describe("Converting second hand degree of timer", () => {
  test("1s must be converted as 6deg", () => {
    expect(convertTimeToMinuteDeg(1)).toEqual(6);
  });
  test("30s must be converted as 9deg", () => {
    expect(convertTimeToMinuteDeg(30)).toEqual(180);
  });
  test("60s must be converted as 180deg", () => {
    expect(convertTimeToMinuteDeg(60)).toEqual(360);
  });
  test("90s must be converted as 270deg", () => {
    expect(convertTimeToMinuteDeg(90)).toEqual(540);
  });
  test("120s must be converted as 720deg", () => {
    expect(convertTimeToMinuteDeg(120)).toEqual(720);
  });
});
