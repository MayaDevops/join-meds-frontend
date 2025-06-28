 

import { ACTION_TYPES } from './actions';
import { API_URL } from '../../../shared/urls';
import { REQUEST_METHOD } from 'pages/common/constants';



export const verifyLoginDetailsApi = (data) => {
  return {
    url: API_URL.JOINT_MEDS.USER_LOGIN.LOGIN,
    method: REQUEST_METHOD.POST,
    payload: {
      types: [
        ACTION_TYPES.VERIFY_LOGIN_REQUEST,
        ACTION_TYPES.VERIFY_LOGIN_SUCCESS,
        ACTION_TYPES.VERIFY_LOGIN_FAILURE
      ],
      data
    }
  };
};
