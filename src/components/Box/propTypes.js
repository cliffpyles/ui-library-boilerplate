import PropTypes from "prop-types";

const propTypes = {
  a11yTitle: PropTypes.string,
  alignSelf: PropTypes.oneOf(["start", "center", "end", "stretch", "baseline"]),
  gridArea: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  align: PropTypes.oneOf(["baseline", "center", "end", "start", "stretch"]),
  alignContent: PropTypes.oneOf(["around", "baseline", "between", "center", "evenly", "end", "start", "stretch"]),
  animation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      type: PropTypes.string,
      delay: PropTypes.number,
      duration: PropTypes.number,
      size: PropTypes.string,
    }),
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          type: PropTypes.string,
          delay: PropTypes.number,
          duration: PropTypes.number,
          size: PropTypes.string,
        }),
      ])
    ),
  ]),
  background: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      color: PropTypes.string,
      image: PropTypes.string,
      position: PropTypes.string,
      opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      repeat: PropTypes.string,
      size: PropTypes.string,
    }),
  ]),
  basis: PropTypes.string,
  border: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      color: PropTypes.string,
      size: PropTypes.string,
      style: PropTypes.string,
    }),
  ]),
  direction: PropTypes.oneOf(["row", "column", "row-responsive", "row-reverse", "column-reverse"]),
  elevation: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flex: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  fill: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  focusIndicator: PropTypes.bool,
  gap: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hoverIndicator: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.shape({
      background: PropTypes.string,
      elevation: PropTypes.string,
    }),
  ]),
  justify: PropTypes.oneOf(["around", "between", "center", "end", "evenly", "start", "stretch"]),
  onClick: PropTypes.func,
  overflow: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      horizontal: PropTypes.string,
      vertical: PropTypes.string,
    }),
  ]),
  pad: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  responsive: PropTypes.bool,
  round: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  skeleton: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      animation: PropTypes.string,
      colors: PropTypes.object,
      depth: PropTypes.number,
      message: PropTypes.string,
    }),
  ]),
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.elementType]),
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  wrap: PropTypes.oneOf(["reverse", true, false]),
};

export default propTypes;
