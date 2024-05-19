import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";

import { ComponentLibrary } from "../../ComponentLibrary";
import { Stack } from "..";

const CONTENTS = [<div key={1}>first</div>, <div key={2}>second</div>];

describe("Stack", () => {
  test("default", () => {
    const { container } = render(
      <ComponentLibrary>
        <Stack>{CONTENTS}</Stack>
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("guidingChild", () => {
    const { container } = render(
      <ComponentLibrary>
        <Stack guidingChild="first">{CONTENTS}</Stack>
        <Stack guidingChild="last">{CONTENTS}</Stack>
        <Stack guidingChild={0}>{CONTENTS}</Stack>
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("anchor", () => {
    const { container } = render(
      <ComponentLibrary>
        <Stack anchor="center">{CONTENTS}</Stack>
        <Stack anchor="top">{CONTENTS}</Stack>
        <Stack anchor="left">{CONTENTS}</Stack>
        <Stack anchor="bottom">{CONTENTS}</Stack>
        <Stack anchor="right">{CONTENTS}</Stack>
        <Stack anchor="top-left">{CONTENTS}</Stack>
        <Stack anchor="bottom-left">{CONTENTS}</Stack>
        <Stack anchor="top-right">{CONTENTS}</Stack>
        <Stack anchor="bottom-right">{CONTENTS}</Stack>
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("fill", () => {
    const { container } = render(
      <ComponentLibrary>
        <Stack fill>{CONTENTS}</Stack>
        <Stack fill={false}>{CONTENTS}</Stack>
        <Stack fill="horizontal">{CONTENTS}</Stack>
        <Stack fill="vertical">{CONTENTS}</Stack>
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("interactiveChild", () => {
    const { container } = render(
      <ComponentLibrary>
        <Stack interactiveChild="first">{CONTENTS}</Stack>
        <Stack interactiveChild="last">{CONTENTS}</Stack>
        <Stack interactiveChild={0}>{CONTENTS}</Stack>
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
