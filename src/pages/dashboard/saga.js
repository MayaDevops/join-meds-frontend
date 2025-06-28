import { handleAPIRequest } from 'utils/http';
import {
  all,
  fork,
  put,
  take,
  takeLatest
} from 'redux-saga/effects';
import * as api from './api';
import { ACTION_TYPES } from './actions';
import { actions as sliceActions } from './slice';

export function* fetchDashBoardInfo({ payload = {} }) {
  console.log(payload,'11111111111111111paysaga')
  yield fork(handleAPIRequest, api.fetchDashBoardInfoApi, payload);
  const { payload: { data: responsePayLoad = {} } = {}, type } = yield take([
    ACTION_TYPES.FETCH_DASHBOARD_INFO_SUCCESS,
    ACTION_TYPES.FETCH_DASHBOARD_INFO_FAILURE
  ]);
  if (type === ACTION_TYPES.FETCH_DASHBOARD_INFO_SUCCESS) {
    yield put(sliceActions.setDashBoardInfo({ value: responsePayLoad }));
  }
}

export default function* dashBoardServiceSaga() {
  yield all([
    takeLatest(ACTION_TYPES.FETCH_DASHBOARD_INFO, fetchDashBoardInfo)
  ]);
}
