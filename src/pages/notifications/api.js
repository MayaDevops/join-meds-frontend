import { REQUEST_METHOD } from 'pages/common/constants';
import { API_URL } from '../../../shared/urls';
import { ACTION_TYPES } from './actions';

export const fetchNotificationsApi = (data) => {
  return {
    url: API_URL.JOINT_MEDS.NOTIFICATION.FETCH.replace(':orgId', data?.orgId),
    method: REQUEST_METHOD.GET,
    payload: {
      types: [
        ACTION_TYPES.FETCH_NOTIFICATIONS_REQUEST,
        ACTION_TYPES.FETCH_NOTIFICATIONS_SUCCESS,
        ACTION_TYPES.FETCH_NOTIFICATIONS_FAILURE
      ]
    }
  };
};

export const markNotificationReadApi = (data) => {
  return {
    url: API_URL.JOINT_MEDS.NOTIFICATION.MARK_READ.replace(':id', data?.id),
    method: REQUEST_METHOD.PUT,
    payload: {
      types: [
        ACTION_TYPES.MARK_READ_REQUEST,
        ACTION_TYPES.MARK_READ_SUCCESS,
        ACTION_TYPES.MARK_READ_FAILURE
      ]
    }
  };
};

export const markAllNotificationsReadApi = (data) => {
  return {
    url: API_URL.JOINT_MEDS.NOTIFICATION.MARK_ALL_READ.replace(':orgId', data?.orgId),
    method: REQUEST_METHOD.PUT,
    payload: {
      types: [
        ACTION_TYPES.MARK_ALL_READ_REQUEST,
        ACTION_TYPES.MARK_ALL_READ_SUCCESS,
        ACTION_TYPES.MARK_ALL_READ_FAILURE
      ]
    }
  };
};