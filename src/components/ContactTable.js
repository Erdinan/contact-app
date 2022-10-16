import { useState } from 'react';
import {
  TableHead,
  TableRow,
  Table,
  TableBody,
  TableCell,
  Button,
  TableContainer,
  Paper,
  TextField,
} from "@mui/material";

const ContactTable = ({ userData, setOpenDialog, setUserDialog }) => {

  const [searchKeyword, setSearchKeyword] = useState("");

  const filterFn = (user) => (
    user.name.toLowerCase().includes(searchKeyword) ||
    user.username.toLowerCase().includes(searchKeyword) ||
    user.email.toLowerCase().includes(searchKeyword) ||
    user.phone.toLowerCase().includes(searchKeyword) ||
    user.website.toLowerCase().includes(searchKeyword)
  );

  const data = userData.filter(filterFn);

  return (
    <>
      <TextField
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        sx={{ marginBottom: '16px' }}
        fullWidth
        label="Search..."
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Website</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.username}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.website}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setOpenDialog(true);
                      setUserDialog(row);
                    }}
                  >
                    View Detail
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ContactTable;
