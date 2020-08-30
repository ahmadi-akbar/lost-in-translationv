import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const img = require('../asset/Logo.png');
function Welcome() {
  return (
    <Paper>
      <Card>
        <CardContent>
          <Typography variant='h3'> Welcome</Typography>
          <img src={img} alt='' />
        </CardContent>
      </Card>
    </Paper>
  );
}

export default Welcome;
