import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography
} from '@material-ui/core';
import PaperPadding from '../../../components/PaperPadding/PaperPadding';
import { Euro } from '@material-ui/icons';
import { useParams } from 'react-router-dom';

const EmployeeDetails = () => {
  const params = useParams();
  const title = params.id ? 'Update data' : 'Add employee';

  return (
    <PaperPadding>
      <Box mb={3}>
        <Typography variant="h6">{title}</Typography>
      </Box>

      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            label="Name"
            name="firstName"
            id="firstName"
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            label="Lastname"
            name="lastName"
            id="lastName"
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            label="City"
            name="city"
            id="city"
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            label="Adresa"
            name="address"
            id="address"
            fullWidth
          />
        </Grid>

        <Grid container item justifyContent="space-between">
          <Grid item xs={6} md={2}>
            <TextField
              variant="outlined"
              label="Salary"
              name="payRate"
              id="payRate"
              required
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Euro />
                  </InputAdornment>
                )
              }}
              fullWidth
            />
          </Grid>

          <Grid
            container
            item
            xs={6}
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Button variant="contained" color="primary">
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </PaperPadding>
  );
};

export default EmployeeDetails;
