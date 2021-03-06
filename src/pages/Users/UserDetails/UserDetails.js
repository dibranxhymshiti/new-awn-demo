import PaperPadding from '../../../components/PaperPadding/PaperPadding';
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography
} from '@material-ui/core';
import { useState } from 'react';

const roles = [
  {
    label: 'Admin',
    value: 'ADMIN'
  },
  {
    label: 'User',
    value: 'USER'
  }
];

const UserDetails = () => {
  const [role, setRole] = useState('ADMIN');

  const handleRole = (event) => {
    setRole(event.target.value);
  };

  return (
    <PaperPadding>
      <Box mb={3}>
        <Typography variant="h6">Update Talent</Typography>
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
            label="Email"
            name="email"
            id="email"
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            label="Password"
            name="password"
            id="password"
            type="password"
            required
            fullWidth
          />
        </Grid>

        <Grid container item justifyContent="space-between">
          <Grid item xs={6} md={2}>
            <TextField
              variant="outlined"
              label="Role"
              id="role"
              select
              fullWidth
              value={role}
              onChange={handleRole}
            >
              {roles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
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

export default UserDetails;
