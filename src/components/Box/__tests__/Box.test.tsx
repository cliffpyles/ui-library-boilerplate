import { Component } from "react";
import { ComponentLibrary } from "../../ComponentLibrary";
import { Box } from "..";

describe("Box", () => {
  test("default", () => {
    const { container } = render(
      <ComponentLibrary>
        <Box />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("as string", () => {
    const { container } = render(
      <ComponentLibrary>
        <Box as="header" />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("as function", () => {
    const { container } = render(
      <ComponentLibrary>
        <Box as={(props) => <header className={props.className} />} />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("as component", () => {
    class Header extends Component<any> {
      render() {
        return <header className={this.props.className} />;
      }
    }
    const { container } = render(
      <ComponentLibrary>
        <Box as={Header} />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("tag proxied", () => {
    const { container: tagComponent } = render(
      <ComponentLibrary>
        <Box tag="header" />
      </ComponentLibrary>
    );
    const { container: asComponent } = render(
      <ComponentLibrary>
        <Box as="header" />
      </ComponentLibrary>
    );

    expect(tagComponent).toEqual(asComponent);
  });

  test("onClick", () => {
    const onClick = vi.fn();
    const { getByText, container } = render(
      <ComponentLibrary>
        <Box onClick={onClick}>test box</Box>
      </ComponentLibrary>
    );
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.click(getByText("test box"));

    expect(onClick).toBeCalled();
  });

  test("renders a11yTitle and aria-label", () => {
    const { container, getByLabelText } = render(
      <ComponentLibrary>
        <Box a11yTitle="test" />
        <Box aria-label="test-2" />
      </ComponentLibrary>
    );
    expect(getByLabelText("test")).toBeTruthy();
    expect(getByLabelText("test-2")).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
