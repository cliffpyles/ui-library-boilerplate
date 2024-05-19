import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";

import { hpe } from "grommet-theme-hpe";
import { Add } from "grommet-icons";

import { ComponentLibrary, Anchor, Box, Button, Text, TextInput } from "../../components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { dark, grommet } from "..";

// hpe theme has deprecated the accent and neutral colors
const hpeColors = [
  "brand",
  "background-contrast",
  "background-front",
  "control",
  "graph-0",
  "graph-1",
  "graph-2",
  "graph-3",
  "graph-4",
  "focus",
  "status-critical",
  "status-disabled",
  "status-ok",
  "status-unknown",
  "status-warning",
  "text",
];

const colors = [
  "accent-1",
  "accent-2",
  "accent-3",
  "brand",
  "dark-1",
  "dark-2",
  "dark-3",
  "dark-4",
  "dark-5",
  "dark-6",
  "focus",
  "light-1",
  "light-2",
  "light-3",
  "light-4",
  "light-5",
  "light-6",
  "neutral-1",
  "neutral-2",
  "neutral-3",
  "status-critical",
  "status-disabled",
  "status-ok",
  "status-unknown",
  "status-warning",
];

const customTheme = {
  global: {
    input: {
      // test backwards compatibility that string value works for input pad
      padding: "12px",
      font: {
        height: "50px",
        size: "large",
        weight: "bold",
      },
      extend: `
        &::-webkit-input-placeholder {
          font-weight: normal;
        }

        &::-moz-placeholder {
          font-weight: normal;
        }

        &:-ms-input-placeholder {
          font-weight: normal;
        }
      `,
    },
    colors: {
      custom: "#cc6633",
      placeholder: "custom",
    },
  },
};

describe("ComponentLibrary", () => {
  test("default theme", () => {
    const { container } = render(
      <ComponentLibrary>
        {colors.map((color) => (
          <Box key={color} background={color}>
            <Text>{color}</Text>
          </Box>
        ))}
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("grommet theme", () => {
    const { container } = render(
      <ComponentLibrary theme={grommet}>
        <Button label="test" />
        <Button plain label="test" />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("ThemeContext theme", () => {
    const { container } = render(
      <ComponentLibrary theme={grommet}>
        <ThemeContext.Extend
          value={{
            global: {
              colors: {
                test: "#000",
              },
            },
          }}
        >
          <Anchor color="test" label="Hello" />
        </ThemeContext.Extend>
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("dark theme", () => {
    const { container } = render(
      <ComponentLibrary theme={dark}>
        {colors.map((color) => (
          <Box key={color} background={color}>
            <Text>{color}</Text>
          </Box>
        ))}
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("hpe theme", () => {
    const { container } = render(
      <ComponentLibrary theme={hpe}>
        {hpeColors.map((color) => (
          <Box key={color} background={color}>
            <Text>{color}</Text>
          </Box>
        ))}
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("custom theme", () => {
    const { container } = render(
      <ComponentLibrary theme={customTheme}>
        <Box>
          <Anchor icon={<Add />} label="Add" />
          <Anchor icon={<Add />} label="Add" color="custom" />
        </Box>
        <Box background="dark-1">
          <Anchor icon={<Add />} label="Add" />
          <Anchor icon={<Add />} label="Add" color="custom" />
        </Box>
        <Box>
          <TextInput value="Value" placeholder="Placeholder" />
        </Box>
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
