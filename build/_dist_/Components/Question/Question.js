import {makeStyles, Typography} from "../../../web_modules/@material-ui/core.js";
import Avatar2 from "../../../web_modules/@material-ui/core/Avatar.js";
import Button2 from "../../../web_modules/@material-ui/core/Button.js";
import Card2 from "../../../web_modules/@material-ui/core/Card.js";
import CardActions2 from "../../../web_modules/@material-ui/core/CardActions.js";
import CardContent2 from "../../../web_modules/@material-ui/core/CardContent.js";
import CardHeader2 from "../../../web_modules/@material-ui/core/CardHeader.js";
import {red} from "../../../web_modules/@material-ui/core/colors.js";
import IconButton2 from "../../../web_modules/@material-ui/core/IconButton.js";
import DeleteIcon from "../../../web_modules/@material-ui/icons/Delete.js";
import PersonIcon from "../../../web_modules/@material-ui/icons/Person.js";
import {formatRelative} from "../../../web_modules/date-fns.js";
import {fr} from "../../../web_modules/date-fns/locale.js";
import React, {useEffect, useState} from "../../../web_modules/react.js";
import Helmet from "../../../web_modules/react-helmet.js";
import {useHistory, useParams} from "../../../web_modules/react-router-dom.js";
import {authHttp} from "../../utils.js";
import {Comments as Comments2} from "../Comments/Comments.js";
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100%",
    maxHeight: "300px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  domain: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    fontSize: "0.7em",
    fontWeight: "bold"
  }
}));
export let Question = (props) => {
  let history = useHistory();
  let [question, setQuestion] = useState({});
  let [notFound, setNotFound] = useState(false);
  let classes = useStyles();
  let {id} = useParams();
  let deleteResponse = async (responseId) => {
    console.log("response delete ", responseId);
    try {
      let response = await authHttp.delete(`/questions/${id}/responses/${responseId}`);
      setQuestion((old) => {
        old.responses = old.responses.filter((response2) => response2.id != responseId);
        return {...old};
      });
    } catch (e) {
      console.log(e);
    }
  };
  let deleteQuestion = async (id2) => {
    try {
      let response = await authHttp.delete(`/questions/${id2}`);
      history.push("/");
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
  let submitResponse = async ({content}) => {
    if (!content.trim()) {
      return;
    }
    try {
      let response = await authHttp.post(`/questions/${id}/responses`, {
        content
      });
      setQuestion({
        ...question,
        responses: [
          {
            ...response.data,
            editable: true
          },
          ...question.responses
        ]
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };
  return notFound ? /* @__PURE__ */ React.createElement("h1", null, "not found") : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Helmet, {
    title: question?.title
  }), /* @__PURE__ */ React.createElement(Card2, {
    className: classes.root
  }, /* @__PURE__ */ React.createElement(CardHeader2, {
    avatar: /* @__PURE__ */ React.createElement(Avatar2, {
      "aria-label": "recipe",
      className: classes.avatar
    }, /* @__PURE__ */ React.createElement(PersonIcon, null)),
    action: question?.editable ? /* @__PURE__ */ React.createElement(IconButton2, {
      "aria-label": "settings",
      onClick: () => deleteQuestion(id)
    }, /* @__PURE__ */ React.createElement(DeleteIcon, null)) : null,
    title: question?.author?.username,
    subheader: question?.updatedAt && formatRelative(Date.parse(question?.updatedAt), Date.now(), {
      locale: fr
    })
  }), /* @__PURE__ */ React.createElement(CardContent2, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h4",
    color: "textSecondary",
    align: "center",
    paragraph: true
  }, question?.title), /* @__PURE__ */ React.createElement(Typography, {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, question?.content)), /* @__PURE__ */ React.createElement(CardActions2, null, /* @__PURE__ */ React.createElement(Button2, {
    size: "small",
    variant: "contained",
    color: "secondary",
    id: "domain"
  }, question?.domain?.name))), /* @__PURE__ */ React.createElement(Comments2, {
    responses: question?.responses || [],
    deleteResponse,
    submitResponse
  }));
};
