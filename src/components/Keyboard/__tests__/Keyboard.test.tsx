import { fireEvent, render, screen } from "@testing-library/react";
import { ComponentLibrary } from "../../ComponentLibrary";
import { Keyboard } from "../Keyboard";

describe("Keyboard", () => {
  test("onDown", () => {
    const onDown = vi.fn();
    const { container } = render(
      <ComponentLibrary>
        <Keyboard onDown={onDown}>
          <span>hi</span>
        </Keyboard>
      </ComponentLibrary>
    );

    const element = screen.getByText("hi");

    fireEvent.keyDown(element, { keyCode: 40 });
    fireEvent.keyDown(element, { which: 40 });
    fireEvent.keyDown(element, { which: 0 });

    expect(onDown).toHaveBeenCalled();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("onKeyDown", () => {
    const onDown = vi.fn();
    const onKeyDown = vi.fn();
    const { container } = render(
      <ComponentLibrary>
        <Keyboard onDown={onDown} onKeyDown={onKeyDown}>
          <span>hi</span>
        </Keyboard>
      </ComponentLibrary>
    );

    const element = screen.getByText("hi");

    fireEvent.keyDown(element, { keyCode: 40 });

    expect(onDown).toBeCalled();
    expect(onKeyDown).toBeCalled();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("change onKeyDown", () => {
    const firstOnKeyDown = vi.fn();
    const secondOnKeyDown = vi.fn();

    const { container, getByText, rerender } = render(
      <Keyboard target="document" onKeyDown={firstOnKeyDown}>
        <span>hi</span>
      </Keyboard>
    );
    expect(container.firstChild).toMatchSnapshot();

    fireEvent(getByText("hi"), new KeyboardEvent("keydown", { bubbles: true, cancelable: true }));
    expect(firstOnKeyDown).toBeCalled();

    rerender(
      <Keyboard target="document" onKeyDown={secondOnKeyDown}>
        <span>hi</span>
      </Keyboard>
    );
    expect(container.firstChild).toMatchSnapshot();

    fireEvent(getByText("hi"), new KeyboardEvent("keydown", { bubbles: true, cancelable: true }));
    expect(secondOnKeyDown).toBeCalled();
  });
});
