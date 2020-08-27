import React from 'react';
import UserInput from '../components/UserInput';
import { setStorageItem } from '../utils/storage';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Card: {
    'margin-top': '10px',
  },
}));

const Login = (props) => {
  const classes = useStyles();

  const logsIn = (name) => {
    setStorageItem('name', name);
  };

  return (
    <Card className={classes.Card}>
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
