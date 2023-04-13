import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TextField, Button } from "@mui/material";

export default function BasicGrid() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField label="First Name" size="small" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <TextField label="Middle Name" size="small" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <TextField label="Last Name" size="small" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Email" size="small" type="email" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Phone" size="small" type="Phone" fullWidth />
        </Grid>
      </Grid>
      <Grid container spacing={1} style={{ marginTop: "10px" }}>
        <Grid item>
          <Button color="success" variant="contained">
            Submit
          </Button>
        </Grid>
        <Grid item>
          <Button color="error" variant="contained">
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
