import React from "react";

import { ComponentLibrary, Box } from "../../..";

export const Plain = () => (
  <>
    <ComponentLibrary plain>
      <Box pad="medium">
        <p>Plain ComponentLibrary</p>
      </Box>
    </ComponentLibrary>
    <ComponentLibrary>
      <Box pad="medium">
        <p>Not plain ComponentLibrary </p>
      </Box>
    </ComponentLibrary>
  </>
);

export default {
  title: "Utilities/ComponentLibrary/Plain",
};
