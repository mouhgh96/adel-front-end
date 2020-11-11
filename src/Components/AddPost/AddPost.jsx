import Avatar from '@material-ui/core/Avatar';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { animated, useSpring } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import * as Yup from 'yup';
import { QuestionsContext } from '../../question.context';
import { authHttp, http } from '../../utils';

let initialValues = {
  title: '',
  content: '',
  domain: '',
};

let validationSchema = Yup.object().shape({
  title: Yup.string().trim().required('le titre est requis'),

  content: Yup.string().trim().required('le contenu est requis'),
  domain: Yup.number()
    .integer()
    .positive("veuillez entrer le nom d'un domaine sans espace")
    .required('le domaine est requis'),
});
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    minWidth: '100%',
    fontSize: '1rem',
    padding: theme.spacing(1),
    letterSpacing: '0.025em',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    marginLeft: '.25em',
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export let AddPost = (props) => {
  let { open, setOpen } = props;
  let history = useHistory();
  const classes = useStyles();
  let [domains, setDomains] = useState([]);
  let [_, setQuestions] = useContext(QuestionsContext);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    let fetchDomains = async () => {
      let response = await http.get('/auth/domains');
      setDomains(response.data);
    };
    fetchDomains();
  }, []);
  let onSubmit = async (values) => {
    console.log('submit');
    let response = await authHttp.post('/questions', values);
    setQuestions((oldState) => [
      { editable: true, ...response.data },
      ...oldState,
    ]);
    setOpen(false);
  };
  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AddCircleIcon />
          </Avatar>
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
                      <Field name="title">
                        {({ field, meta }) => {
                          return (
                            <TextField
                              variant="outlined"
                              fullWidth
                              id="title"
                              label="Titre"
                              name="title"
                              type="text"
                              autoComplete="title"
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
                      <Field name="content">
                        {({ field }) => {
                          return (
                            <TextareaAutosize
                              aria-label="minimum height"
                              rowsMin={3}
                              rowsMax={12}
                              variant="outlined"
                              fullWidth
                              name="content"
                              placeholder="Ecrivez le contenu de la question ici"
                              type="text"
                              id="content"
                              autoComplete="content"
                              className={classes.content}
                              onChange={field.onChange}
                              onBlur={field.onBlur}
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
                                onChange={field.onChange}
                                onBlur={field.onBlur}
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
                    <Grid item container xs={12}>
                      <Grid item xs={6}>
                        <Button
                          fullWidth
                          variant="contained"
                          color="secondary"
                          onClick={() => setOpen(false)}
                        >
                          Annuler
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                          disabled={!isValid || isSubmitting}
                        >
                          Poster
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Fade>
    </Modal>
  );
};
