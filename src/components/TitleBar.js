import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function TitleBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            {props.title}
          </Typography>
          {!props.username && <Button color='inherit'>Login</Button>}
          {props.username && (
            <React.Fragment>
              <Typography variant='body1'>{props.username}</Typography>
              <IconButton component='span'>
                <AccountCircle />
              </IconButton>

              <IconButton component='span'>
                <LockIcon />
              </IconButton>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TitleBar;
