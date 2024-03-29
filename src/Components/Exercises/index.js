import React from "react";
import { Grid } from "@material-ui/core";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";


export default props => (
  <Grid container>
    <Grid item sm>
      <LeftPane />
    </Grid>
    <Grid item sm>
      <RightPane />
    </Grid>
  </Grid>
);