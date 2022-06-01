import areSame from "../src/are-same";

describe("areSame", () => {
  test("should return false for different type", () => {
    expect(areSame(42, "The quick brown fox jumps over the lazy dog"));
  });

  test("should return true for same boolean", () => {
    const x = true;
    const y = true;

    expect(areSame(x, y)).toBe(true);
  });

  test("should return false for different boolean", () => {
    const x = false;
    const y = true;

    expect(areSame(x, y)).toBe(false);
  });

  test("should return true for null", () => {
    const x = null;
    const y = null;

    expect(areSame(x, y)).toBe(true);
  });

  test("should return true for undefined", () => {
    const x = undefined;
    const y = undefined;

    expect(areSame(x, y)).toBe(true);
  });

  test("should return true for same number", () => {
    const x = 42;
    const y = 42;

    expect(areSame(x, y)).toBe(true);
  });

  test("should return false for different number", () => {
    const x = 0;
    const y = 42;

    expect(areSame(x, y)).toBe(false);
  });

  test("should return true for same big int", () => {
    const x = BigInt(42);
    const y = BigInt(42);

    expect(areSame(x, y)).toBe(true);
  });

  test("should return false for different big int", () => {
    const x = BigInt(0);
    const y = BigInt(42);

    expect(areSame(x, y)).toBe(false);
  });

  test("should return true for same string", () => {
    const x = "The quick brown fox jumps over the lazy dog";
    const y = "The quick brown fox jumps over the lazy dog";

    expect(areSame(x, y)).toBe(true);
  });

  test("should return false for different string", () => {
    const x = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
    const y = "The quick brown fox jumps over the lazy dog";

    expect(areSame(x, y)).toBe(false);
  });

  test("should return false for same symbol", () => {
    const x = Symbol("foo");
    const y = Symbol("foo");

    expect(areSame(x, y)).toBe(false);
  });

  test("should return true for same object", () => {
    const x = { foo: "bar" };
    const y = { foo: "bar" };

    expect(areSame(x, y)).toBe(true);
  });

  test("should return true for same object but one is a class instance", () => {
    class TestClass {
      constructor(readonly n: number) {}
    }

    const x = new TestClass(42);
    const y = { n: 42 };

    expect(areSame(x, y)).toBe(true);
  });

  test("should return false for different object", () => {
    const x = { n: 42 };
    const y = { foo: "bar" };

    expect(areSame(x, y)).toBe(false);
  });

  test("should return false for same object with extra property", () => {
    const x = { foo: "bar", n: 42 };
    const y = { foo: "bar" };

    expect(areSame(x, y)).toBe(false);
  });

  test("should return true for same date", () => {
    const x = new Date(2022, 5, 1, 9, 34);
    const y = new Date(2022, 5, 1, 9, 34);

    expect(areSame(x, y)).toBe(true);
  });

  test("should return false for different date", () => {
    const x = new Date(2022, 5, 1, 9, 34, 1);
    const y = new Date(2022, 5, 1, 9, 34);

    expect(areSame(x, y)).toBe(false);
  });

  test("should return true for same array", () => {
    const x = [0, 1, 1, 2, 3, 5];
    const y = [0, 1, 1, 2, 3, 5];

    expect(areSame(x, y)).toBe(true);
  });

  test("should return false for different array", () => {
    const x = [0, 1, 1, 2, 3, 6];
    const y = [0, 1, 1, 2, 3, 5];

    expect(areSame(x, y)).toBe(false);
  });

  test("should return false for same array with extra element", () => {
    const x = [0, 1, 1, 2, 3, 5, 8];
    const y = [0, 1, 1, 2, 3, 5];

    expect(areSame(x, y)).toBe(false);
  });

  test("should return true for same map", () => {
    const x = new Map([
      [1, "one"],
      [2, "two"],
      [3, "three"],
    ]);
    const y = new Map([
      [1, "one"],
      [2, "two"],
      [3, "three"],
    ]);

    expect(areSame(x, y)).toBe(true);
  });

  test("should return false for different map", () => {
    const x = new Map([
      [1, "one"],
      [2, "two"],
      [3, "three"],
    ]);
    const y = new Map([
      [1, "a"],
      [2, "b"],
      [3, "c"],
    ]);

    expect(areSame(x, y)).toBe(false);
  });

  test("should return false for same map with different keys", () => {
    const x = new Map([
      [1, "one"],
      [2, "two"],
      [3, "three"],
    ]);
    const y = new Map([
      [3, "one"],
      [2, "two"],
      [1, "three"],
    ]);

    expect(areSame(x, y)).toBe(false);
  });

  test("should return false for same map with keys of different types", () => {
    const x = new Map([
      [1, "one"],
      [2, "two"],
      [3, "three"],
    ]);
    const y = new Map([
      ["1", "one"],
      ["2", "two"],
      ["3", "three"],
    ]);

    expect(areSame(x, y)).toBe(false);
  });

  test("should return true for same set", () => {
    const x = new Set([0, 1, 1, 2, 3, 5]);
    const y = new Set([0, 1, 1, 2, 3, 5]);

    expect(areSame(x, y)).toBe(true);
  });

  test("should return false for different set", () => {
    const x = new Set([0, 1, 1, 2, 3, 6]);
    const y = new Set([0, 1, 1, 2, 3, 5]);

    expect(areSame(x, y)).toBe(false);
  });

  test("should return false for same set with extra element", () => {
    const x = new Set([0, 1, 1, 2, 3, 5, 8]);
    const y = new Set([0, 1, 1, 2, 3, 5]);

    expect(areSame(x, y)).toBe(false);
  });

  test("should return true for complex object", () => {
    const x = {
      dob: new Date(2022, 5, 1, 9, 34),
      foo: "bar",
      n: 42,
      score: { values: [0, 1, 1, 2, 3, 5] },
    };
    const y = {
      dob: new Date(2022, 5, 1, 9, 34),
      foo: "bar",
      n: 42,
      score: { values: [0, 1, 1, 2, 3, 5] },
    };

    expect(areSame(x, y)).toBe(true);
  });
});
