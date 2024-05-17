// Filename: ./src/components/Box/StyledBox.jsx
import styled, { css } from "styled-components";
import {
  getAlignSelf,
  getGridArea,
  getMargin,
  getAlignItems,
  getAlignContent,
  getAnimation,
  getBackground,
  getBorder,
  getDirection,
  getElevation,
  getFlex,
  getFill,
  getGap,
  getHeight,
  getHoverIndicator,
  getOverflow,
  getPad,
  getRound,
  getWidth,
  getWrap,
} from "./utils";
const StyledBox = styled.div`
  ${(props) => getAlignSelf(props)}
  ${(props) => getGridArea(props)}
  ${(props) => getMargin(props)}
  ${(props) => getAlignItems(props)}
  ${(props) => getAlignContent(props)}
  ${(props) => getAnimation(props)}
  ${(props) => getBackground(props)}
  ${(props) => getBorder(props)}
  ${(props) => getDirection(props)}
  ${(props) => getElevation(props)}
  ${(props) => getFlex(props)}
  ${(props) => getFill(props)}
  ${(props) => getGap(props)}
  ${(props) => getHeight(props)}
  ${(props) => getHoverIndicator(props)}
  ${(props) => getOverflow(props)}
  ${(props) => getPad(props)}
  ${(props) => getRound(props)}
  ${(props) => getWidth(props)}
  ${(props) => getWrap(props)}

  ${(props) =>
    props.focusIndicator &&
    css`
      &:focus {
        outline: 1px solid blue;
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
