import React, { useState } from 'react';
import { getStorageItem } from '../utils/storage';
import TranslationCard from '../components/TranslationCard';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import withAuth from '../hoc/withAuth';

const useStyles = makeStyles({
  button: {
    'margin-top': '10px',
  },
  paper: {
    'margin-top': '10px',
  },
});

function Profile(props) {
  const [text] = useState(
    getStorageItem('translation') ? getStorageItem('translation') : []
  );
  const classes = useStyles();
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
          startIcon={<LockIcon />}
        >
          Logout
        </Button>
      </Paper>
    </div>
  );
}

export default withAuth(Profile);
