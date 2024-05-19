import React from "react";

import { Box } from "../../..";

export const RTLBox = () => (
  <Box direction="row" align="center" pad="small" gap="small" border>
    <Box direction="row" align="center" pad="small" border="start">
      border start
    </Box>
    <Box direction="row" align="center" pad={{ start: "large" }} background="brand">
      pad start
    </Box>
    <Box direction="row" align="center" margin={{ start: "large" }} background="brand">
      margin start
    </Box>
  </Box>
);

RTLBox.args = {
  dir: "rtl",
};

export default {
  title: "Layout/Box/RTL",
};
