import { screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import userEvent from "@testing-library/user-event";

import "regenerator-runtime/runtime";

import { Add, Next } from "grommet-icons";
import { ComponentLibrary, Button, Text } from "../..";

describe("Button", () => {
  test("should have no accessibility violations", async () => {
    const { container } = render(
      <ComponentLibrary>
        <Button a11yTitle="Test button" label="Test" onClick={() => {}} />
      </ComponentLibrary>
    );

    fireEvent.click(screen.getByText("Test"));
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("passes through the aria-label prop", async () => {
    const TEST_LABEL = "Test Label";
    const { container } = render(
      <ComponentLibrary>
        <Button aria-label={TEST_LABEL} label="Test" onClick={() => {}} />
      </ComponentLibrary>
    );

    const button = screen.getByRole("button", { name: TEST_LABEL });
    expect(button).toHaveAttribute("aria-label", TEST_LABEL);

    fireEvent.click(button);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("basic", () => {
    const { container } = render(
      <ComponentLibrary>
        <Button label="Test" onClick={() => {}} />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("children function", () => {
    const { container } = render(
      <ComponentLibrary>
        <Button onClick={() => {}}>{() => <div data-testid="children function" />}</Button>
      </ComponentLibrary>
    );

    expect(screen.getByTestId("children function")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("children function with disabled prop", () => {
    const { container } = render(
      <ComponentLibrary>
        <Button onClick={() => {}} disabled>
          {({ disabled }) => <Text>{`Button#1 ${disabled ? "Disabled" : "not Disabled"}`}</Text>}
        </Button>
        <Button onClick={() => {}}>
          {({ disabled }) => <Text>{`Button#2 ${disabled ? "Disabled" : "not Disabled"}`}</Text>}
        </Button>
      </ComponentLibrary>
    );

    expect(screen.getByRole("button", { name: "Button#1 Disabled" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Button#2 not Disabled" })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  test("warns about invalid label", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const { container } = render(
      <ComponentLibrary>
        <Button label="Test" onClick={() => {}}>
          invalid
        </Button>
      </ComponentLibrary>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(warnSpy).toHaveBeenCalledWith("Button should not have children if icon or label is provided");
    warnSpy.mockReset();
    warnSpy.mockRestore();
  });

  test("warns about invalid icon", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    const { container } = render(
      <ComponentLibrary>
        <Button icon={<svg />} onClick={() => {}}>
          invalid
        </Button>
      </ComponentLibrary>
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(warnSpy).toHaveBeenCalledWith("Button should not have children if icon or label is provided");
    warnSpy.mockReset();
    warnSpy.mockRestore();
  });

  test("primary", () => {
    const { container } = render(
      <ComponentLibrary>
        <Button primary label="Primary Button" onClick={() => {}} />
      </ComponentLibrary>
    );

    expect(screen.getByRole("button", { name: "Primary Button" })).toHaveStyle("background-color: #7D4CDB;");
    expect(container.firstChild).toMatchSnapshot();
  });

  test("color", () => {
    const { container } = render(
      <ComponentLibrary>
        <Button color="accent-1" label="accent-1" onClick={() => {}} />
        <Button color="accent-1" primary label="primary accent-1" onClick={() => {}} />
        <Button color="#111111" primary label="custom color #1" onClick={() => {}} />
        <Button color="#123" primary label="custom color #2" onClick={() => {}} />
      </ComponentLibrary>
    );

    expect(screen.getByRole("button", { name: "accent-1" })).toHaveStyle("background-color: rgba(0, 0, 0, 0);");

    expect(screen.getByRole("button", { name: "primary accent-1" })).toHaveStyle("background-color: #6FFFB0;");

    expect(screen.getByRole("button", { name: "custom color #1" })).toHaveStyle("background-color: #111111;");

    expect(screen.getByRole("button", { name: "custom color #2" })).toHaveStyle("background-color: #123;");

    expect(container.firstChild).toMatchSnapshot();
  });

  test("fill", () => {
    const { container } = render(
      <ComponentLibrary>
        <Button fill label="fill" />
        <Button fill={false} label="fill false" />
        <Button fill="horizontal" label="fill horizontal" />
        <Button fill="vertical" label="fill vertical" />
      </ComponentLibrary>
    );

    expect(screen.getByRole("button", { name: "fill" })).toHaveStyle({
      width: "100%",
      height: "100%",
    });

    expect(screen.getByRole("button", { name: "fill false" })).not.toHaveStyle({
      width: "100%",
      height: "100%",
    });

    expect(screen.getByRole("button", { name: "fill horizontal" })).toHaveStyle({
      width: "100%",
    });

    expect(screen.getByRole("button", { name: "fill vertical" })).toHaveStyle({
      height: "100%",
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  test.skip("focus", async () => {
    const user = userEvent.setup();

    const { container } = render(
      <ComponentLibrary>
        <Button label="Test focus" onClick={() => {}} />
      </ComponentLibrary>
    );

    const button = screen.getByRole("button", { name: "Test focus" });

    expect(button).not.toHaveFocus();
    expect(document.body).toHaveFocus();

    await user.tab();
    expect(button).toHaveFocus();
    expect(document.body).not.toHaveFocus();

    expect(button).toHaveStyleRule("box-shadow", "0 0 2px 2px #6FFFB0", {
      modifier: ":focus",
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  test("tip", () => {
    const { container } = render(
      <ComponentLibrary>
        <Button label="Default Tip" onClick={() => {}} tip="tooltip" />
      </ComponentLibrary>
    );

    expect(screen.queryByText("tooltip")).not.toBeInTheDocument();

    fireEvent.mouseOver(screen.getByText("Default Tip"));
    expect(screen.getByText("tooltip")).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  test("disabled", () => {
    const { container } = render(
      <ComponentLibrary>
        <Button disabled />
        <Button disabled primary label="Button" />
        <Button disabled label="Button" />
        <Button disabled plain label="Button" />
        <Button disabled plain={false} label="Button" />
        <Button disabled icon={<svg />} />
        <Button disabled icon={<svg />} plain />
        <Button disabled icon={<svg />} plain={false} />
        <Button disabled icon={<svg />} label="Button" />
        <Button disabled icon={<svg />} label="Button" plain />
        <Button disabled icon={<svg />} label="Button" primary />
      </ComponentLibrary>
    );

    const allButtons = screen.getAllByRole("button");

    expect(allButtons).toHaveLength(11);
    allButtons.forEach((button) => expect(button).toBeDisabled());

    expect(container.firstChild).toMatchSnapshot();
  });

  test("active", () => {
    const { container } = render(
      <ComponentLibrary>
        <Button active label="Button" />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("active + primary", () => {
    const { container } = render(
      <ComponentLibrary>
        <Button active primary label="Button" />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("icon label", () => {
    const { container } = render(
      <ComponentLibrary>
        <Button icon={<svg data-testid="icon" />} label="Test" onClick={() => {}} />
      </ComponentLibrary>
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("reverse icon label", () => {
    const { container } = render(
      <ComponentLibrary>
        <Button reverse icon={<svg data-testid="icon" />} label="Test" onClick={() => {}} />
      </ComponentLibrary>
    );

    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("href", () => {
    const { container } = render(
      <ComponentLibrary>
        <Button href="test" label="Button as link" />
      </ComponentLibrary>
    );

    expect(screen.getByRole("link", { name: "Button as link" })).toHaveAttribute("href", "test");
    expect(container.firstChild).toMatchSnapshot();
  });

  test("hoverIndicator background", () => {
    const { container, getByRole } = render(
      <ComponentLibrary>
        <Button onClick={() => {}} hoverIndicator="background">
          hoverIndicator
        </Button>
      </ComponentLibrary>
    );
    const button = getByRole("button", { name: "hoverIndicator" });
    expect(button).toHaveStyle("background-color: rgba(221,221,221,0.4);");
    expect(container.firstChild).toMatchSnapshot();
  });

  test("hoverIndicator as object with color", () => {
    const { container } = render(
      <ComponentLibrary>
        <Button onClick={() => {}} hoverIndicator={{ color: "brand" }}>
          hoverIndicator
        </Button>
      </ComponentLibrary>
    );

    expect(screen.getByRole("button", { name: "hoverIndicator" })).toHaveStyle({
      "background-color": "rgba(125,76,219,1)",
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  test("hoverIndicator as object with invalid color", () => {
    const { container } = render(
      <ComponentLibrary>
        <Button onClick={() => {}} hoverIndicator={{ color: "invalid" }}>
          hoverIndicator
        </Button>
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("hoverIndicator color", () => {
    const { container } = render(
      <ComponentLibrary>
        <Button onClick={() => {}} hoverIndicator="dark-3">
          hoverIndicator
        </Button>
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("onClick", () => {
    const onClick = vi.fn();
    render(
      <ComponentLibrary>
        <Button label="Test" onClick={onClick} />
      </ComponentLibrary>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toBeCalled();
  });

  test("size", () => {
    const { container } = render(
      <ComponentLibrary>
        <Button size="small" label="Small" />
        <Button size="medium" label="Medium" />
        <Button label="Default" />
        <Button size="large" label="Large" />
        <Button primary size="small" label="Small" />
        <Button primary size="medium" label="Medium" />
        <Button primary label="Default" />
        <Button primary size="large" label="Large" />
        <Button size="small" icon={<Add />} primary />
        <Button size="medium" icon={<Add />} primary />
        <Button icon={<Add />} primary />
        <Button size="large" icon={<Add />} primary />
        <Button size="small" label="Small" icon={<Next />} reverse />
        <Button size="medium" label="Medium" icon={<Next />} reverse />
        <Button label="Default" icon={<Next />} reverse />
        <Button size="large" label="Large" icon={<Next />} reverse />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("as", () => {
    const Anchor = () => <a />;

    const { asFragment } = render(
      <ComponentLibrary>
        <Button as="span" />
        <Button as={Anchor} />
      </ComponentLibrary>
    );

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test("a11yTitle", () => {
    const { container } = render(
      <ComponentLibrary>
        <Button a11yTitle="Title" />
        <Button aria-label="Title" />
      </ComponentLibrary>
    );

    const allButtons = screen.getAllByRole("button", { name: "Title" });

    expect(allButtons).toHaveLength(2);
    allButtons.forEach((button) => expect(button).toHaveAttribute("aria-label", "Title"));
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`disabled state cursor should indicate the button cannot be
  clicked`, () => {
    render(
      <ComponentLibrary>
        <Button disabled label="Button" />
      </ComponentLibrary>
    );

    const button = screen.getByRole("button", { name: "Button" });

    expect(button).toHaveStyle({ cursor: "default" });

    const cursorStyle = window.getComputedStyle(button).cursor;
    expect(cursorStyle).not.toBe("pointer");
    expect(cursorStyle).toBe("default");
  });

  test(`badge should be offset from top-right corner`, () => {
    const { container } = render(
      <ComponentLibrary>
        <Button a11yTitle="Button, alert" label="Button" badge />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test(`badge should display number content`, () => {
    const { container } = render(
      <ComponentLibrary>
        <Button a11yTitle="Button, 2 unread alerts" label="Button" badge={2} />
      </ComponentLibrary>
    );

    expect(screen.getByText("2")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`badge should display "+" when number is greater than max`, () => {
    const { container } = render(
      <ComponentLibrary>
        <Button a11yTitle="Button, 100 unread alerts" label="Button" badge={{ value: 100, max: 9 }} />
      </ComponentLibrary>
    );

    expect(screen.getByText("9+")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`badge should apply background`, () => {
    const { container } = render(
      <ComponentLibrary>
        <Button
          a11yTitle="Button, 100 unread alerts"
          label="Button"
          badge={{
            background: "status-ok",
            value: 100,
          }}
        />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test(`badge should render custom element`, () => {
    const { container } = render(
      <ComponentLibrary>
        <Button a11yTitle="Button, Add user alert" label="Button" badge={<Add data-testid="badge" />} />
      </ComponentLibrary>
    );

    expect(screen.getByTestId("badge")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`badge should render relative to contents when button has no
  border or background`, () => {
    const { container } = render(
      <ComponentLibrary>
        <Button a11yTitle="Button, Add user alert" icon={<Add />} badge />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test(`line-height should be zero for icon only`, () => {
    const { getByRole } = render(
      <ComponentLibrary>
        <Button icon={<Add />} />
      </ComponentLibrary>
    );

    expect(getByRole("button")).toHaveStyle({ "line-height": "0" });
  });

  test("should render pad", () => {
    const { asFragment } = render(
      <ComponentLibrary>
        <Button data-testid="string-pad" label="String pad" icon={<Add />} pad="xlarge" />
        <Button
          data-testid="object-pad"
          label="Object pad"
          icon={<Add />}
          pad={{ horizontal: "18px", vertical: "6px" }}
        />
        {/* should not render pad on plain button */}
        <Button data-testid="child-pad" pad="xlarge">
          <Add />
        </Button>
      </ComponentLibrary>
    );

    const stringPadButton = screen.getByTestId("string-pad");
    const objectPadButton = screen.getByTestId("object-pad");
    const childPadButton = screen.getByTestId("child-pad");
    let style;
    style = window.getComputedStyle(stringPadButton);
    expect(style.padding).toBe("96px");

    style = window.getComputedStyle(objectPadButton);
    expect(style.paddingTop).toBe("6px");
    expect(style.paddingBottom).toBe("6px");
    expect(style.paddingLeft).toBe("18px");
    expect(style.paddingRight).toBe("18px");

    style = window.getComputedStyle(childPadButton);
    expect(style.padding).toBe("0px");

    expect(asFragment()).toMatchSnapshot();
  });
});
