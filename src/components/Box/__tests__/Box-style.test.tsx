import { ComponentLibrary } from "../../ComponentLibrary";
import { Box, BoxProps } from "..";

describe("Box", () => {
  /* eslint-disable max-len */
  test("background", () => {
    const { container } = render(
      <ComponentLibrary>
        <Box background="brand" />
        <Box background="accent-1" />
        <Box background="neutral-1" />
        <Box background="light-1" />
        <Box background="dark-1" />
        <Box background="status-critical" />
        <Box background="#aabbcc" />
        <Box background="#def" />
        <Box background="rgb(90, 80, 50)" />
        <Box background="rgba(200, 100, 150, 0.8)" />
        <Box background="hsl(10, 50%, 20%)" />
        <Box background="hsla(10, 50%, 70%, 0.7)" />
        <Box background="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABGdBTUEAALGPC/xhBQAAAA9JREFUCB1jYMAC/mOIAQASFQEAlwuUYwAAAABJRU5ErkJggg==)" />
        <Box
          background={{
            image:
              "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABGdBTUEAALGPC/xhBQAAAA9JREFUCB1jYMAC/mOIAQASFQEAlwuUYwAAAABJRU5ErkJggg==)",
            dark: false,
          }}
        />
        <Box
          background={{
            image:
              "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABGdBTUEAALGPC/xhBQAAAA9JREFUCB1jYMAC/mOIAQASFQEAlwuUYwAAAABJRU5ErkJggg==)",
            dark: true,
          }}
        />
        <Box
          background={{
            image:
              "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABGdBTUEAALGPC/xhBQAAAA9JREFUCB1jYMAC/mOIAQASFQEAlwuUYwAAAABJRU5ErkJggg==)",
            position: "top center",
          }}
        />
        <Box
          background={{
            image:
              "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABGdBTUEAALGPC/xhBQAAAA9JREFUCB1jYMAC/mOIAQASFQEAlwuUYwAAAABJRU5ErkJggg==)",
            opacity: "strong",
          }}
        />
        <Box
          background={{
            image:
              "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABGdBTUEAALGPC/xhBQAAAA9JREFUCB1jYMAC/mOIAQASFQEAlwuUYwAAAABJRU5ErkJggg==)",
            color: "accent-1",
          }}
        />
        <Box
          background={{
            image:
              "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABGdBTUEAALGPC/xhBQAAAA9JREFUCB1jYMAC/mOIAQASFQEAlwuUYwAAAABJRU5ErkJggg==)",
            size: "contain",
          }}
        />
        <Box
          background={{
            image:
              "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABGdBTUEAALGPC/xhBQAAAA9JREFUCB1jYMAC/mOIAQASFQEAlwuUYwAAAABJRU5ErkJggg==)",
            repeat: "repeat",
          }}
        />
        <Box
          background={{
            image:
              "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABGdBTUEAALGPC/xhBQAAAA9JREFUCB1jYMAC/mOIAQASFQEAlwuUYwAAAABJRU5ErkJggg==)",
            opacity: 0.5,
          }}
        />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
  /* eslint-enable max-len */

  test("background from theme", () => {
    const customTheme = {
      global: {
        backgrounds: {
          "image-2": {
            dark: `url(https://images.unsplash.com/photo-1614292253389-bd2c1f89cd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)`,
            light: `url(https://images.unsplash.com/photo-1603484477859-abe6a73f9366?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)`,
          },
          "gradient-1": `linear-gradient(
            hsl(240deg 90% 55%) 0%,
            hsl(341deg 90% 55%) 50%,
            hsl(60deg 90% 55%) 100%)`,
        },
      },
    };

    const { asFragment } = render(
      <ComponentLibrary theme={customTheme}>
        <Box background="gradient-1">
          <span>background gradient from theme</span>
        </Box>
        <Box background={{ image: "image-2", color: "red", opacity: true }}>
          <span>background image from theme</span>
        </Box>
        <Box
          background={{
            image:
              "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABGdBTUEAALGPC/xhBQAAAA9JREFUCB1jYMAC/mOIAQASFQEAlwuUYwAAAABJRU5ErkJggg==)",
            dark: true,
          }}
        />
      </ComponentLibrary>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("background clip", () => {
    const customTheme = {
      global: {
        backgrounds: {
          "gradient-1": `linear-gradient(
            hsl(240deg 90% 55%) 0%,
            hsl(341deg 90% 55%) 50%,
            hsl(60deg 90% 55%) 100%)`,
        },
      },
    };

    const { asFragment } = render(
      <ComponentLibrary theme={customTheme}>
        <Box background={{ image: "gradient-1", clip: "text" }}>
          <span weight="bold">background with clipped text</span>
        </Box>
      </ComponentLibrary>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("background rotate", () => {
    const customTheme = {
      global: {
        backgrounds: {
          "gradient-1": `linear-gradient(
            hsl(240deg 90% 55%) 0%,
            hsl(341deg 90% 55%) 50%,
            hsl(60deg 90% 55%) 100%)`,
        },
      },
    };

    const { asFragment } = render(
      <ComponentLibrary theme={customTheme}>
        <Box background={{ image: "gradient-1", rotate: -45 }}>
          <span weight="bold">background gradient rotated</span>
        </Box>
      </ComponentLibrary>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("round", () => {
    const { container } = render(
      <ComponentLibrary>
        <Box round />
        <Box round="xsmall" />
        <Box round="small" />
        <Box round="medium" />
        <Box round="large" />
        <Box round="full" />
        <Box round={{ corner: "left" }} />
        <Box round={{ corner: "top" }} />
        <Box round={{ corner: "right" }} />
        <Box round={{ corner: "bottom" }} />
        <Box round={{ corner: "top-left" }} />
        <Box round={{ corner: "top-right" }} />
        <Box round={{ corner: "bottom-left" }} />
        <Box round={{ corner: "bottom-right" }} />
        <Box round={{ size: "xsmall" }} />
        <Box round={{ size: "small" }} />
        <Box round={{ size: "medium" }} />
        <Box round={{ size: "large" }} />
        <Box round={{ size: "xlarge" }} />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("round with responive equal to false", () => {
    const { asFragment } = render(
      <ComponentLibrary>
        <Box responsive={false} round="large" />
      </ComponentLibrary>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("border", () => {
    const { container } = render(
      <ComponentLibrary>
        <Box border="all" />
        <Box border="horizontal" />
        <Box border="vertical" />
        <Box border="top" />
        <Box border="left" />
        <Box border="bottom" />
        <Box border="right" />
        <Box border={{ color: "accent-1" }} />
        <Box border={{ side: "all" }} />
        <Box border={{ size: "xsmall" }} />
        <Box border={{ size: "small" }} />
        <Box border={{ size: "medium" }} />
        <Box border={{ size: "large" }} />
        <Box border={{ size: "xlarge" }} />
        <Box border={{ style: "dotted" }} />
        <Box border={{ style: "double" }} />
        <Box border={{ style: "dashed" }} />
        <Box
          border={[
            { side: "top", color: "accent-1", size: "medium", style: "dotted" },
            { side: "left", color: "accent-2", size: "large", style: "dashed" },
          ]}
        />
        <Box border="between" gap="small">
          <Box>one</Box>
          <Box>two</Box>
        </Box>
        <Box border={[{ side: "between" }, { side: "top" }]} gap="small">
          <Box>one</Box>
          <Box>two</Box>
        </Box>
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("elevation", () => {
    const { container } = render(
      <ComponentLibrary>
        <Box elevation="none" />
        <Box elevation="xsmall" />
        <Box elevation="small" />
        <Box elevation="medium" />
        <Box elevation="large" />
        <Box elevation="xlarge" />
        <Box background="dark-1" elevation="small">
          <Box elevation="small" />
        </Box>
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("animation", () => {
    const animationProps: BoxProps["animation"][] = [
      "fadeIn",
      "fadeOut",
      "jiggle",
      "pulse",
      "rotateLeft",
      "rotateRight",
      "slideUp",
      "slideDown",
      "slideLeft",
      "slideRight",
      "zoomIn",
      "zoomOut",
    ];
    const { container } = render(
      <ComponentLibrary>
        {animationProps.map((type) => (
          <Box key={String(type)} animation={type} />
        ))}
        <Box animation={["fadeIn", "slideUp"]} />
        <Box animation={{ type: "fadeIn", duration: 1000, delay: 500 }} />
        <Box
          animation={[
            { type: "fadeIn", duration: 1000, delay: 500 },
            { type: "slideUp", duration: 1000, delay: 500 },
          ]}
        />
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test("hoverIndicator", () => {
    const { container } = render(
      <ComponentLibrary>
        <Box>
          <Box onClick={() => {}} hoverIndicator />
          <Box onClick={() => {}} hoverIndicator="background-contrast" />\
          <Box onClick={() => {}} hoverIndicator={{ color: "background-contrast" }} />
          <Box
            onClick={() => {}}
            hoverIndicator={{
              background: { color: "background-contrast" },
              elevation: "medium",
            }}
          />
        </Box>
      </ComponentLibrary>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
