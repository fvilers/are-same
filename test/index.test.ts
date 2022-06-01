import { jest } from "@jest/globals";
import sayHello from "../src";

describe("sayHello", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should say hello to the console", () => {
    // Arrange
    const spy = jest.spyOn(console, "log");

    // Act
    sayHello();

    // Assert
    expect(spy).toHaveBeenCalled();
  });
});
