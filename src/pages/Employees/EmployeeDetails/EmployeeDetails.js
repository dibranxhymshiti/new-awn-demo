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
  const title = params.id ? 'Ndrysho te dhenat' : 'Krijo punetore';

  return (
    <PaperPadding>
      <Box mb={3}>
        <Typography variant="h6">{title}</Typography>
      </Box>

      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Emri"
            name="firstName"
            id="firstName"
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Mbiemri"
            name="lastName"
            id="lastName"
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Komuna" name="city" id="city" required fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Adresa" name="address" id="address" fullWidth />
        </Grid>

        <Grid container item justifyContent="space-between">
          <Grid item xs={6} md={2}>
            <TextField
              label="Paga ditore"
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
              Ruaj
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </PaperPadding>
  );
};

export default EmployeeDetails;
