import React, { useState } from 'react';
import { getStorageItem, deleteStorageItem } from '../utils/storage';
import TranslationCard from '../components/TranslationCard';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import withAuth from '../hoc/withAuth';
import { useDispatch } from 'react-redux';
import { setAuth } from '../store/actions/auth';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  button: {
    'margin-top': '10px',
    'margin-right': '10px',
  },
  paper: {
    'margin-top': '10px',
  },
});

function Profile(props) {
  const [text] = useState(
    getStorageItem('translation') ? getStorageItem('translation') : []
  );

  const dispatch = useDispatch();

  const classes = useStyles();

  const logout = () => {
    deleteStorageItem('name');
    deleteStorageItem('translation');
    dispatch(
      setAuth({
        isLoggedIn: false,
        name: '',
      })
    );
  };

  return (
    <div className='container'>
      <Paper className={classes.paper}>
        <Typography variant='h4' display='block' gutterBottom>
          Profile
        </Typography>
        {text.map((item, i) => (
          <TranslationCard key={i} text={item} />
        ))}
        <Button
          className={classes.button}
          variant='contained'
          color='secondary'
          onClick={logout}
          startIcon={<LockIcon />}
        >
          Logout
        </Button>
        <Button
          className={classes.button}
          color='secondary'
          variant='contained'
          component={Link}
          to='/translate'
        >
          Translate more
        </Button>
      </Paper>
    </div>
  );
}

export default withAuth(Profile);
