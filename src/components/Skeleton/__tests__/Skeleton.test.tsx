import { render, screen } from "@testing-library/react";
import "jest-styled-components";

import { Skeleton } from "..";
import { ComponentLibrary } from "../../ComponentLibrary";
import { Box } from "../../Box";
import { Text } from "../../Text";
import { Heading } from "../../Heading";
import { Paragraph } from "../../Paragraph";
import { Button } from "../../Button";

describe("Skeleton", () => {
  test("renders", () => {
    const { asFragment } = render(
      <ComponentLibrary>
        <Skeleton />
      </ComponentLibrary>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("Box skeleton loading", () => {
    const { asFragment } = render(
      <ComponentLibrary>
        <Box skeleton>
          <Heading>Heading</Heading>
          <Text>Text</Text>
          <Paragraph>Paragraph</Paragraph>
          <Button label="Button" onClick={() => {}} />
        </Box>
      </ComponentLibrary>
    );
    expect(screen.queryByText("Heading")).toBeNull();
    expect(screen.queryByText("Text")).toBeNull();
    expect(screen.queryByText("Paragraph")).toBeNull();
    expect(screen.queryByText("Button")).toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });

  test("Box skeleton sizes loading", () => {
    const { asFragment } = render(
      <ComponentLibrary>
        <Box skeleton>
          <Heading level={2} size="small">
            Heading
          </Heading>
          <Text size="xsmall">Text</Text>
          <Paragraph size="large">Paragraph</Paragraph>
          <Button size="large" label="Button" onClick={() => {}} />
        </Box>
      </ComponentLibrary>
    );

    expect(asFragment()).toMatchSnapshot();
    expect(screen.queryByText("Heading")).toBeNull();
  });

  test("Box skeleton loaded", () => {
    const { asFragment } = render(
      <ComponentLibrary>
        <Box skeleton={false}>
          <Heading>Heading</Heading>
          <Text>Text</Text>
          <Paragraph>Paragraph</Paragraph>
          <Button label="Button" onClick={() => {}} />
        </Box>
      </ComponentLibrary>
    );
    expect(screen.queryByText("Heading")).not.toBeNull();
    expect(screen.queryByText("Text")).not.toBeNull();
    expect(screen.queryByText("Paragraph")).not.toBeNull();
    expect(screen.queryByText("Button")).not.toBeNull();
    expect(asFragment()).toMatchSnapshot();
  });

  test("Box skeleton with specific dimensions", () => {
    const { asFragment } = render(
      <ComponentLibrary>
        <Box skeleton height="small" width="medium">
          <Text>text</Text>
        </Box>
      </ComponentLibrary>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("with styling props", () => {
    const { asFragment } = render(
      <ComponentLibrary>
        <Skeleton
          height="small"
          margin="small"
          round="small"
          colors={{ dark: ["green", "blue"], light: ["pink", "orange"] }}
        />
      </ComponentLibrary>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("Skeleton with theme", () => {
    const { asFragment } = render(
      <ComponentLibrary
        theme={{
          skeleton: {
            colors: {
              light: ["#a2a8a8", "#adb9ba"],
            },
            round: "xsmall",
            extend: "border: 1px solid blue;",
          },
        }}
      >
        <Box skeleton>
          <Text>Text</Text>
        </Box>
      </ComponentLibrary>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
