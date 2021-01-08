import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProviders } from "./actions/providers";
import { getProviders as api_getProviders } from "./support/provider";
import styles from "./App.module.scss";

import Titlebar from "react-electron-titlebar";

import Popup from "./components/Popup";
import Notification from "./components/Notification";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import Settings from "./components/pages/Settings";
import Welcome from "./components/pages/Welcome";

const App = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.providers);
  const [showNoti, setShowNoti] = useState(false);
  const [notiMessage, setNotiMessage] = useState({});

  useEffect(() => {
    if (data.length > 0) {
      setNotiMessage(`Connected to ${data[0].network}`);
      setShowNoti(true);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      setNotiMessage(error);
      setShowNoti(true);
    }
  }, [error]);

  useEffect(() => {
    dispatch(getProviders(api_getProviders()));
  }, [dispatch]);

  const onNotiClose = () => {
    setShowNoti(false);
  };

  return (
    <React.Fragment>
      <Popup />
      <Notification
        message={notiMessage}
        type={error != null ? "error" : "success"}
        open={showNoti}
        onClose={onNotiClose}
      />
      <Router>
        <Route
          render={({ location, history }) => (
            <React.Fragment>
              <Titlebar />
              {!error && data.length > 0 ? (
                <React.Fragment>
                  <Navigation history={history} />
                  <main className={styles.main}>
                    <Switch>
                      <Route
                        path="/trade"
                        exact
                        component={(props) => <h1>Trade</h1>}
                      />
                      <Route
                        path="/tracker"
                        exact
                        component={(props) => <h1>Tracker</h1>}
                      />
                      <Route
                        path="/explorer"
                        exact
                        component={(props) => <h1>Explorer</h1>}
                      />
                      <Route
                        path="/settings"
                        exact
                        component={(props) => <Settings />}
                      />
                      <Route component={(props) => <Home />} />
                    </Switch>
                  </main>
                </React.Fragment>
              ) : (
                <Welcome />
              )}
            </React.Fragment>
          )}
        />
      </Router>
    </React.Fragment>
  );
};

export default App;
