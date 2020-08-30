import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import IconButton from '@material-ui/core/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { setAuth } from '../store/actions/auth';
import { deleteStorageItem } from '../utils/storage';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { clearTranslation } from '../store/actions/translations';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

/**
 * Displays Top title bar with links to translate, profile, login
 *
 */
function TitleBar() {
  //classes: used for styling
  const classes = useStyles();
  //auth from redux.
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const logout = () => {
    deleteStorageItem('name');
    dispatch(
      setAuth({
        isLoggedIn: false,
        name: '',
      })
    );
    dispatch(clearTranslation());
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Container>
            <Button component={Link} to='/translate' color='inherit'>
              Lost in Translation
            </Button>
          </Container>

          {!auth.isLoggedIn && (
            <Button component={Link} to='/login' color='inherit'>
              Login
            </Button>
          )}
          {auth.name && (
            <React.Fragment>
              <Typography variant='body1'>{auth.name}</Typography>
              <IconButton component={Link} to='/profile'>
                <AccountCircle />
              </IconButton>

              <IconButton onClick={logout} component='span'>
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
