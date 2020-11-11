import { makeStyles, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonIcon from '@material-ui/icons/Person';
import { formatRelative } from 'date-fns';
import { fr } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { useHistory, useParams } from 'react-router-dom';
import { authHttp } from '../../utils';
import { Comments } from '../Comments/Comments';
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '100%',
    maxHeight: '300px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  domain: {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    fontSize: '0.7em',
    fontWeight: 'bold',
  },
}));
export let Question = (props) => {
  let history = useHistory();

  let [question, setQuestion] = useState({});
  let [notFound, setNotFound] = useState(false);
  let classes = useStyles();
  let { id } = useParams();
  let deleteResponse = async (responseId) => {
    console.log('response delete ', responseId);
    try {
      let response = await authHttp.delete(
        `/questions/${id}/responses/${responseId}`,
      );
      setQuestion((old) => {
        old.responses = old.responses.filter(
          (response) => response.id != responseId,
        );
        return { ...old };
      });
    } catch (e) {
      console.log(e);
    }
  };
  let deleteQuestion = async (id) => {
    try {
      let response = await authHttp.delete(`/questions/${id}`);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    let fetchQuestion = async () => {
      try {
        let response = await authHttp.get(`/questions/${id}`);
        setQuestion(response.data);
      } catch (e) {
        console.log(e);
        if (e.response.status == 404) {
          setNotFound(true);
        }
      }
    };
    fetchQuestion();
  }, []);
  let submitResponse = async ({ content }) => {
    if (!content.trim()) {
      return;
    }
    try {
      let response = await authHttp.post(`/questions/${id}/responses`, {
        content,
      });
      setQuestion({
        ...question,
        responses: [
          {
            ...response.data,
            editable: true,
          },
          ...question.responses,
        ],
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  return notFound ? (
    <h1>not found</h1>
  ) : (
    <React.Fragment>
      <Helmet title={question?.title} />

      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <PersonIcon />
            </Avatar>
          }
          action={
            question?.editable ? (
              <IconButton
                aria-label="settings"
                onClick={() => deleteQuestion(id)}
              >
                <DeleteIcon />
              </IconButton>
            ) : null
          }
          title={question?.author?.username}
          subheader={
            question?.updatedAt &&
            formatRelative(Date.parse(question?.updatedAt), Date.now(), {
              locale: fr,
            })
          }
        />
        <CardContent>
          <Typography
            variant="h4"
            color="textSecondary"
            align="center"
            paragraph
          >
            {question?.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {question?.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            id="domain"
          >
            {question?.domain?.name}
          </Button>
        </CardActions>
      </Card>
      <Comments
        responses={question?.responses || []}
        deleteResponse={deleteResponse}
        submitResponse={submitResponse}
      />
    </React.Fragment>
  );
};
