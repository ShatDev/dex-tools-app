import React from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import styles from "./Notification.module.scss";

const Notification = ({ message, onClose, open, type }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
