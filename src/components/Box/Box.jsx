// src/components/Box.jsx
import propTypes from "./propTypes";
import StyledBox from "./StyledBox";

export const Box = ({ a11yTitle, tag: Tag = "div", skeleton, ...props }) => (
  <StyledBox as={Tag} aria-label={a11yTitle} {...props}>
    {skeleton ? <div className="skeleton" role="presentation" /> : props.children}
  </StyledBox>
);

Box.propTypes = propTypes;
