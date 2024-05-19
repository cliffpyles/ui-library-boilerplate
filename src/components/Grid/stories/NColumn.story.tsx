import { Box, Grid } from "../..";

export const NColumnGrid = () => (
  <Grid
    columns={{
      count: 6,
      size: "auto",
    }}
    gap="small"
  >
    <Box background="brand">Item 1</Box>
    <Box background="brand">Item 2</Box>
    <Box background="brand">Item 3</Box>
    <Box background="brand">Item 4</Box>
    <Box background="brand">Item 5</Box>
    <Box background="brand">Item 6</Box>
  </Grid>
);

NColumnGrid.args = {
  full: true,
};

export default {
  title: "Layout/Grid/N-column layout",
};
