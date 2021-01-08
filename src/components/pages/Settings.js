import React from "react";
import { TextField, Container, Paper, Button } from "@material-ui/core";
import styles from "./Settings.module.scss";
import Header from "../Header";

const Settings = () => {
  return (
    <div className={styles.wrapper}>
      {/* <Header page="Settings" /> */}
      <Container maxWidth="md" className={styles.form}>
        <Paper elevation={3}>
          <Header page="Integrations" />
          <Container maxWidth="md" className={styles.form}>
            <div>
              <TextField
                required
                id="standard-required"
                label="Required"
                defaultValue="Hello World"
              />
              <Button variant="contained" color="primary" className={""}>
                Connect
              </Button>
            </div>
          </Container>
        </Paper>
      </Container>
    </div>
  );
};

export default Settings;
