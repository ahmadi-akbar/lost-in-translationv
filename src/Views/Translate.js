import React from 'react';
import { Redirect } from 'react-router-dom';

function Translate(props) {
  console.log(props);
  return (
    <div className='container'>
      {!props.isLoggedIn && <Redirect to='/login' />}
    </div>
  );
}

export default Translate;
