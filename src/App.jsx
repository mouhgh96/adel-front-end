import { CssBaseline, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import {
  EditRoute,
  Home,
  Login,
  Protected,
  Question,
  SignUp,
} from './Components';
import { AdminRoute } from './Components/AdminRoute/AdminRoute';

const useStyles = makeStyles({
  content: {
    maxWidth: 'max-content',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Protected>
              <Home />
            </Protected>
          </Route>
          <Route path="/questions/:id" exact>
            <Protected>
              <Question />
            </Protected>
          </Route>
          <Route path="/admin" exact>
            <Protected>
              <AdminRoute />
            </Protected>
          </Route>
          <Route path="/user/:id/edit" exact>
            <Protected>
              <EditRoute />
            </Protected>
          </Route>
          <Route path="/signup" exact>
            <Paper className={classes.content}>
              <SignUp />
            </Paper>
          </Route>
          <Route path="/login" exact>
            <Paper className={classes.content}>
              <Login />
            </Paper>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
