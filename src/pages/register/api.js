 

import { ACTION_TYPES } from './actions';
import { API_URL } from '../../../shared/urls';
import { REQUEST_METHOD } from 'pages/common/constants';


export const fetchCountryApi = () => {
  return {
    url: 'country',
    method: REQUEST_METHOD.GET,
    payload: {
      types: [
        ACTION_TYPES.FETCH_COUNTRY_REQUEST,
        ACTION_TYPES.FETCH_COUNTRY_SUCCESS,
        ACTION_TYPES.FETCH_COUNTRY_FAILURE
      ]
    }
  };
};

export const saveOrganizationDetailsApi = (data) => {
  return {
    url: API_URL.JOINT_MEDS.ORGANIZATION.CREATE_ORG,
    method: REQUEST_METHOD.POST,
    payload: {
      types: [
        ACTION_TYPES.CREATE_ORGANIZATION_DETAILS_REQUEST,
        ACTION_TYPES.CREATE_ORGANIZATION_DETAILS_SUCCESS,
        ACTION_TYPES.CREATE_ORGANIZATION_DETAILS_FAILURE
      ],
      data
    }
  };
};
