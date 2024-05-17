// src/components/ThemeContext/ThemeContext.test.tsx
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ThemeContext } from "./ThemeContext";
import { themes } from "../../themes/themes";
import { Box } from "../";

describe.skip("ThemeContext", () => {
  it("should render with the branded theme", () => {
    const { getByText } = render(
      <ThemeContext theme={themes.branded}>
        <Box>Content with branded theme</Box>
      </ThemeContext>
    );
    const box = getByText("Content with branded theme");

    expect(box).toBeInTheDocument();
    expect(box).toHaveStyle("background: #ffffff");
  });

  it("should render with the nested custom theme", () => {
    const customTheme = {
      global: {
        colors: {
          primary: "#123456",
        },
      },
      box: {
        background: "$global.colors.primary",
      },
    };

    const { getByText } = render(
      <ThemeContext theme={themes.branded}>
        <Box>Content with branded theme</Box>
        <ThemeContext theme={customTheme}>
          <Box>Content with nested custom theme</Box>
        </ThemeContext>
      </ThemeContext>
    );

    const nestedBox = getByText("Content with nested custom theme");
    expect(nestedBox).toBeInTheDocument();
    expect(nestedBox).toHaveStyle("background: #123456");
  });
});
