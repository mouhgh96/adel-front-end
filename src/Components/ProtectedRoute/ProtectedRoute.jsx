import { Container, Fab, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { QuestionProvider } from '../../question.context';
import { AddPost } from '../AddPost/AddPost';
import { Header } from '../Header/Header';

let useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    textAlign: 'right',
    zIndex: '-1',
  },
}));
export const Protected = ({ children }) => {
  let classes = useStyles();
  let location = useLocation();
  let history = useHistory();
  let [open, setOpen] = useState(false);
  useEffect(() => {
    let token = localStorage.getItem('access_token') || '';
    console.log('location', location);
    if (!token.trim()) {
      history.push('/login', {
        from: {
          pathname: location.pathname,
        },
      });
    }
  }, []);

  const onClick = () => {
    setOpen(true);
  };
  return (
    <QuestionProvider>
      <Header />
      <Container maxWidth="lg">
        {children}
        <AddPost open={open} setOpen={setOpen} />
      </Container>
      <Container maxWidth="lg" className={classes.fab}>
        <Fab color="primary" aria-label="edit" onClick={onClick}>
          <EditIcon />
        </Fab>
      </Container>
    </QuestionProvider>
  );
};
