import React from 'react';
import UserInput from '../components/UserInput';
import { setStorageItem } from '../utils/storage';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setAuth } from '../store/actions/auth';

const useStyles = makeStyles((theme) => ({
  Card: {
    'margin-top': '10px',
  },
}));

const Login = (props) => {
  const classes = useStyles();

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logsIn = (name) => {
    setStorageItem('name', name);
    dispatch(
      setAuth({
        isLoggedIn: true,
        name,
      })
    );
  };

  return (
    <Card className={classes.Card}>
      {auth.isLoggedIn && <Redirect to='/translate' />}
      <CardContent>
        <UserInput
          iconName='account'
          textFieldLabel="what's your name?"
          onReadyToSubmit={(name) => {
            logsIn(name);
          }}
          buttonTitle='Login'
        ></UserInput>
      </CardContent>
    </Card>
  );
};

export default Login;
