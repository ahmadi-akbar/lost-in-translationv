import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import Handsign from './Handsign';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Card: {
    'margin-top': '10px',
  },
  CardActions: {
    backgroundColor: theme.palette.primary.main,
  },
}));
/**
 * Shows text translated to handsign.
 * @param {props} props.text required, text that will be translated to signlanguage
 */
function TranslationCard(props) {
  const [showText, setShowText] = useState(false);
  const classes = useStyles();

  const Translation = () => {
    if (showText) {
      return (
        <React.Fragment>
          <Button
            size='small'
            variant='outlined'
            color='secondary'
            onClick={onShowTextClicked}
          >
            Hide text
          </Button>
          <Typography variant='body1'>{props.text}</Typography>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Button
            size='small'
            variant='outlined'
            color='secondary'
            onClick={onShowTextClicked}
          >
            Show text
          </Button>
        </React.Fragment>
      );
    }
  };

  const onShowTextClicked = () => {
    setShowText(!showText);
  };

  if (props.text.trim() === '') {
    return <div></div>;
  } else {
    return (
      <Card className={classes.Card}>
        <CardContent>
          {props.text
            .toLowerCase()
            .split('')
            .map((c, i) => (
              <Handsign char={c} key={i} />
            ))}
        </CardContent>

        <CardActions className={classes.CardActions}>
          {Translation()}
        </CardActions>
      </Card>
    );
  }
}

export default TranslationCard;
