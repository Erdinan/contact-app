import "./App.css";
import { useEffect, useState } from "react";
import {
  Paper,
  Typography,
}
from "@mui/material/";
import UserDialog from './components/UserDialog';
import ContactTable from './components/ContactTable';

function App() {
  const [userData, setUserData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [userDialog, setUserDialog] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);

  return (
    <>
      <UserDialog
        open={openDialog}
        userDialog={userDialog}
        handleDialogClose={() => setOpenDialog(false)}
      />
      <Typography variant="h2" gutterBottom align="center" sx={{ padding: 1 }}>
        Contacts
      </Typography>
      <Paper elevation={0} sx={{ padding: 5 }}>
          <ContactTable
            userData = {userData}
            setOpenDialog = {setOpenDialog}
            setUserDialog = {setUserDialog}
          />
      </Paper>
    </>
  );
}

export default App;
