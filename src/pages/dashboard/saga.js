// import { handleAPIRequest } from 'utils/http';
import {
  all
} from 'redux-saga/effects';
// import * as api from './api';
// import { ACTION_TYPES } from './actions';
// import { actions as sliceActions } from './slice';

// export function* fetchDashBoardInfo({ payload = {} }) {
//   yield fork(handleAPIRequest, api.fetchDashBoardInfoApi, payload);
//   const { payload: { data: responsePayLoad = {} } = {}, type } = yield take([
//     ACTION_TYPES.FETCH_DASHBOARD_INFO_SUCCESS,
//     ACTION_TYPES.FETCH_DASHBOARD_INFO_FAILURE
//   ]);
//   if (type === ACTION_TYPES.FETCH_DASHBOARD_INFO_SUCCESS) {
//     yield put(sliceActions.setDashBoardInfo({ value: responsePayLoad }));
//   }
// }
export default function* dashBoardServiceSaga() {
  yield all([
    // takeLatest(ACTION_TYPES.FETCH_DASHBOARD_INFO, fetchDashBoardInfo)
  ]);
}
