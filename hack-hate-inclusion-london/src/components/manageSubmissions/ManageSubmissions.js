import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

import { getUserSubmissions } from '../../connections/DatabaseService';

const TablePaginationActions = ({
  count, page, rowsPerPage, onPageChange,
}) => {
  const handleFirstPageButtonClick = (
    event,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='first page button'
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='previous page button'
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page button'
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='last page button'
      >
        <LastPageIcon />
      </IconButton>
    </Box>
  );
};

export default function Submissions() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [submissions, setSubmissions] = React.useState([]);

  const getSubmissions = async () => {
    const { data } = await getUserSubmissions();

    if (data) {
      setSubmissions(data);
    }
  };

  React.useEffect(() => {
    getSubmissions();
  }, []);

  // Avoid a layout jump when reaching the last page with empty rows
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - submissions.length) : 0;

  const handleChangePage = (
    event,
    newPage,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const editSubmission = (id) => {
    console.log('HIT', id);
  };

  const tableHeadings = ['Last Updated', 'DDPO', 'Status', 'Actions'];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label='custom pagination table'>
        <TableHead sx={{
          backgroundColor: '#e6eaeb',
        }}
        >
          <TableRow>
            {tableHeadings.map((heading) => (<TableCell align='center'><b>{heading}</b></TableCell>))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? submissions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : submissions
          ).map((submission) => (
            <TableRow key={submission._id}>
              <TableCell style={{ width: 160 }} align='center'>
                {submission?.submissionDetails?.lastUpdated || '-'}
              </TableCell>
              <TableCell style={{ width: 160 }} align='center'>
                {submission.nameDdpo}
              </TableCell>
              <TableCell style={{ width: 160 }} align='center'>
                {submission?.submissionDetails?.isDraft ? 'Draft' : 'Submitted'}
              </TableCell>
              <TableCell style={{ width: 160 }} align='center'>
                <>
                  <Button onClick={() => editSubmission(submission._id)} startIcon={<EditIcon />}>
                    EDIT
                  </Button>
                </>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 69.5 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={submissions.length}
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
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

TablePaginationActions.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
