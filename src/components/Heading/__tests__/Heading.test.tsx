import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";

import { ComponentLibrary } from "../../ComponentLibrary";
import { Heading } from "..";

test("Heading renders", () => {
  const { container } = render(
    <ComponentLibrary>
      <Heading />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("Heading accepts ref", () => {
  const ref = React.createRef<HTMLHeadingElement>();
  const { container } = render(
    <ComponentLibrary>
      <Heading ref={ref} />
    </ComponentLibrary>
  );

  expect(ref.current).not.toBeNull();
  expect(container.firstChild).toMatchSnapshot();
});

test("Heading level renders", () => {
  const { container } = render(
    <ComponentLibrary>
      <Heading level={1} />
      <Heading level={2} />
      <Heading level={3} />
      <Heading level={4} />
      <Heading level="1" />
      <Heading level="2" />
      <Heading level="3" />
      <Heading level="4" />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("Heading size renders", () => {
  const { container } = render(
    <ComponentLibrary>
      <Heading level={1} size="small" />
      <Heading level={1} size="medium" />
      <Heading level={1} size="large" />
      <Heading level={1} size="xlarge" />
      <Heading level={2} size="small" />
      <Heading level={2} size="medium" />
      <Heading level={2} size="large" />
      <Heading level={2} size="xlarge" />
      <Heading level={3} size="small" />
      <Heading level={3} size="medium" />
      <Heading level={3} size="large" />
      <Heading level={3} size="xlarge" />
      <Heading level={4} size="small" />
      <Heading level={4} size="medium" />
      <Heading level={4} size="large" />
      <Heading level={4} size="xlarge" />
      <Heading level={1} size="77px" />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("Heading textAlign renders", () => {
  const { container } = render(
    <ComponentLibrary>
      <Heading textAlign="start" />
      <Heading textAlign="center" />
      <Heading textAlign="end" />
      <Heading textAlign="justify" />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("Heading margin renders", () => {
  const { container } = render(
    <ComponentLibrary>
      <Heading margin="small" />
      <Heading margin="medium" />
      <Heading margin="large" />
      <Heading margin="none" />
      <Heading margin={{ bottom: "small" }} />
      <Heading margin={{ top: "small" }} />
      <Heading margin={{ bottom: "none" }} />
      <Heading margin={{ top: "none" }} />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("Heading color renders", () => {
  const { container } = render(
    <ComponentLibrary>
      <Heading color="brand" />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

const LONG = "a b c d e f g h i j k l m n o p q r s t u v w x y z";

test("Heading truncate renders", () => {
  const { container } = render(
    <ComponentLibrary>
      <Heading truncate={false}>{LONG}</Heading>
      <Heading truncate>{LONG}</Heading>
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("responsive renders", () => {
  const { container } = render(
    <ComponentLibrary>
      <Heading responsive />
      <Heading responsive={false} />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("weight renders", () => {
  const { asFragment } = render(
    <ComponentLibrary>
      <Heading>My heading</Heading>
      <Heading weight="normal">My heading</Heading>
      <Heading weight="bold">My heading</Heading>
      <Heading weight={700}>My heading</Heading>
    </ComponentLibrary>
  );

  expect(asFragment()).toMatchSnapshot();
});

test("Theme based font family renders", () => {
  const customTheme = {
    heading: {
      font: {
        family: "Fira Sans",
      },
      level: {
        1: {
          font: {
            family: "Arial",
          },
        },
        2: {
          font: {
            family: "Roboto",
          },
        },
        3: {
          font: {
            family: "Ubuntu",
          },
        },
      },
    },
  };
  const { container } = render(
    <ComponentLibrary theme={customTheme}>
      <Heading level={1} />
      <Heading level={2} />
      <Heading level={3} />
      <Heading level={4} />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("Theme based font weight renders", () => {
  const customTheme = {
    heading: {
      weight: 600,
      level: {
        1: {
          font: {
            weight: "700",
          },
        },
        2: {
          font: {
            weight: "400",
          },
        },
        3: {
          font: {
            weight: "200",
          },
        },
      },
    },
  };
  const { container } = render(
    <ComponentLibrary theme={customTheme}>
      <Heading level={1} />
      <Heading level={2} />
      <Heading level={3} />
      <Heading level={4} />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("Theme color renders", () => {
  const customTheme = {
    heading: {
      color: "text-strong",
    },
  };
  const { container } = render(
    <ComponentLibrary theme={customTheme}>
      <Heading level={1} />
      <Heading level={2} />
      <Heading level={3} />
      <Heading level={4} />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("Throws a warning when heading.level is undefined in the theme.", () => {
  global.console.warn = vi.fn();

  const customTheme = {
    heading: {
      level: {
        6: undefined,
      },
    },
  };

  render(
    <ComponentLibrary theme={customTheme}>
      <Heading level={6} />
    </ComponentLibrary>
  );

  const consoleMsg = "Heading level 6 is not defined in your theme.";
  expect(global.console.warn).toHaveBeenCalledWith(consoleMsg);
});

test("Heading fill renders", () => {
  const { container } = render(
    <ComponentLibrary>
      <Heading fill />
    </ComponentLibrary>
  );

  expect(container.firstChild).toMatchSnapshot();
});
