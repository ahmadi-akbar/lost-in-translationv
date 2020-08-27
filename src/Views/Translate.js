import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import UserInput from '../components/UserInput';
import TranslationCard from '../components/TranslationCard';
import { updateTranslationArrayInStorage } from '../utils/storage';

function Translate(props) {
  const [translatableText, setTranslatableText] = useState('');

  useEffect(() => {
    updateTranslationArrayInStorage(translatableText);
  }, [translatableText]);

  return (
    <div className='container'>
      {!props.isLoggedIn && <Redirect to='/login' />}
      <UserInput
        iconName='keyboard'
        textFieldLabel='Write the text you whish to translate'
        onReadyToSubmit={(text) => {
          setTranslatableText(text);
        }}
        buttonTitle='Translate'
        inputFieldSize={7}
      ></UserInput>
      <TranslationCard text={translatableText}></TranslationCard>
    </div>
  );
}

export default Translate;
