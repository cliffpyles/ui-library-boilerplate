import { useEffect } from "react";
import { render } from "@testing-library/react";
import { ComponentLibrary } from "..";
import { AnnounceContext } from "../../../contexts";
import { base } from "../../../themes/base";
import { MessageContext } from "../../../contexts/MessageContext";

const TestAnnouncer = ({ announce }) => {
  useEffect(() => announce("hello", "assertive"));
  return <div>hi</div>;
};

describe("ComponentLibrary", () => {
  test("basic", () => {
    const { container } = render(<ComponentLibrary />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("themeMode", () => {
    const { container } = render(<ComponentLibrary theme={base} themeMode="dark" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("cssVars", () => {
    const { container } = render(<ComponentLibrary cssVars>ComponentLibrary App</ComponentLibrary>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("full", () => {
    const { container } = render(<ComponentLibrary full>ComponentLibrary App</ComponentLibrary>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("full min", () => {
    const { container } = render(<ComponentLibrary full="min">ComponentLibrary App</ComponentLibrary>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("background", () => {
    const { container } = render(
      <ComponentLibrary full background="#0000ff">
        ComponentLibrary App
      </ComponentLibrary>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("announce", (done) => {
    const { container } = render(
      <ComponentLibrary>
        <AnnounceContext.Consumer>{(announce) => <TestAnnouncer announce={announce} />}</AnnounceContext.Consumer>
      </ComponentLibrary>
    );
    expect(container.firstChild).toMatchSnapshot();

    // no style, no need for expectPortal
    expect(document.body.querySelector("#grommet-announcer[aria-live]")).toMatchSnapshot();

    setTimeout(() => {
      // should clear the aria-live container
      expect(document.body.querySelector("#grommet-announcer[aria-live]")).toMatchSnapshot();
      done();
    }, 600); // wait the aria-live container to clear
  });

  test("messages", () => {
    const { container } = render(
      <ComponentLibrary
        messages={{
          messages: {
            test: {
              label: "My Label",
            },
          },
        }}
      >
        <MessageContext.Consumer>{({ format }) => format({ id: "test.label" })}</MessageContext.Consumer>
      </ComponentLibrary>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("message format function", () => {
    const messages = {
      "test.label": "My Label",
    };
    const { container } = render(
      <ComponentLibrary full background="#0000ff">
        ComponentLibrary App
      </ComponentLibrary>,

      <ComponentLibrary messages={{ format: (opts) => messages[opts.id] }}>
        <MessageContext.Consumer>{({ format }) => format({ id: "test.label" })}</MessageContext.Consumer>
      </ComponentLibrary>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
