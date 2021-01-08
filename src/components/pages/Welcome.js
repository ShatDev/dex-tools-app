import { useState } from "react";
import { addProvider as api_addProvider } from "../../support/provider";
import { addProvider } from "../../actions/providers";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Welcome.module.scss";

import { TextField, Button, Grid } from "@material-ui/core";

const Welcome = () => {
  const dispatch = useDispatch();
  const [provider, setProvider] = useState(null);

  return (
    <div className={styles.wrapper}>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
        className={styles.grid}
      >
        <Grid item>
          <TextField
            label="RPC Provider"
            className={styles.input}
            onChange={(e) => {
              setProvider(e.target.value);
            }}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            onClick={() => {
              dispatch(addProvider(api_addProvider(provider)));
            }}
          >
            Connect
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Welcome;
