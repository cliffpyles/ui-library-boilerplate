import { Box, Grid } from "../..";

export const GridAreasAlternative = () => (
  <Grid
    rows={["xxsmall", "medium", "xsmall"]}
    columns={["1/4", "3/4"]}
    areas={[
      ["header", "header"],
      ["sidebar", "main"],
      ["footer", "footer"],
    ]}
    gap="small"
  >
    <Box background="brand" gridArea="header">
      Header
    </Box>

    <Box background="light-5" gridArea="sidebar">
      Sidebar
    </Box>

    <Box background="light-2" gridArea="main">
      Main
    </Box>

    <Box background="dark-2" gridArea="footer">
      Footer
    </Box>
  </Grid>
);

GridAreasAlternative.args = {
  full: true,
};

export default {
  title: "Layout/Grid/Areas prop alternatives",
};
