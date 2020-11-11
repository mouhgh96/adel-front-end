import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonIcon from '@material-ui/icons/Person';
import SendIcon from '@material-ui/icons/Send';
import { formatRelative } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Field, Form, Formik } from 'formik';
import React from 'react';
// import Faker from "faker";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  fonts: {
    fontWeight: 'bold',
  },
  inline: {
    display: 'inline',
  },
  content: {
    display: 'block',
    padding: theme.spacing(0, 4),
  },
  create: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1rem',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 0,
    marginLeft: '.25em',
  },
  item: {
    marginBottom: '.5rem',
    backgroundColor: theme.palette.background.paper,
  },
}));
let initialValues = {
  content: '',
};
export const Comments = ({ responses, deleteResponse, submitResponse }) => {
  console.log(responses);
  const classes = useStyles();
  return (
    <div className="Comment">
      <Formik initialValues={initialValues} onSubmit={submitResponse}>
        {() => {
          return (
            <Form>
              <div className={classes.create}>
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <PersonIcon />
                </Avatar>
                <Field name="content">
                  {({ field }) => {
                    // console.log(field, meta);
                    return (
                      <TextField
                        name="content"
                        type="text"
                        fullWidth
                        label="donnez une reponse svp"
                        className={classes.input}
                        variant="outlined"
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                    );
                  }}
                </Field>
                <IconButton type="submit" color="primary">
                  <SendIcon />
                </IconButton>
              </div>
            </Form>
          );
        }}
      </Formik>
      {responses.length > 0 ? (
        <List className={classes.root}>
          {responses.map((response) => {
            let { from, content, updatedAt, editable, id } = response;
            return (
              <div key={id} className={classes.item} id={id}>
                <ListItem key={id} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography className={classes.fonts}>
                        {from?.username}
                      </Typography>
                    }
                    secondary={formatRelative(
                      Date.parse(updatedAt),
                      Date.now(),
                      {
                        locale: fr,
                      },
                    )}
                  />
                  {editable ? (
                    <IconButton
                      aria-label="settings"
                      onClick={() => deleteResponse(id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  ) : null}
                </ListItem>
                <Typography className={classes.content}>{content}</Typography>
              </div>
            );
          })}
        </List>
      ) : null}
    </div>
  );
};
