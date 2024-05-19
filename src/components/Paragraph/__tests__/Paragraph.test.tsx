import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";

import { ComponentLibrary } from "../../ComponentLibrary";
import { Paragraph } from "..";

test("Paragraph renders", () => {
  const { container } = render(
    <ComponentLibrary>
      <Paragraph />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("Paragraph size renders", () => {
  const { container } = render(
    <ComponentLibrary>
      <Paragraph size="small" />
      <Paragraph size="medium" />
      <Paragraph size="large" />
      <Paragraph size="xlarge" />
      <Paragraph size="xxlarge" />
      <Paragraph fill />
      <Paragraph fill={false} />
      <Paragraph size="10px" />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("Paragraph margin renders", () => {
  const { container } = render(
    <ComponentLibrary>
      <Paragraph margin="small" />
      <Paragraph margin="medium" />
      <Paragraph margin="large" />
      <Paragraph margin="none" />
      <Paragraph margin={{ bottom: "small" }} />
      <Paragraph margin={{ top: "small" }} />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("Paragraph textAlign renders", () => {
  const { container } = render(
    <ComponentLibrary>
      <Paragraph textAlign="start" />
      <Paragraph textAlign="center" />
      <Paragraph textAlign="end" />
      <Paragraph textAlign="justify" />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("Paragraph maxLines renders", () => {
  const { container } = render(
    <ComponentLibrary>
      <Paragraph maxLines={3} />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("Paragraph dangerouslySetInnerHTML renders", () => {
  const { container } = render(
    <ComponentLibrary>
      <Paragraph
        dangerouslySetInnerHTML={{
          __html: "This is a dangerouslySetInnerHTML!",
        }}
      />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});
