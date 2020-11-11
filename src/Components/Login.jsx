import { Link } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { http } from '../utils';
function Copyright({ site }) {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        {site}
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,

    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

let initialValues = {
  email: '',
  password: '',
};

let validationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('credentials incorrect')
    .required("l'email est requis"),

  password: Yup.string()
    .matches(/^[0-9a-z_$-]{7,}$/i, 'credentials incorrect')
    .required('le mot de passe est requis'),
});
export function Login() {
  const classes = useStyles();
  let location = useLocation();
  let history = useHistory();
  let { from } = location.state || { from: { pathname: '/' } };
  console.log(location);
  useEffect(() => {
    let token = localStorage.getItem('access_token');
    if (token && token.trim()) {
      history.replace(from);
    }
  }, []);
  let onSubmit = async (values) => {
    try {
      let response = await http.post('/auth/login', values);
      let token = response.data.access_token;
      localStorage.setItem('access_token', token);
      let isAdmin = response.data.is_admin;
      localStorage.setItem('is_admin', isAdmin);
      history.replace(from);
    } catch (e) {
      console.log(e);
      debugger;
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar
          className={classes.avatar}
          src="https://www.enp.edu.dz/storage/2020/06/cerist.png"
        />
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          isInitialValid={false}
        >
          {({ isValid, isSubmitting }) => {
            return (
              <Form className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field name="email">
                      {({ field, meta }) => {
                        return (
                          <TextField
                            variant="outlined"
                            fullWidth
                            id="email"
                            label="Addresse Email"
                            name="email"
                            autoComplete="email"
                            error={meta.error && meta.touched}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            helperText={meta.touched && meta.error}
                          />
                        );
                      }}
                    </Field>
                  </Grid>

                  <Grid item xs={12}>
                    <Field name="password">
                      {({ field, meta }) => {
                        return (
                          <TextField
                            variant="outlined"
                            fullWidth
                            name="password"
                            label="Mot de Passe"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            error={meta.error && meta.touched}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            helperText={meta.touched && meta.error}
                          />
                        );
                      }}
                    </Field>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={!isValid || isSubmitting}
                >
                  Connexion
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <RouterLink to="/signup">
                      <Typography variant="body2" color="primary">
                        Vous n'avez pas de compte? inscription
                      </Typography>
                    </RouterLink>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </div>
      <Box mt={5}>
        <Copyright site="PFE" />
      </Box>
    </Container>
  );
}
