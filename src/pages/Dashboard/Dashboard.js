import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography';
import TableHead from '@material-ui/core/TableHead';
import Button from '@material-ui/core/Button';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditIcon from '@material-ui/icons/Edit';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import SearchIcon from '@material-ui/icons/Search';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import FilterListIcon from '@material-ui/icons/FilterList';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
    </Box>
  );
}
const Dashboard = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const StyledTableHead = styled(TableHead)(({ theme }) => ({
    [`&.MuiTableHead-root`]: {
      background: 'transparent',
    },
  }));
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.MuiTableCell-root`]: {
      paddingLeft: 0,
    },
  }));
  const StyledFooterRow = styled(TableRow)(({ theme }) => ({
    [`&:last-child td`]: {
      borderBottom: 0,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    [`&.MuiTableRow-root`]: {
      marginTop: '10px',
      boxShadow: '5px black',
      background: 'white'
    },
  }));
  const StyledPaper = styled(Paper)(({ theme }) => ({
    [`&.MuiPaper-root`]: {
      boxShadow: 'none',
      background: 'transparent'
    },
  }));

  const rows = [
    { name: 'ongoing', calories: 'Admin Work', fat: 'Sales', carbs: 'June 5th - June 8th', protein: '$500', talent: 'Jennifer Anniston', color: 'Lavender' },
    { name: 'completed', calories: 'IT Project', fat: 'Sales', carbs: 'June 5th - June 8th', protein: '$200', talent: 'John Goodman', color: 'LightSkyBlue' },
    { name: 'draft', calories: 'New Training', fat: 'Marketing', carbs: 'June 5th - June 8th', protein: '$700', talent: 'Brad Pitt', color: 'LightGreen' },
    { name: 'payment due', calories: 'UX/Website Design', fat: 'Design', carbs: 'June 5th - June 8th', protein: '$250', talent: 'Jennifer Anniston', color: 'LightPink' },
    { name: 'pending approval', calories: 'New design Mock-up', fat: 'Design', carbs: 'June 5th - June 8th', protein: '$11500', talent: 'Jennifer Anniston', color: 'LemonChiffon' },
    { name: 'completed', calories: 'IT Project', fat: 'Sales', carbs: 'June 5th - June 8th', protein: '$200', talent: 'John Goodman', color: 'LightSkyBlue' },
    { name: 'payment due', calories: 'UX/Website Design', fat: 'Design', carbs: 'June 5th - June 8th', protein: '$250', talent: 'Jennifer Anniston', color: 'LightPink' },
    { name: 'draft', calories: 'New Training', fat: 'Marketing', carbs: 'June 5th - June 8th', protein: '$700', talent: 'Brad Pitt', color: 'LightGreen' },
    { name: 'pending approval', calories: 'New design Mock-up', fat: 'Design', carbs: 'June 5th - June 8th', protein: '$11500', talent: 'Jennifer Anniston', color: 'LemonChiffon' },
    { name: 'ongoing', calories: 'Admin Work', fat: 'Sales', carbs: 'June 5th - June 8th', protein: '$500', talent: 'Jennifer Anniston', color: 'Lavender' },
  ]

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return <div >
    <Box component='div' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h2" gutterBottom component="div">
        Welcome back, Bill
      </Typography>
      <Box component='div' >
        <IconButton
          aria-label="edit icon"
          style={{ marginLeft: 20 }}
        >
          <SearchIcon fontSize='medium' />
        </IconButton>
        <IconButton
          aria-label="edit icon"
          style={{ marginLeft: 20 }}
        >
          <CloudDownloadIcon fontSize='medium' />
        </IconButton>
        <IconButton
          aria-label="edit icon"
          style={{ marginLeft: 20 }}
        >
          <ViewColumnIcon fontSize='medium' />
        </IconButton>
        <IconButton
          aria-label="edit icon"
          style={{ marginLeft: 20 }}
        >
          <FilterListIcon fontSize='medium' />
        </IconButton>
      </Box>

    </Box>
    <TableContainer sx={{ background: 'transparent' }} component={StyledPaper}>
      <Table sx={{ minWidth: 1000 }} aria-label="customized table">
        <StyledTableHead>
          <TableRow>
            <TableCell align="center">Project Status</TableCell>
            <TableCell align="left">Assigment</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Timeline</TableCell>
            <TableCell align="left">Project Budget</TableCell>
            <TableCell align="left">Talent</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody >
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <StyledTableRow sx={{ mx: 10, px: 10 }} key={row.name}>
              <StyledTableCell align="left">
                <Box component='div'
                  sx={{
                    backgroundColor: row.color,
                    textAlign: 'center', fontWeight: '500', textTransform: 'uppercase', padding: 2, borderRadius: '0 4px 4px 0', color: 'SlateGray'
                  }}>
                  {row.name}
                </Box>
              </StyledTableCell>
              <TableCell style={{ fontWeight: '400', color: 'gray' }} align="left">{row.calories}</TableCell>
              <TableCell style={{ fontWeight: '400', color: 'gray' }} align="left">{row.fat}</TableCell>
              <TableCell style={{ fontWeight: '400', color: 'gray' }} align="left">{row.carbs}</TableCell>
              <TableCell style={{ fontWeight: '400', color: 'gray' }} align="left">{row.protein}</TableCell>
              <TableCell style={{ fontWeight: '400', color: 'gray' }} align="left">{row.talent}</TableCell>
              <TableCell style={{ fontWeight: '400', color: 'gray' }} align="center">
                <IconButton
                  aria-label="edit icon"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  aria-label="delete icon"
                >
                  <DeleteOutlinedIcon />
                </IconButton>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter style={{borderBottom: 'none'}}>
          <StyledFooterRow style={{borderBottom: 'none'}}>
            <StyledTableCell>
              <Button variant="contained" style={{ width: '100%' }} color='primary' disableElevation>
                View all
                <ArrowRightAltIcon fontSize='medium' />
              </Button>
            </StyledTableCell>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              // colSpan={5}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </StyledFooterRow>
        </TableFooter>
      </Table>
    </TableContainer>

  </div>


};

export default Dashboard;
