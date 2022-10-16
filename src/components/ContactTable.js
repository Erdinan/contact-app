import {
    TableHead,
    TableRow,
    Table,
    TableBody,
    TableCell,
    Button,
    TableContainer,
    Paper
}
from "@mui/material";

const ContactTable = ({
    userData,
    setOpenDialog,
    setUserDialog
}) => {
    return(
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
              {userData.map((row) => (
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
    )
}

export default ContactTable;