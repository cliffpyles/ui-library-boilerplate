// Filename: ./src/components/Box/StyledBox.jsx
import { css } from "styled-components";

// Utility functions to handle various prop types
export const getAlignSelf = ({ alignSelf }) =>
  alignSelf &&
  css`
    align-self: ${alignSelf};
  `;
export const getGridArea = ({ gridArea }) =>
  gridArea &&
  css`
    grid-area: ${gridArea};
  `;
export const getMargin = ({ margin }) =>
  margin &&
  css`
    margin: ${typeof margin === "object"
      ? `${margin.top || 0} ${margin.right || 0} ${margin.bottom || 0} ${margin.left || 0}`
      : margin};
  `;
export const getAlignItems = ({ align }) =>
  align &&
  css`
    align-items: ${align};
  `;
export const getAlignContent = ({ alignContent }) =>
  alignContent &&
  css`
    align-content: ${alignContent};
  `;
export const getAnimation = ({ animation }) => {
  if (typeof animation === "string") {
    return css`
      animation: ${animation};
    `;
  } else if (Array.isArray(animation)) {
    return css`
      animation: ${animation.join(", ")};
    `;
  } else if (typeof animation === "object") {
    const { type, delay, duration, size } = animation;
    return css`
      animation: ${type} ${duration}ms ${delay}ms ${size};
    `;
  }
  return "";
};
export const getBackground = ({ background }) => {
  if (typeof background === "string") {
    return css`
      background: ${background};
    `;
  } else if (typeof background === "object") {
    const { color, image, position, opacity, repeat, size } = background;
    return css`
      background-color: ${color};
      background-image: ${image};
      background-position: ${position};
      background-opacity: ${opacity};
      background-repeat: ${repeat};
      background-size: ${size};
    `;
  }
  return "";
};
export const getBorder = ({ border }) => {
  if (typeof border === "string" || typeof border === "boolean") {
    return css`
      border: ${border};
    `;
  } else if (typeof border === "object") {
    const { color, size, style, side } = border;
    return css`
      border-${side}: ${size} ${style} ${color};
    `;
  } else if (Array.isArray(border)) {
    return border
      .map((b) => {
        const { color, size, style, side } = b;
        return css`border-${side}: ${size} ${style} ${color};`;
      })
      .join(" ");
  }
  return "";
};
export const getDirection = ({ direction }) =>
  direction &&
  css`
    flex-direction: ${direction};
  `;
export const getElevation = ({ elevation }) =>
  elevation &&
  css`
    box-shadow: var(--elevation-${elevation});
  `;
export const getFlex = ({ flex }) => {
  if (typeof flex === "boolean") {
    return css`
      flex: ${flex ? "1 1 auto" : "0 0 auto"};
    `;
  } else if (typeof flex === "string") {
    return css`
      flex: ${flex};
    `;
  } else if (typeof flex === "object") {
    const { grow, shrink } = flex;
    return css`
      flex-grow: ${grow};
      flex-shrink: ${shrink};
    `;
  }
  return "";
};
export const getFill = ({ fill }) => {
  if (typeof fill === "boolean") {
    return (
      fill &&
      css`
        width: 100%;
        height: 100%;
      `
    );
  } else if (typeof fill === "string") {
    return css`
      width: ${fill === "horizontal" ? "100%" : "auto"};
      height: ${fill === "vertical" ? "100%" : "auto"};
    `;
  }
  return "";
};
export const getGap = ({ gap }) => {
  if (typeof gap === "string") {
    return css`
      gap: ${gap};
    `;
  } else if (typeof gap === "object") {
    return css`
      row-gap: ${gap.row};
      column-gap: ${gap.column};
    `;
  }
  return "";
};
export const getHeight = ({ height }) =>
  height &&
  css`
    height: ${typeof height === "object" ? `${height.min} ${height.max}` : height};
  `;
export const getHoverIndicator = ({ hoverIndicator }) => {
  if (typeof hoverIndicator === "string" || hoverIndicator === true) {
    return css`
      &:hover {
        background: ${typeof hoverIndicator === "string" ? hoverIndicator : "lightgrey"};
      }
    `;
  } else if (typeof hoverIndicator === "object") {
    const { background, elevation } = hoverIndicator;
    return css`
      &:hover {
        ${background &&
        css`
          background: ${background};
        `}
        ${elevation &&
        css`
          box-shadow: ${elevation};
        `}
      }
    `;
  }
  return "";
};
export const getOverflow = ({ overflow }) => {
  if (typeof overflow === "string") {
    return css`
      overflow: ${overflow};
    `;
  } else if (typeof overflow === "object") {
    return css`
      overflow-x: ${overflow.horizontal};
      overflow-y: ${overflow.vertical};
    `;
  }
  return "";
};
export const getPad = ({ pad }) => {
  if (typeof pad === "string") {
    return css`
      padding: ${pad};
    `;
  } else if (typeof pad === "object") {
    return css`
      padding-top: ${pad.top};
      padding-right: ${pad.right};
      padding-bottom: ${pad.bottom};
      padding-left: ${pad.left};
    `;
  }
  return "";
};
export const getRound = ({ round }) => {
  if (typeof round === "string") {
    return css`
      border-radius: ${round};
    `;
  } else if (typeof round === "object") {
    return css`
      border-top-left-radius: ${round.corner === "top-left" ? round.size : 0};
      border-top-right-radius: ${round.corner === "top-right" ? round.size : 0};
      border-bottom-right-radius: ${round.corner === "bottom-right" ? round.size : 0};
      border-bottom-left-radius: ${round.corner === "bottom-left" ? round.size : 0};
    `;
  }
  return "";
};
export const getWidth = ({ width }) =>
  width &&
  css`
    width: ${typeof width === "object" ? `${width.min} ${width.max}` : width};
  `;
export const getWrap = ({ wrap }) =>
  wrap &&
  css`
    flex-wrap: ${wrap === true ? "wrap" : wrap === "reverse" ? "wrap-reverse" : "nowrap"};
  `;
