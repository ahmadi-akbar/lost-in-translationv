import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(2),
  },
}));

const Login = (props) => {
  const ENTER_KEY = 13;
  const [name, setName] = useState('');
  const classes = useStyles();
  const onEnterPress = (e) => {
    if (e.keyCode === ENTER_KEY) {
      console.log('value', e.target.value);
      props.readyToLogin(name);
    }
  };
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onLoginClicked = (e) => {
    props.readyToLogin(name);
  };
  return (
    <React.Fragment>
      <div className={classes.margin}>
        <Grid container spacing={2} alignItems='flex-end' justify='center'>
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField
              id='input-with-icon-grid'
              label="what's your name?"
              onKeyDown={onEnterPress}
              onChange={onNameChange}
            />
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              color='secondary'
              onClick={onLoginClicked}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Login;
