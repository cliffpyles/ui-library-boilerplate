import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import "regenerator-runtime/runtime";
import "@testing-library/jest-dom";

import { ComponentLibrary } from "../../../components/ComponentLibrary";
import { ResponsiveContext } from "..";

describe("ResponsiveContext", () => {
  describe("when viewport width is 768px", () => {
    beforeEach(() => {
      vi.spyOn(document.body, "clientWidth", "get").mockImplementation(() => 768);
    });

    test("should return small", () => {
      const { container } = render(
        <ComponentLibrary>
        <ResponsiveContext.Consumer>{(size) => size
    }</ResponsiveContext.Consumer>
    < /ComponentLibrary>
    );

    expect(screen.getByText("small")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("when viewport width is 1536px", () => {
  beforeEach(() => {
    vi.spyOn(document.body, "clientWidth", "get").mockImplementation(() => 1536);
  });

  test("should return medium", () => {
    const { container } = render(
      <ComponentLibrary>
      <ResponsiveContext.Consumer>{(size) => size
  }</ResponsiveContext.Consumer>
  < /ComponentLibrary>
  );

  expect(screen.getByText("medium")).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
});
  });

describe("when viewport width is 1537px", () => {
  beforeEach(() => {
    vi.spyOn(document.body, "clientWidth", "get").mockImplementation(() => 1537);
  });

  test("should return large", () => {
    const { container } = render(
      <ComponentLibrary>
      <ResponsiveContext.Consumer>{(size) => size
  }</ResponsiveContext.Consumer>
  < /ComponentLibrary>
  );

  expect(screen.getByText("large")).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
});
  });
});
