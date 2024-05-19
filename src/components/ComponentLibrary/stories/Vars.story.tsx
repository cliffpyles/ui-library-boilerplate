import React from "react";

import { grommet, ComponentLibrary, Box } from "../../..";

export const Vars = () => (
  <ComponentLibrary theme= { grommet } cssVars>
    <Box pad="medium" background = "var(--accent-2)" gap = "medium" >
      <Box>Checkout ComponentLibrary variables, you can find them in the StyledComponentLibrary DOM.< /Box>
        <Box with> For example, the background color in this Box is using var(--accent - 2) </Box>
          </Box>
          </ComponentLibrary>
);

export default {
  title: "Utilities/ComponentLibrary/Vars",
};
