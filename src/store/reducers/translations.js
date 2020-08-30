import {
  ACTION_SET_TRANSLATIONS,
  ACTION_ADD_TRANSLATION,
  ACTION_CLEAR_TRANSLATIONS,
} from '../actions/translations';
import {
  getStorageItem,
  setStorageItem,
  deleteStorageItem,
} from '../../utils/storage';

const translationReducer = (
  state = {
    translations: getStorageItem('translation')
      ? [...getStorageItem('translation')]
      : [],
  },
  action
) => {
  switch (action.type) {
    case ACTION_SET_TRANSLATIONS:
      return action.payload;
    case ACTION_ADD_TRANSLATION:
      if (state.translations.length < 10) {
        setStorageItem('translation', [...state.translations, action.payload]);
        return { translations: [...state.translations, action.payload] };
      } else {
        state.translations.shift();
        setStorageItem('translation', [...state.translations, action.payload]);
        return {
          translations: [...state.translations, action.payload],
        };
      }
    case ACTION_CLEAR_TRANSLATIONS:
      deleteStorageItem('translation');
      return null;
    default:
      return { translations: [] };
  }
};
export default translationReducer;
