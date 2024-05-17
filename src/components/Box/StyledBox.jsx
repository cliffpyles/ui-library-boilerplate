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
  ${(props) => getAlignSelf(props.alignSelf)}
  ${(props) => getGridArea(props.gridArea)}
  ${(props) => getMargin(props.margin)}
  ${(props) => getAlignItems(props.align)}
  ${(props) => getAlignContent(props.alignContent)}
  ${(props) => getAnimation(props.animation)}
  ${(props) => getBackground(props.background)}
  ${(props) => getBorder(props.border)}
  ${(props) => getDirection(props.direction)}
  ${(props) => getElevation(props.elevation)}
  ${(props) => getFlex(props.flex)}
  ${(props) => getFill(props.fill)}
  ${(props) => getGap(props.gap)}
  ${(props) => getHeight(props.height)}
  ${(props) => getHoverIndicator(props.hoverIndicator)}
  ${(props) => getOverflow(props.overflow)}
  ${(props) => getPad(props.pad)}
  ${(props) => getRound(props.round)}
  ${(props) => getWidth(props.width)}
  ${(props) => getWrap(props.wrap)}

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
