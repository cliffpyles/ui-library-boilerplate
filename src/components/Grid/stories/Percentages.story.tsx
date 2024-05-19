import { Box, Grid } from "../..";

export const Percentages = () => (
  <Grid
    fill
    areas={[
      { name: "nav", start: [0, 0], end: [0, 0] },
      { name: "main", start: [1, 0], end: [1, 0] },
    ]}
    columns={["small", "flex"]}
    rows={["flex"]}
    gap="small"
  >
    <Box gridArea="nav" background="brand" />
    <Box gridArea="main" background="brand" />
  </Grid>
);

Percentages.args = {
  full: true,
};

export default {
  title: "Layout/Grid/Percentages",
};
