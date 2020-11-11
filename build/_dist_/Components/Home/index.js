import {Grid} from "../../../web_modules/@material-ui/core.js";
import React, {useContext, useEffect} from "../../../web_modules/react.js";
import Helmet from "../../../web_modules/react-helmet.js";
import {QuestionsContext} from "../../question.context.js";
import {authHttp} from "../../utils.js";
import {QuestionCard as QuestionCard2} from "../QuestionCard/QuestionCard.js";
export const Home = (props) => {
  let [questions, setQuestions] = useContext(QuestionsContext);
  useEffect(() => {
    let fetchQuestions = async () => {
      try {
        let response = await authHttp.get("/questions");
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
  if (!questions)
    return /* @__PURE__ */ React.createElement("h1", null, "loading...");
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Helmet, {
    title: "PFE"
  }), /* @__PURE__ */ React.createElement(Grid, {
    container: true,
    spacing: 2
  }, questions && questions?.map((question2) => {
    return /* @__PURE__ */ React.createElement(Grid, {
      key: question2.id,
      item: true,
      xs: 12,
      md: 6,
      lg: 4
    }, /* @__PURE__ */ React.createElement(QuestionCard2, {
      ...question2,
      deletePost
    }));
  })));
};
