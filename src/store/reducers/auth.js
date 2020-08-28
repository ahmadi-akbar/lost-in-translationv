import { ACTION_SET_USER } from '../actions/auth';
import { getStorageItem } from '../../utils/storage';

//Remember that state must default to something
const authReducer = (
  state = {
    isLoggedIn: getStorageItem('name') ? true : false,
    name: getStorageItem('name'),
  },
  action
) => {
  switch (action.type) {
    case ACTION_SET_USER:
      return action.payload;

    default:
      return state;
  }
};
export default authReducer;
