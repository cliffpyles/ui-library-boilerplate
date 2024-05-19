import { ComponentLibrary } from "../..";
import { Grid } from "..";

describe("Grid", () => {
  test("renders", () => {
    const { container } = render(
      <ComponentLibrary>
        <Grid />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("a11yTitle and aria-label renders", () => {
    const { container, getByLabelText } = render(
      <ComponentLibrary>
        <Grid a11yTitle="My Grid" />
        <Grid aria-label="My Other Grid" />
      </ComponentLibrary>
    );
    expect(getByLabelText("My Grid")).toBeTruthy();
    expect(getByLabelText("My Other Grid")).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  test("rows renders", () => {
    const { container } = render(
      <ComponentLibrary>
        <Grid rows={[["small", "medium"], "large", "medium"]} />
        <Grid rows={["small", "large", "medium"]} />
        <Grid rows="small" />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("columns renders", () => {
    const { container } = render(
      <ComponentLibrary>
        <Grid columns={["1/2", "2/4"]} />
        <Grid columns={["1/3", "2/3"]} />
        <Grid columns={["1/4", "3/4"]} />
        <Grid columns={[["1/2", "2/4"], "1/4", "3/4"]} />
        <Grid columns="small" />
        <Grid columns="1/3" />
        <Grid columns="flex" />
        <Grid columns={{ count: "fit", size: "small" }} />
        <Grid columns={{ count: "fill", size: ["small", "medium"] }} />
        <Grid columns={{ count: "fit", size: ["small", "1/2"] }} />
        <Grid columns={{ count: "fit", size: ["1/4", "medium"] }} />
        {/* designer scenario */}
        <Grid columns={{ count: "fill", size: [] }} />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("areas renders", () => {
    const { container } = render(
      <ComponentLibrary>
        <Grid
          rows={["xxsmall", "medium", "xsmall"]}
          columns={["3/4", "1/4"]}
          areas={[
            { name: "header", start: [0, 0], end: [0, 1] },
            { name: "main", start: [1, 0], end: [1, 0] },
            { name: "sidebar", start: [1, 1], end: [1, 1] },
            { name: "footer", start: [2, 0], end: [2, 1] },
          ]}
        />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("areas renders with warning and throws error", () => {
    console.error = vi.fn();
    console.warn = vi.fn();
    const warnSpy = vi.spyOn(console, "warn");
    expect(() => {
      render(
        <ComponentLibrary>
          <Grid
            rows={["xxsmall", "medium", "xsmall"]}
            columns="small"
            areas={[
              { name: "header", start: [0, 0], end: [0, 1] },
              { name: "main", start: [1, 0], end: [1, 0] },
              { name: "sidebar", start: [1, 1], end: [1, 1] },
              { name: "footer", start: [2, 0], end: [2, 1] },
            ]}
          />
        </ComponentLibrary>
      );
    }).toThrow("props.columns.map is not a function");
    expect(warnSpy).toHaveBeenCalledWith("Grid `areas` requires `rows` and `columns` to be arrays.");
  });

  test("areas renders when given an array of string arrays", () => {
    const { container } = render(
      <ComponentLibrary>
        <Grid
          rows={["xxsmall", "medium", "xsmall"]}
          columns={["3/4", "1/4"]}
          areas={[
            ["header", "header"],
            ["sidebar", "main"],
            ["footer", "footer"],
          ]}
        />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("justify renders", () => {
    const { container } = render(
      <ComponentLibrary>
        <Grid justify="start" />
        <Grid justify="center" />
        <Grid justify="end" />
        <Grid justify="stretch" />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("align renders", () => {
    const { container } = render(
      <ComponentLibrary>
        {/* Mapped values */}
        <Grid align="start" />
        <Grid align="center" />
        <Grid align="end" />
        <Grid align="stretch" />
        <Grid align="baseline" />
        {/* Any valid CSS align-items strings */}
        <Grid align="normal" />
        <Grid align="first baseline" />
        <Grid align="last baseline" />
        <Grid align="safe center" />
        <Grid align="unsafe center" />
        <Grid align="inherit" />
        <Grid align="initial" />
        <Grid align="unset" />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("justifyContent renders", () => {
    const { container } = render(
      <ComponentLibrary>
        <Grid justifyContent="start" />
        <Grid justifyContent="center" />
        <Grid justifyContent="between" />
        <Grid justifyContent="around" />
        <Grid justifyContent="end" />
        <Grid justifyContent="stretch" />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("alignContent renders", () => {
    const { container } = render(
      <ComponentLibrary>
        {/* Mapped values */}
        <Grid alignContent="start" />
        <Grid alignContent="center" />
        <Grid alignContent="between" />
        <Grid alignContent="around" />
        <Grid alignContent="end" />
        <Grid alignContent="stretch" />
        <Grid alignContent="baseline" />
        <Grid alignContent="evenly" />
        {/* Any valid CSS align-content strings */}
        <Grid alignContent="normal" />
        <Grid alignContent="first baseline" />
        <Grid alignContent="last baseline" />
        <Grid alignContent="space-between" />
        <Grid alignContent="space-around" />
        <Grid alignContent="space-evenly" />
        <Grid alignContent="safe center" />
        <Grid alignContent="unsafe center" />
        <Grid alignContent="inherit" />
        <Grid alignContent="initial" />
        <Grid alignContent="unset" />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("gap renders", () => {
    const { container } = render(
      <ComponentLibrary>
        <Grid gap="small" />
        <Grid gap="medium" />
        <Grid gap="large" />
        <Grid gap={{ row: "small" }} />
        <Grid gap={{ row: "medium" }} />
        <Grid gap={{ row: "large" }} />
        <Grid gap={{ column: "small" }} />
        <Grid gap={{ column: "medium" }} />
        <Grid gap={{ column: "large" }} />
        <Grid gap={{ row: "small", column: "medium" }} />
        <Grid gap={{ test: "test" }} />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("fill renders", () => {
    const { container } = render(
      <ComponentLibrary>
        <Grid fill />
        <Grid fill={false} />
        <Grid fill="horizontal" />
        <Grid fill="vertical" />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("responsive", () => {
    const { container } = render(
      <ComponentLibrary>
        <Grid responsive />
        <Grid responsive={false} />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("as renders", () => {
    const { container } = render(
      <ComponentLibrary>
        <Grid as="article" />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("proxies tag", () => {
    const { container: tagComponent } = render(
      <ComponentLibrary>
        <Grid tag="article" />
      </ComponentLibrary>
    );
    const { container: asComponent } = render(
      <ComponentLibrary>
        <Grid as="article" />
      </ComponentLibrary>
    );

    expect(tagComponent).toEqual(asComponent);
  });

  test("pad", () => {
    const { container } = render(
      <ComponentLibrary>
        <Grid pad="small" />
        <Grid pad="medium" />
        <Grid pad="large" />
        <Grid pad={{ horizontal: "small" }} />
        <Grid pad={{ vertical: "small" }} />
        <Grid pad={{ bottom: "small" }} />
        <Grid pad={{ left: "small" }} />
        <Grid pad={{ right: "small" }} />
        <Grid pad={{ start: "small" }} />
        <Grid pad={{ end: "small" }} />
        <Grid pad={{ top: "small" }} />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("border", () => {
    const { container } = render(
      <ComponentLibrary>
        <Grid border="all" />
        <Grid border="horizontal" />
        <Grid border="vertical" />
        <Grid border="top" />
        <Grid border="left" />
        <Grid border="bottom" />
        <Grid border="right" />
        <Grid border={{ color: "accent-1" }} />
        <Grid border={{ side: "all" }} />
        <Grid border={{ size: "xsmall" }} />
        <Grid border={{ size: "small" }} />
        <Grid border={{ size: "medium" }} />
        <Grid border={{ size: "large" }} />
        <Grid border={{ size: "xlarge" }} />
        <Grid border={{ style: "dotted" }} />
        <Grid border={{ style: "double" }} />
        <Grid border={{ style: "dashed" }} />
        <Grid
          border={[
            { side: "top", color: "accent-1", size: "medium", style: "dotted" },
            { side: "left", color: "accent-2", size: "large", style: "dashed" },
          ]}
        />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("width", () => {
    const { container } = render(
      <ComponentLibrary>
        <Grid width="xsmall" />
        <Grid width="small" />
        <Grid width="medium" />
        <Grid width="large" />
        <Grid width="xlarge" />
        <Grid width="111px" />
      </ComponentLibrary>
    );
    expect(container).toMatchSnapshot();
  });

  test("width object", () => {
    const { container } = render(
      <ComponentLibrary>
        <Grid width={{ width: "100px", max: "100%" }} />
      </ComponentLibrary>
    );
    expect(container).toMatchSnapshot();
  });

  test("height", () => {
    const { container } = render(
      <ComponentLibrary>
        <Grid height="xsmall" />
        <Grid height="small" />
        <Grid height="medium" />
        <Grid height="large" />
        <Grid height="xlarge" />
        <Grid height="111px" />
      </ComponentLibrary>
    );
    expect(container).toMatchSnapshot();
  });

  test("height object", () => {
    const { container } = render(
      <ComponentLibrary>
        <Grid height={{ height: "100px", max: "100%" }} />
      </ComponentLibrary>
    );
    expect(container).toMatchSnapshot();
  });
});
