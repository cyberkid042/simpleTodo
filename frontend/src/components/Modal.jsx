import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export const Modal = ({ handleClose, open, deleteItem }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Are you sure you want to delete this Item?"}
      </DialogTitle>

      <DialogActions>
        <Button
          onClick={handleClose}
          variant="contained"
          color="warning"
          autoFocus
        >
          No, Cancel
        </Button>
        <Button onClick={deleteItem} color="error">
          Yes, Delete!
        </Button>
      </DialogActions>
    </Dialog>
  );
};
