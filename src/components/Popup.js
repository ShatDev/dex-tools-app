import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import styles from "./Popup.module.scss";

const Popup = () => {
  return (
    <Dialog open={false}>
      <DialogTitle id="alert-dialog-title">DS</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" />
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
