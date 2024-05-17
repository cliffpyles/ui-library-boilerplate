// src/components/ThemeContext/propTypes.ts
import PropTypes from 'prop-types';

const ThemeContextPropTypes = {
    theme: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
};

export default ThemeContextPropTypes;
