// src/components/Box.jsx
import { forwardRef } from "react";
import propTypes from "./propTypes";
import StyledBox from "./StyledBox";

export const Box = forwardRef(({ a11yTitle, tag: Tag = "div", skeleton, ...props }, ref) => {
  const content = (
    <StyledBox as={Tag} aria-label={a11yTitle} ref={ref} {...props}>
      {props.children}
    </StyledBox>
  );

  return content;
});

Box.propTypes = propTypes;
