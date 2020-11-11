import Button2 from "../../../web_modules/@material-ui/core/Button.js";
import Card2 from "../../../web_modules/@material-ui/core/Card.js";
import CardActions2 from "../../../web_modules/@material-ui/core/CardActions.js";
import CardContent2 from "../../../web_modules/@material-ui/core/CardContent.js";
import CardHeader2 from "../../../web_modules/@material-ui/core/CardHeader.js";
import {red} from "../../../web_modules/@material-ui/core/colors.js";
import IconButton2 from "../../../web_modules/@material-ui/core/IconButton.js";
import {makeStyles} from "../../../web_modules/@material-ui/core/styles.js";
import Typography2 from "../../../web_modules/@material-ui/core/Typography.js";
import DeleteIcon from "../../../web_modules/@material-ui/icons/Delete.js";
import {formatRelative} from "../../../web_modules/date-fns.js";
import {fr} from "../../../web_modules/date-fns/locale.js";
import React from "../../../web_modules/react.js";
import {Link} from "../../../web_modules/react-router-dom.js";
import "./QuestionCard.css.proxy.js";
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100%",
    maxHeight: "350px"
  },
  content: {
    maxHeight: "150px",
    overflow: "auto"
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
export let QuestionCard = (props) => {
  let {id, updatedAt, title, content, domain, editable, deletePost} = props;
  updatedAt = Date.parse(updatedAt);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return /* @__PURE__ */ React.createElement(Card2, {
    className: classes.root,
    id
  }, /* @__PURE__ */ React.createElement(CardHeader2, {
    action: editable ? /* @__PURE__ */ React.createElement(IconButton2, {
      "aria-label": "settings",
      onClick: () => deletePost(id)
    }, /* @__PURE__ */ React.createElement(DeleteIcon, null)) : null,
    title: title.substr(0, 30) + "...",
    subheader: formatRelative(updatedAt, Date.now(), {
      locale: fr
    })
  }), /* @__PURE__ */ React.createElement(CardContent2, {
    className: classes.content
  }, /* @__PURE__ */ React.createElement(Typography2, {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, content)), /* @__PURE__ */ React.createElement(CardActions2, null, /* @__PURE__ */ React.createElement(Link, {
    to: `/questions/${id}`
  }, /* @__PURE__ */ React.createElement(Button2, {
    size: "large"
  }, "Lire plus")), /* @__PURE__ */ React.createElement(Button2, {
    size: "small",
    variant: "contained",
    color: "secondary",
    id: "domain"
  }, domain.name)));
};
