// Filename: ./src/components/Box/StyledBox.jsx

import styled, { css } from "styled-components";

const StyledBox = styled.div`
  ${(props) =>
    props.alignSelf &&
    css`
      align-self: ${props.alignSelf};
    `}
  ${(props) =>
    props.gridArea &&
    css`
      grid-area: ${props.gridArea};
    `}
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${(props) =>
    props.align &&
    css`
      align-items: ${props.align};
    `}
  ${(props) =>
    props.alignContent &&
    css`
      align-content: ${props.alignContent};
    `}
  ${(props) =>
    props.animation &&
    css`
      animation: ${props.animation};
    `}
  ${(props) =>
    props.background &&
    css`
      background: ${props.background};
    `}
  ${(props) =>
    props.basis &&
    css`
      flex-basis: ${props.basis};
    `}
  ${(props) =>
    props.border &&
    css`
      border: ${props.border};
    `}
  ${(props) =>
    props.direction &&
    css`
      flex-direction: ${props.direction};
    `}
  ${(props) =>
    props.elevation &&
    css`
      box-shadow: ${props.elevation};
    `}
  ${(props) =>
    props.flex !== undefined &&
    css`
      flex: ${typeof props.flex === "boolean" ? (props.flex ? "1" : "0") : props.flex};
    `}
  ${(props) =>
    props.fill &&
    css`
      width: 100%;
    `}
  ${(props) =>
    props.focusIndicator &&
    css`
      outline: 1px solid blue;
    `}
  ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap};
    `}
  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
  ${(props) =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `}
  ${(props) =>
    props.overflow &&
    css`
      overflow: ${props.overflow};
    `}
  ${(props) =>
    props.pad &&
    css`
      padding: ${props.pad};
    `}
  ${(props) =>
    props.round &&
    css`
      border-radius: ${props.round};
    `}
  ${(props) =>
    props.width &&
    !props.fill &&
    css`
      width: ${props.width};
    `}
  ${(props) =>
    props.wrap &&
    css`
      flex-wrap: ${props.wrap === true ? "wrap" : props.wrap === "reverse" ? "wrap-reverse" : "nowrap"};
    `}

  ${(props) =>
    props.hoverIndicator &&
    css`
      &:hover {
        ${(typeof props.hoverIndicator === "string" || props.hoverIndicator === true) &&
        css`
          background: ${typeof props.hoverIndicator === "string" ? props.hoverIndicator : "lightgrey"};
        `}
        ${typeof props.hoverIndicator === "object" &&
        props.hoverIndicator.background &&
        css`
          background: ${props.hoverIndicator.background};
        `}
        ${typeof props.hoverIndicator === "object" &&
        props.hoverIndicator.elevation &&
        css`
          box-shadow: ${props.hoverIndicator.elevation};
        `}
      }
    `}

  ${(props) =>
    props.skeleton &&
    css`
      .skeleton {
        width: 100%;
        height: 100%;
        background-color: #e0e0e0;
        animation: skeleton-animation 1.5s infinite linear;
      }
      @keyframes skeleton-animation {
        0% {
          opacity: 0.3;
        }
        50% {
          opacity: 0.6;
        }
        100% {
          opacity: 0.3;
        }
      }
    `}
`;

export default StyledBox;
