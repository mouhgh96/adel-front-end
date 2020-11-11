import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { http } from '../utils';
import './SignUp.css';

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
  signup: {
    marginBottom: theme.spacing(2),
  },
}));

let initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  username: '',
  confirmPassword: '',
  equipe: '1',
  domain: '',
  competences: [],
};
let validationSchema = Yup.object().shape({
  firstName: Yup.string().trim().required('le Prenom  est requis'),
  lastName: Yup.string().trim().required('le Nom  est requis'),
  email: Yup.string()
    .trim()
    .email('Veuillez entrer un email valid')
    .required("l'email est requis"),
  password: Yup.string()
    .matches(
      /^[0-9a-z_$-]{7,}$/i,
      'le mot de passe doit au moins contenir 7 characters (a-z,0-9,_-$)',
    )
    .required('le mot de passe est requis'),
  username: Yup.string()
    .trim()
    .min(3, "le nom d'utilisateur doit au moins contenir 3 characters")
    .required("le nom d'utilisateur est requis"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'les mots de passe sont different')
    .required('vous devez confirmer votre mot de passe'),

  domain: Yup.number().integer().positive().required('la division est requise'),

  equipe: Yup.number()
    .integer()
    .positive()
    .min(1, 'cette equipe est invalide')
    .max(4, 'cette equipe est invalide')
    .required("l'equipe est requise"),
  competences: Yup.array()
    .of(Yup.string().trim().min(0))
    .min(1)
    .max(4)
    .required('competences requies'),
});
export function SignUp() {
  const classes = useStyles();
  let history = useHistory();
  let [domains, setDomains] = useState([]);
  let [selectedDomain, setSelectedDomain] = useState();
  let [competences, setCompetences] = useState([]);
  let onSubmit = async (values) => {
    delete values.confirmPassword;
    try {
      let response = await http.post('/auth/signup', values);
      if (response.status === 201) {
        history.replace('/login');
      }
    } catch (e) {
      /* handle error */
      let [key] = Object.keys(e.response.data.error);
      alert(e.response.data.error[key]);
    }
  };
  useEffect(() => {
    let fetchDomains = async () => {
      let response = await http.get('/auth/domains');
      setDomains(response.data);
      setSelectedDomain(response.data[0].id);
    };
    fetchDomains();
  }, []);
  useEffect(() => {
    let fetchCompetences = async () => {
      let response = await http.get(
        `/auth/domains/${selectedDomain}/competences`,
      );
      setCompetences(response.data);
    };
    fetchCompetences();
  }, [selectedDomain]);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar
          className={classes.avatar}
          src="https://www.enp.edu.dz/storage/2020/06/cerist.png"
        />
        <Typography component="h1" variant="h5" className={classes.signup}>
          Inscription
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          isInitialValid={false}
        >
          {({ isValid, isSubmitting, ...rest }) => {
            console.log(rest);
            return (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field name="firstName">
                      {({ field, meta }) => {
                        return (
                          <TextField
                            autoComplete="fname"
                            name="firstName"
                            variant="outlined"
                            fullWidth
                            id="firstName"
                            label="Prenom"
                            autoFocus
                            error={meta.error && meta.touched}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            helperText={meta.touched && meta.error}
                          />
                        );
                      }}
                    </Field>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field name="lastName">
                      {({ field, meta }) => {
                        return (
                          <TextField
                            variant="outlined"
                            fullWidth
                            id="lastName"
                            label="Nom"
                            name="lastName"
                            autoComplete="lname"
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
                    <Field name="username">
                      {({ field, meta }) => {
                        return (
                          <TextField
                            variant="outlined"
                            fullWidth
                            id="username"
                            label="Nom d'utilisateur"
                            name="username"
                            autoComplete="username"
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
                  <Grid item xs={12}>
                    <Field name="ConfirmPassword">
                      {({ field, meta }) => {
                        return (
                          <TextField
                            variant="outlined"
                            fullWidth
                            name="confirmPassword"
                            label="Mot de Passe Confirmation"
                            type="password"
                            id="confirmPassword"
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
                  <Grid item xs={12} sm={12}>
                    <Field name="domain">
                      {({ field, meta }) => {
                        return (
                          <>
                            <p>Division</p>
                            <select
                              className="select"
                              name="domain"
                              onChange={(e) => {
                                setSelectedDomain(e.target.value);

                                field.onChange(e);
                              }}
                              onBlur={field.onBlur}
                              value={selectedDomain}
                            >
                              {domains?.map(({ id, name }) => (
                                <option value={id}>{name}</option>
                              ))}
                            </select>
                          </>
                        );
                      }}
                    </Field>
                  </Grid>

                  <Grid item xs={12}>
                    <Field name="equipe">
                      {({ field, meta }) => {
                        return (
                          <div className="team_container">
                            <p>equipes: </p>

                            <label className="container-radio">
                              A
                              <input
                                type="radio"
                                name="equipe"
                                value="1"
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                              />
                              <span className="checkmark"></span>
                            </label>
                            <label className="container-radio">
                              B
                              <input
                                type="radio"
                                name="equipe"
                                value="2"
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                              />
                              <span className="checkmark"></span>
                            </label>
                            <label className="container-radio">
                              C
                              <input
                                type="radio"
                                name="equipe"
                                value="3"
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                              />
                              <span className="checkmark"></span>
                            </label>
                            <label className="container-radio">
                              D
                              <input
                                type="radio"
                                name="equipe"
                                value="4"
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                              />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                        );
                      }}
                    </Field>
                  </Grid>
                  <Grid item xs={12}>
                    <Field name="competences">
                      {({ field, meta }) => {
                        return (
                          <div className="team_container">
                            <p>competences: </p>
                            {competences.map(({ id, name }) => {
                              return (
                                <label
                                  key={id}
                                  htmlFor={id}
                                  className="competence"
                                >
                                  <input
                                    id={id}
                                    type="checkbox"
                                    name="competences"
                                    value={id}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                  />
                                  {name}
                                </label>
                              );
                            })}
                          </div>
                        );
                      }}
                    </Field>
                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={!isValid || isSubmitting}
                  >
                    Confirmation
                  </Button>
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
