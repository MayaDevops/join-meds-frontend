import { handleAPIRequest } from 'utils/http';
import {
  all,
  call,
  fork,
  put,
  take,
  takeLatest
} from 'redux-saga/effects';
import * as api from './api';
import { ACTION_TYPES } from './actions';
import { actions as sliceActions } from './slice';

export function* fetchNotifications({ payload = {} }) {
  yield fork(handleAPIRequest, api.fetchNotificationsApi, payload);
  const { payload: { data: responsePayLoad = {} } = {}, type } = yield take([
    ACTION_TYPES.FETCH_NOTIFICATIONS_SUCCESS,
    ACTION_TYPES.FETCH_NOTIFICATIONS_FAILURE
  ]);
  if (type === ACTION_TYPES.FETCH_NOTIFICATIONS_SUCCESS) {
    yield put(sliceActions.setNotifications(responsePayLoad));
  }
}

export function* markNotificationRead({ payload = {} }) {
  yield fork(handleAPIRequest, api.markNotificationReadApi, payload);
  yield take([ACTION_TYPES.MARK_READ_SUCCESS, ACTION_TYPES.MARK_READ_FAILURE]);
  if (payload?.orgId) {
    yield call(fetchNotifications, { payload: { orgId: payload.orgId } });
  }
}

export function* markAllNotificationsRead({ payload = {} }) {
  yield fork(handleAPIRequest, api.markAllNotificationsReadApi, payload);
  yield take([ACTION_TYPES.MARK_ALL_READ_SUCCESS, ACTION_TYPES.MARK_ALL_READ_FAILURE]);
  if (payload?.orgId) {
    yield call(fetchNotifications, { payload: { orgId: payload.orgId } });
  }
}

export default function* notificationSaga() {
  yield all([
    takeLatest(ACTION_TYPES.FETCH_NOTIFICATIONS, fetchNotifications),
    takeLatest(ACTION_TYPES.MARK_READ, markNotificationRead),
    takeLatest(ACTION_TYPES.MARK_ALL_READ, markAllNotificationsRead)
  ]);
}