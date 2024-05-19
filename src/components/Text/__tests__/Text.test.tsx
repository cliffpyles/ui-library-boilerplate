import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { axe } from "vitest-axe";
import "jest-styled-components";
import "vitest-axe/extend-expect";
import "regenerator-runtime/runtime";

import { ComponentLibrary } from "../../ComponentLibrary";
import { Text } from "..";

test("should have no accessibility violations", async () => {
  const { container } = render(
    <ComponentLibrary>
      <Text a11yTitle="test"> Example</Text>
    </ComponentLibrary>
  );

  const results = await axe(container);
  expect(results).toHaveNoViolations();
  expect(container.firstChild).toMatchSnapshot();
});

test("renders", () => {
  const { container } = render(
    <ComponentLibrary>
      <Text>text</Text>
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("accepts ref", () => {
  const ref = React.createRef<HTMLParagraphElement>();
  const { container } = render(
    <ComponentLibrary>
      <Text ref={ref}>text</Text>
    </ComponentLibrary>
  );

  expect(ref.current).not.toBeNull();
  expect(container.firstChild).toMatchSnapshot();
});

test("renders size", () => {
  const { container } = render(
    <ComponentLibrary>
      <Text size="xsmall" />
      <Text size="small" />
      <Text size="medium" />
      <Text size="large" />
      <Text size="xlarge" />
      <Text size="xxlarge" />
      <Text size="2xl" />
      <Text size="3xl" />
      <Text size="4xl" />
      <Text size="5xl" />
      <Text size="6xl" />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("renders textAlign", () => {
  const { container } = render(
    <ComponentLibrary>
      <Text textAlign="start" />
      <Text textAlign="center" />
      <Text textAlign="end" />
      <Text textAlign="justify" />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("renders margin", () => {
  const { container } = render(
    <ComponentLibrary>
      <Text margin="small" />
      <Text margin="medium" />
      <Text margin="large" />
      <Text margin="none" />
      <Text margin={{ vertical: "small" }} />
      <Text margin={{ horizontal: "small" }} />
      <Text margin={{ bottom: "small" }} />
      <Text margin={{ top: "small" }} />
      <Text margin={{ left: "small" }} />
      <Text margin={{ right: "small" }} />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

const LONG = "a b c d e f g h i j k l m n o p q r s t u v w x y z";

test("renders truncate", () => {
  const { container } = render(
    <ComponentLibrary>
      <Text truncate={false}>{LONG}</Text>
      <Text truncate>{LONG}</Text>
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("renders color", () => {
  const { container } = render(
    <ComponentLibrary>
      <Text color="status-critical" />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("renders tag", () => {
  const { container } = render(
    <ComponentLibrary>
      <Text as="div" />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("proxies tag", () => {
  const { container: tagComponent } = render(
    <ComponentLibrary>
      <Text tag="div" />
    </ComponentLibrary>
  );
  const { container: asComponent } = render(
    <ComponentLibrary>
      <Text as="div" />
    </ComponentLibrary>
  );

  expect(tagComponent).toEqual(asComponent);
});

test("renders weight", () => {
  const { container } = render(
    <ComponentLibrary>
      <Text weight="normal" />
      <Text weight="bold" />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("renders tip", () => {
  const { container, getByText } = render(
    <ComponentLibrary>
      <Text tip="tooltip">Default Tip</Text>
    </ComponentLibrary>
  );

  fireEvent.mouseOver(getByText("Default Tip"));
  expect(container.firstChild).toMatchSnapshot();
});

test("should apply a11yTitle or aria-label", () => {
  const { container, getByLabelText } = render(
    <ComponentLibrary>
      <Text a11yTitle="test"> Example</Text>
      <Text aria-label="test-2">Example</Text>
    </ComponentLibrary>
  );

  expect(getByLabelText("test")).toBeTruthy();
  expect(getByLabelText("test-2")).toBeTruthy();
  expect(container.firstChild).toMatchSnapshot();
});
