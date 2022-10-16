import {
  styled,
  DialogTitle,
  Dialog,
  DialogContent,
  Grid,
  Paper,
} from '@mui/material';

const UserDialog = ({
  userDialog,
  open,
  handleDialogClose,
}) => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

  return (
    <Dialog onClose={handleDialogClose} open={open}>
      <DialogTitle>Contact Details</DialogTitle>
      <DialogContent>
        <Grid container rowSpacing={1} columnSpacing={1}>
          <Grid item xs={12}>
            <Item>Name : {userDialog?.name}</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Username : {userDialog?.username}</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Email : {userDialog?.email}</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              Address : {userDialog?.address.street},{" "}
              {userDialog?.address.suite}, {userDialog?.address.city},{" "}
              {userDialog?.address.zipcode}
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Phone : {userDialog?.phone}</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>Website : {userDialog?.website}</Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              Company Name : {userDialog?.company.name}
              <br />
              Company CatchPhrase: {userDialog?.company.catchPhrase}
              <br />
              Company Business: {userDialog?.company.bs}
            </Item>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default UserDialog;