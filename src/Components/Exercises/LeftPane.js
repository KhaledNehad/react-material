import React from "react";
import { Paper } from "@material-ui/core";
import Posts from "./Posts";
import Typography from "@material-ui/core/Typography";
const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
}
export default props =>

  <Paper style={styles.Paper}>
    <Typography variant="h4" component="h2" gutterBottom>
      Posts
      </Typography>
    <Posts />
  </Paper>

