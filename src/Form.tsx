import { Grid, TextField, Typography } from "@mui/material";

// NOTE: Make new Array
// Render Dynamic form
// Control OTP input, only 4 characters and sending in console.log
// Make a Provider for access to state on other Components

const DynamicForm = () => (
  <Grid container spacing={2} mt={2}>
    <Grid xs={12} item>
      <Typography>Sample Form</Typography>
    </Grid>

    <Grid xs={6} item>
      <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{ width: "100%" }}
      />
    </Grid>
  </Grid>
);

export default DynamicForm;
