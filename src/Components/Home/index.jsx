import { Grid } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import Helmet from 'react-helmet';
import { QuestionsContext } from '../../question.context';
import { authHttp } from '../../utils';
import { QuestionCard } from '../QuestionCard/QuestionCard';

export const Home = (props) => {
  let [questions, setQuestions] = useContext(QuestionsContext);

  useEffect(() => {
    let fetchQuestions = async () => {
      try {
        let response = await authHttp.get('/questions');
        setQuestions(response.data);
        return response.data;
      } catch (e) {
        console.log(e);
      }
    };
    fetchQuestions();
  }, []);
  let deletePost = async (id) => {
    try {
      let response = await authHttp.delete(`/questions/${id}`);
      setQuestions((oldState) => oldState.filter((q) => q.id != id));
    } catch (e) {
      console.log(e);
    }
  };
  if (!questions) return <h1>loading...</h1>;
  return (
    <React.Fragment>
      <Helmet title="PFE" />
      <Grid container spacing={2}>
        {questions &&
          questions?.map((question) => {
            return (
              <Grid key={question.id} item xs={12} md={6} lg={4}>
                <QuestionCard {...question} deletePost={deletePost} />
              </Grid>
            );
          })}
      </Grid>
    </React.Fragment>
  );
};
