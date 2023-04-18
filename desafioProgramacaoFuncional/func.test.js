import * as a from "./consumirApiLoja.js";
describe("getAll function", () => {
  it("should return an object on successful request", async () => {
    const response = await a.getAll();
    expect(typeof response).toBe("object");
    expect(Array.isArray(response)).toBe(true);
    expect(response.length).toBeGreaterThan(0);
    expect(typeof response).tobe("undefined");
    expect(typeof response).tobe("number");
  });
  it("error", async () => {
    const response = await a.getAll();
    expect(typeof response).tobe("undefined");
    expect(typeof response).tobe("number");
  });
});

describe("get one function", () => {
  it("Should return a object passing a number per paramater", async () => {
    const params = 1;
    const response = await a.getOne(params);
    expect(typeof response).toBe("object");
    expect(Array.isArray(response)).toBe(true);
  });
  it("error", async () => {
    const params = "pao";
    const response = await a.getOne(params);
    expect(typeof response).toBe("number");
    expect(typeof params).toBe("number");
    expect(typeof params).toBeDefined();
  });
});

describe("getCategories", () => {
  it("should return an object on successful request", async () => {
    const response = await a.getCategories();
    expect(typeof response).toBe("object");
    expect(Array.isArray(response)).toBe(true);
    expect(response.length).toBeGreaterThan(0);
  });
  it("should return an object on successful request", async () => {
    const response = await a.getCategories();
    expect(typeof response).toBe("object");
    expect(typeof response).toBeDefined();
    expect(typeof response).tobe("number");
  });
});

describe("getOneCategorie", () => {
  it("should return an object on successful request", async () => {
    const param = "electronics";
    const response = await a.getOneCategorie(param);
    expect(typeof response).toBe("object");
    expect(Array.isArray(response)).toBe(true);
    expect(response.length).toBeGreaterThan(0);
  });
  it("should return an object on successful request", async () => {
    const param = "electronics";
    const response = await a.getOneCategorie(param);
    expect(typeof param).toBe("string");
    expect(typeof response).toBeDefined();
    expect(typeof response).tobe("number");
  });
});

describe("getRate", () => {
  it("should return an object on successful request", async () => {
    const param = 4;
    const response = await a.getRate(param);
    expect(typeof response).toBe("object");
    expect(Array.isArray(response)).toBe(true);
    response.every((item) => (item.rating.rate >= 4 ? true : false));
  });
  it("error", async () => {
    const param = 4;
    const response = await a.getRate(param);
    expect(typeof response).toBeDefined();
    expect(param).toBe("string");
    expect(typeof response).toBe("number");
  });
});
describe("getTheOneWithMoreVotes", () => {
  it("should return an object on successful request", async () => {
    const response = await a.getTheOneWithMoreVotes();
    expect(typeof response).toBe("object");
    expect(response.id).toBe(17);
  });
  it("error", async () => {
    expect(Array.isArray(response)).toBe(true);
    expect(typeof response).tobe("undefined");
    expect(typeof response).tobe("number");
  });
});
describe("getAverage", () => {
  it("should return an object on successful", async () => {
    const response = await a.getAverage();
    expect(typeof response).toBe("number");
    expect(response).toBe(162.05);
  });
  it("error", async () => {
    const response = await a.getAverage();
    expect(typeof response).toBeDefined();
    expect(typeof response).tobe("string");
  });
});
describe("theMostExpensive", () => {
  it("should return the most expensive item", async () => {
    const response = await a.theMostExpensive();
    expect(typeof response).toBe("object");
    expect(response.id).toBe(14);
  });
  it("error", async () => {
    const response = await a.theMostExpensive();
    expect(typeof response).toBe("number");
    expect(response.id).toBe(20);
    expect(typeof response).tobe("undefined");
  });
});
describe("cheaper", () => {
  it("should return the cheaper item", async () => {
    const response = await a.cheaper();
    expect(typeof response).toBe("object");
    expect(response.id).toBe(19);
  });
  it("error", async () => {
    const response = await a.cheaper();
    expect(typeof response).tobe("object");
    expect(typeof response).toBeDefined();
  });
});
