//Types
export const ACTION_SET_TRANSLATIONS = 'ACTION_SET_TRANSLATIONS';
export const ACTION_ADD_TRANSLATION = 'ACTION_ADD_TRANSLATION';
export const ACTION_CLEAR_TRANSLATIONS = 'ACTION_CLEAR_TRANSLATIONS';

//Actions

export const setTranslations = (translations = []) => ({
  type: ACTION_SET_TRANSLATIONS,
  payload: translations,
});

export const addTranslation = (newTranslation = 'newTranslation') => ({
  type: ACTION_ADD_TRANSLATION,
  payload: newTranslation,
});

export const clearTranslation = () => ({
  type: ACTION_CLEAR_TRANSLATIONS,
  payload: null,
});
