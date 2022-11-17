import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function SimpleSnackbar(props) {
  const [open, setOpen] = React.useState(props.open);

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        ContentProps={{
          sx: {
            background: "#FF6300",
          },
        }}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        message={props.message}
        action={action}
      />
    </div>
  );
}
