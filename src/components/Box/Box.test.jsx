// Filename: ./src/components/Box/Box.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Box } from "./Box";

describe("Box component", () => {
  it("renders Box with correct text", () => {
    render(<Box a11yTitle="Accessible Box">Hello World</Box>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("renders Box with correct aria-label", () => {
    render(<Box a11yTitle="Accessible Box">Content</Box>);
    expect(screen.getByLabelText("Accessible Box")).toBeInTheDocument();
  });

  it("triggers onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Box onClick={handleClick}>Click Me</Box>);
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies styles correctly based on props", () => {
    const { container } = render(
      <Box margin="10px" background="red" pad="20px" round="5px">
        Content
      </Box>
    );
    expect(container.firstChild).toHaveStyle({
      margin: "10px",
      background: "red",
      padding: "20px",
      borderRadius: "5px",
    });
  });
});
