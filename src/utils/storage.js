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
