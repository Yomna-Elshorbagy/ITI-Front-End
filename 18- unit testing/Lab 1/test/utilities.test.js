let { random, removeDuplicates, stringReverse } = require("../js/utilities");

describe("random function:", () => {
  test("return a number", () => {
    let result = random(1, 10);
    expect(typeof result).toBe("number");
  });

  test("return a number within range 5 : 7", () => {
    let result = random(5, 7);
    expect(result).toBeGreaterThanOrEqual(5);
    expect(result).toBeLessThanOrEqual(7);
  });

  test("should return NaN when passing 3", () => {
    let result = random(3);
    expect(result).toBeNaN();
  });
});

describe("remove duplicates function:", () => {
  test("should return an array", () => {
    let result = removeDuplicates([10, 20, 30, 40]);
    expect(result).toBeInstanceOf(Array);
  });

  test("should return array length", () => {
    let result = removeDuplicates([10, 20, 30, 40]);
    expect(result.length).toBe(4);
  });

  test("should return array with unique elements", () => {
    let result = removeDuplicates([1, 2, 2, 3, 3, 4]);
    let duplicate = result.some((item, index) => result.indexOf(item) !== index);
    expect(duplicate).toBe(false);
  });
});

describe("stringReverse function:", () => {
  test("should return a string type", () => {
    let result = stringReverse("yomna");
    expect(typeof result).toBe("string");
  });

  test('should return the reversed string', () => {
    let result = stringReverse("yomna");
    expect(result).toBe("anmoy");
  });

  test("should return the same number parameter char", () => {
    let input = "yomna";
    let result = stringReverse(input);
    expect(result.length).toBe(input.length);
  });
});
