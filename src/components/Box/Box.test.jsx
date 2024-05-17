import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Box } from "./Box";

test("renders Box with correct text", () => {
  render(<Box a11yTitle="Accessible Box">Hello World</Box>);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
