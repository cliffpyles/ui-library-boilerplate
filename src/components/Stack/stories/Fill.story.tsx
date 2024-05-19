import React from "react";

import { Box, Stack } from "../../..";

export const Fill = () => (
  <Stack fill>
    <Box background="brand" fill>
      Test
    </Box>
  </Stack>
);

Fill.args = {
  full: true,
};

export default {
  title: "Layout/Stack/Fill",
};
