const fn = require("./functions");

// describe("doubleANumber", () => {
//   it("Should return twice the received number", () => {
//     const params = 2;
//     const result = fn.doubleANumber(params);
//     expect(typeof params).toBe("number");
//     expect(typeof result).toBe("number");
//     expect(result).toBe(4);
//   });
// });

// describe("createFullName", () => {
//   it("Should return a full name combined", () => {
//     const params = ["Luan", "Diniz"];
//     const result = fn.createFullName(...params);
//     const splited = result.split(" ");
//     expect(typeof result[0] && typeof result[1]).toBe("string");
//     expect(result).toMatch(params[0], params[1]);
//   });
// });
// describe("calculateTheLenghtOfAString2", () => {
//   it("Should return the string length", () => {
//     const params = "Tamanho";
//     const result = fn.calculateTheLenghtOfAString2("Tamanho");
//     expect(typeof params).toBe("string");
//     expect(params.length).toBe(result);
//   });
// });

// describe("numbersArrayIntoString", () => {
//   it("deve retornar um ??", () => {
//     const params = [1, 2, 3, 4, 5, 6, 7, 8];
//     const result = fn.numbersArrayIntoString(params);
//     expect(typeof Number(params)).toBe("number");
//     expect(result.includes(".")).toBe(true);
//   });
// });

describe("addNewLanguage", () => {
  it("Adiciona uma nova lingua no objeto", () => {
    const params = {
      languages: ["JavaScript", "Python", "Ruby"],
      isChallenging: true,
      isRewarding: true,
      difficulty: 8,
      jokes:
        "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
    };
    const length = params.languages.length;
    const result = fn.addNewLanguage(params, "Swift");
    expect(typeof params === "object");
    expect(result.languages.includes("Swift")).toBe(true);
    expect(result.languages.length).toBe(length + 1);
  });
});
