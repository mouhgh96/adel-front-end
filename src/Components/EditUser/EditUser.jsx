import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { http } from '../../utils';
// import './EditUser.scss';

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
    margin: theme.spacing(3, 'auto', 2),
  },
  reset: {
    margin: theme.spacing(3, 'auto', 2),
    cursor: 'pointer',
  },
  signup: {
    marginBottom: theme.spacing(2),
  },
}));

let validationSchema = Yup.object().shape({
  firstName: Yup.string().trim().required('le Prenom  est requis'),
  lastName: Yup.string().trim().required('le Nom  est requis'),
  email: Yup.string()
    .trim()
    .email('Veuillez entrer un email valid')
    .required("l'email est requis"),

  username: Yup.string()
    .trim()
    .min(3, "le nom d'utilisateur doit au moins contenir 3 characters")
    .required("le nom d'utilisateur est requis"),

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

export function EditUser({ user, onSubmit, onReset }) {
  const classes = useStyles();
  let [domains, setDomains] = useState([]);
  let [selectedDomain, setSelectedDomain] = useState(user.domain.id);
  let [competences, setCompetences] = useState([]);

  let initialValues = {
    ...user,
    competences: user.competences.map(({ id }) => id),
    domain: `${user.domain.id}`,
  };
  let isEqual = (values) =>
    JSON.stringify(values) === JSON.stringify(initialValues);

  useEffect(() => {
    let fetchDomains = async () => {
      let response = await http.get('/auth/domains');
      setDomains(response.data);
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
          Modification
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          onReset={onReset}
        >
          {({ isValid, isSubmitting, values, ...rest }) => {
            return (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field name="firstName">
                      {({ field, meta }) => {
                        return (
                          <TextField
                            autoComplete="fname"
                            name={field.name}
                            defaultValue={field.value}
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
                            name={field.name}
                            defaultValue={field.value}
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
                            name={field.name}
                            defaultValue={field.value}
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
                            name={field.name}
                            defaultValue={field.value}
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

                  <Grid item xs={12} sm={12}>
                    <Field name="domain">
                      {({ field, meta }) => {
                        console.log(field.value);
                        return (
                          <>
                            <p>Division</p>
                            <select
                              className="select"
                              name={field.name}
                              onChange={(e) => {
                                setSelectedDomain(e.target.value);

                                field.onChange(e);
                              }}
                              onBlur={field.onBlur}
                              value={selectedDomain}
                            >
                              {domains?.map(({ id, name }) => (
                                <option value={`${id}`}>{name}</option>
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
                                name={field.name}
                                value="1"
                                checked={field.value == 1}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                              />
                              <span className="checkmark"></span>
                            </label>
                            <label className="container-radio">
                              B
                              <input
                                type="radio"
                                name={field.name}
                                value="2"
                                checked={field.value == 2}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                              />
                              <span className="checkmark"></span>
                            </label>
                            <label className="container-radio">
                              C
                              <input
                                type="radio"
                                name={field.name}
                                value="3"
                                checked={field.value == 3}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                              />
                              <span className="checkmark"></span>
                            </label>
                            <label className="container-radio">
                              D
                              <input
                                type="radio"
                                name={field.name}
                                value="4"
                                checked={field.value == 4}
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
                            {competences.map(({ id, name }, index) => {
                              return (
                                <label
                                  key={id}
                                  htmlFor={id}
                                  className="competence"
                                >
                                  <input
                                    id={id}
                                    type="checkbox"
                                    name={field.name}
                                    value={id}
                                    checked={
                                      field.value.includes(id) ||
                                      field.value.includes(`${id}`)
                                    }
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
                    type="reset"
                    variant="contained"
                    color="secondary"
                    className={classes.reset}
                    disabled={isSubmitting}
                  >
                    Annuler
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={!isValid || isSubmitting || isEqual(values)}
                  >
                    Confirmation
                  </Button>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Container>
  );
}
