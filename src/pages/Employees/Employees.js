import { useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from '@material-ui/core';
import { EMPLOYEES } from '../../navigation/constants';
import { useEmployeesStyles } from './employeesStyles';
import AddIcon from '@material-ui/icons/Add';
import { useEffect, useState } from 'react';
import PaperPadding from '../../components/PaperPadding/PaperPadding';
import { employeesMock } from '../../mocks/employees.mock';

const Employees = (props) => {
  const classes = useEmployeesStyles(props.isCheck);
  const history = useHistory();
  const [employees, setEmployees] = useState(employeesMock);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const timeOut = setTimeout(() => {
      filterEmployees(search);
    }, 300);

    return () => {
      clearTimeout(timeOut);
    };
  }, [search]);

  const onUserClick = (id) => {
    history.push(`${EMPLOYEES}/${id}`);
  };

  const filterEmployees = (searchText) => {
    const search = searchText.trim().toLowerCase();
    setEmployees(
      employeesMock.filter(
        (emp) =>
          emp.name.toLowerCase().includes(search) ||
          emp.lastName.toLowerCase().includes(search) ||
          emp.payRate.toString().includes(search)
      )
    );
  };

  return (
    <PaperPadding>
      <Box display="flex" alignItems="center" mb={3}>
        <Box>
          <TextField
            label="Kerko punetorin"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
        <Box flexGrow={1} />
        <Box>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => history.push(`${EMPLOYEES}/create`)}
          >
            Shto punetor
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
              <TableCell>Mosha</TableCell>
              <TableCell>Paga ditore</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((emp) => (
              <TableRow
                hover
                key={emp.id}
                className={classes.pointer}
                onClick={() => onUserClick(emp.id)}
              >
                <TableCell component="th" scope="row">
                  {emp.id}
                </TableCell>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.lastName}</TableCell>
                <TableCell>{emp.age}</TableCell>
                <TableCell>{emp.payRate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PaperPadding>
  );
};

export default Employees;
