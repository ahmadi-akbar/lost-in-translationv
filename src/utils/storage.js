/**
 *
 * @param {String} key
 * @param {Object, String} value
 */
export const setStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 *
 * @param {String} key
 * @returns {Object} value
 */
export const getStorageItem = (key) => {
  const storage = localStorage.getItem(key);
  if (storage) {
    return JSON.parse(storage);
  } else {
    return false;
  }
};

/**
 *
 * @param {String} key name of the value that will be removed from localstorage
 */
export const deleteStorageItem = (key) => {
  localStorage.removeItem(key);
};

export const updateTranslationArrayInStorage = (newTranslation) => {
  const previousTranslations = getStorageItem('translation');
  const translation = [];
  if (!previousTranslations) {
    translation.push(newTranslation);
  } else if (previousTranslations.length === 10) {
    translation.push(...previousTranslations);
    translation.shift();
    translation.push(newTranslation);
  } else {
    translation.push(...previousTranslations);
    translation.push(newTranslation);
  }
  setStorageItem('translation', translation);
};
