import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { formatRelative } from 'date-fns';
import { fr } from 'date-fns/locale';
import React from 'react';
import { Link } from 'react-router-dom';
import './QuestionCard.css';
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '100%',
    maxHeight: '350px',
  },
  content: {
    maxHeight: '150px',
    overflow: 'auto',
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

export let QuestionCard = (props) => {
  let { id, updatedAt, title, content, domain, editable, deletePost } = props;
  updatedAt = Date.parse(updatedAt);
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} id={id}>
      <CardHeader
        action={
          editable ? (
            <IconButton aria-label="settings" onClick={() => deletePost(id)}>
              <DeleteIcon />
            </IconButton>
          ) : null
        }
        title={title.substr(0, 30) + '...'}
        subheader={formatRelative(updatedAt, Date.now(), {
          locale: fr,
        })}
      />
      <CardContent className={classes.content}>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/questions/${id}`}>
          <Button size="large">Lire plus</Button>
        </Link>
        <Button size="small" variant="contained" color="secondary" id="domain">
          {domain.name}
        </Button>
      </CardActions>
    </Card>
  );
};
