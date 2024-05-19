import React from "react";

import { grommet, Box, Button, ComponentLibrary, Tip } from "grommet";

export const Simple = () => (
  //

  <Box align="center" justify="center" fill>
    <Tip content="action info">
      <Button label="action" />
    </Tip>
  </Box>
  //</ComponentLibrary>
);

Simple.args = {
  full: true,
};

Simple.parameters = {
  chromatic: { disable: true },
};

export default {
  title: "Controls/Tip/Simple",
};
