import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Keyboard from '@material-ui/icons/Keyboard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(2),
  },
}));

/**
 * Reusable Styled input field
 * @param {String} props.iconName -  iconName, can be 'account' or 'keyboard'
 * @param {String} props.texFieldLabel - helper label for user input
 * @param {Function} props.onReadyToSubmit function, required for capturing user is ready to submit.
 * @param {String} props.buttonTitle - Title on submit button
 */
function UserInput(props) {
  const classes = useStyles();
  const [text, setText] = useState('');
  const ENTER_KEY = 13;

  const readyToSubmit = () => {
    props.onReadyToSubmit(text);
  };

  const onEnterPress = (e) => {
    if (e.keyCode === ENTER_KEY) {
      readyToSubmit();
    }
  };
  const onTextFieldChange = (e) => {
    setText(e.target.value);
  };

  const Icon = (iconName) => {
    switch (iconName) {
      case 'account':
        return (
          <div data-testid='account'>
            <AccountCircle />
          </div>
        );
      case 'keyboard':
        return (
          <div data-testid='keyboard'>
            <Keyboard />
          </div>
        );
      default:
        break;
    }
  };
  return (
    <div className={classes.root}>
      <div className={classes.margin}>
        <Grid container spacing={4} alignItems='flex-end' justify='center'>
          <Grid item>{Icon(props.iconName)}</Grid>
          <Grid item xs={props.inputFieldSize}>
            <TextField
              id='input-with-icon-grid'
              label={props.textFieldLabel}
              onKeyDown={onEnterPress}
              onChange={onTextFieldChange}
              fullWidth
            />
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              color='secondary'
              onClick={readyToSubmit}
            >
              {props.buttonTitle}
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default UserInput;
