import { describe, it, expect } from "vitest";
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("A Truthy statement", () => {
  it("should be equal to 2", () => {
    expect(1 + 1).toEqual(2);
  });

  it("should be equal to 3", () => {
    expect(1 + 2).toEqual(3);
  });
});

describe("App Component Test", () => {
  it("should render App component", () => {
    // render(<App />);
    // screen.debug();
  });
});
