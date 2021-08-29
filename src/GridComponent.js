import { Grid } from "@material-ui/core";

function GridComponent() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      style={{ borderStyle: "dashed", borderColor: "red", height: "800px" }}
    >
      <Grid item style={{ borderStyle: "solid" }} xs={12}>
        Hello
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item>Hello</Grid>
          <Grid item>Hello</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default GridComponent;
