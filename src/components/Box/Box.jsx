// src/components/Box.jsx
import propTypes from "./propTypes";

export const Box = ({
  a11yTitle,
  alignSelf,
  gridArea,
  margin,
  align,
  alignContent,
  animation,
  background,
  basis,
  border,
  direction,
  elevation,
  flex,
  fill,
  focusIndicator,
  gap,
  height,
  hoverIndicator,
  justify,
  onClick,
  overflow,
  pad,
  responsive,
  round,
  skeleton,
  tag: Tag = "div",
  width,
  wrap,
  ...rest
}) => (
  <Tag
    aria-label={a11yTitle}
    style={{
      alignSelf,
      gridArea,
      margin,
      alignItems: align,
      alignContent,
      animation,
      background,
      flexBasis: basis,
      border,
      flexDirection: direction,
      boxShadow: elevation,
      flex,
      width: fill ? "100%" : width,
      outline: focusIndicator ? "1px solid blue" : "none",
      gap,
      height,
      justifyContent: justify,
      overflow,
      padding: pad,
      borderRadius: round,
      ...rest.style,
    }}
    onClick={onClick}
  >
    {skeleton ? <div className="skeleton" /> : rest.children}
  </Tag>
);

Box.propTypes = propTypes;
