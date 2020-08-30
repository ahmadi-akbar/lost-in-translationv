import React, { useState, useEffect } from 'react';
import UserInput from '../components/UserInput';
import TranslationCard from '../components/TranslationCard';
import withAuth from '../hoc/withAuth';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { addTranslation } from '../store/actions/translations';

const useStyles = makeStyles({
  button: {
    'margin-top': '10px',
    'margin-right': '10px',
  },
});

function Translate(props) {
  const classes = useStyles();
  const [translatableText, setTranslatableText] = useState('');
  const [showInputField, setShowInputField] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (translatableText.trim().length > 0) {
      //updateTranslationArrayInStorage(translatableText);
      dispatch(addTranslation(translatableText.trim()));
      setShowInputField(false);
    }
  }, [translatableText, dispatch]);

  const translateMore = () => {
    setTranslatableText('');
    setShowInputField(true);
  };

  return (
    <div className='container'>
      {showInputField && (
        <UserInput
          iconName='keyboard'
          textFieldLabel='Write the text you whish to translate'
          onReadyToSubmit={(text) => {
            if (text.trim() !== '') {
              setTranslatableText(text);
            }
          }}
          buttonTitle='Translate'
          inputFieldSize={7}
        ></UserInput>
      )}

      <TranslationCard text={translatableText}></TranslationCard>
      {translatableText.length > 0 && (
        <div>
          <Button
            className={classes.button}
            variant='contained'
            color='secondary'
            component={Link}
            to='/profile'
          >
            View all your translations
          </Button>
          <Button
            className={classes.button}
            variant='contained'
            color='secondary'
            onClick={translateMore}
          >
            Translate more
          </Button>
        </div>
      )}
    </div>
  );
}

export default withAuth(Translate);
