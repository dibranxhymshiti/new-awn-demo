import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { USERS } from '../../navigation/constants';
import PaperPadding from '../../components/PaperPadding/PaperPadding';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { usersMock } from '../../mocks/users.mock';
import { usersStyles } from './usersStyles';

const Users = () => {
  const classes = usersStyles();
  const history = useHistory();
  const [users] = useState(usersMock);

  const onUserClick = (id) => {
    history.push(`${USERS}/${id}`);
  };

  return (
    <PaperPadding>
      <Box display="flex" alignItems="center" mb={3}>
        <Box flexGrow={1} />
        <Box>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => history.push(`${USERS}/create`)}
          >
            Shto perdorues
          </Button>
        </Box>
      </Box>

      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Nr</TableCell>
              <TableCell>Emri</TableCell>
              <TableCell>Mbiemri</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Roli</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((usr) => (
              <TableRow
                hover
                key={usr.id}
                className={classes.pointer}
                onClick={() => onUserClick(usr.id)}
              >
                <TableCell component="th" scope="row">
                  {usr.id}
                </TableCell>
                <TableCell>{usr.name}</TableCell>
                <TableCell>{usr.lastName}</TableCell>
                <TableCell>{usr.email}</TableCell>
                <TableCell>{usr.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PaperPadding>
  );
};

export default Users;
