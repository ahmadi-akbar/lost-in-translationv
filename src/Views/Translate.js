import React, { useState, useEffect } from 'react';
import UserInput from '../components/UserInput';
import TranslationCard from '../components/TranslationCard';
import { updateTranslationArrayInStorage } from '../utils/storage';
import withAuth from '../hoc/withAuth';

function Translate(props) {
  const [translatableText, setTranslatableText] = useState('');

  useEffect(() => {
    updateTranslationArrayInStorage(translatableText);
  }, [translatableText]);

  return (
    <div className='container'>
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

export default withAuth(Translate);
