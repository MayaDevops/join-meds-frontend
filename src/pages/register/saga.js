import {
  all, takeLatest, put,
  fork,
  take,
} from 'redux-saga/effects';
import { ACTION_TYPES } from './actions';
import { actions as sliceActions } from './slice';
import { handleAPIRequest } from 'utils/http';
import * as api from './api';
import { actions as commonActions } from 'pages/common/slice';
import { _ } from 'utils/lodash';
import { setDataToStorage } from 'utils/encryption';
import { STORAGE_KEYS } from 'pages/common/constants';

export function* fetchCountry() {
  yield put(sliceActions.setCountry());
}

export function* saveOrganizationDetails({ payload = {} }) {
  yield fork(handleAPIRequest, api.saveOrganizationDetailsApi, payload);
  const { payload: { data: responsePayLoad = {} } = {}, type } = yield take([
    ACTION_TYPES.CREATE_ORGANIZATION_DETAILS_SUCCESS,
    ACTION_TYPES.CREATE_ORGANIZATION_DETAILS_FAILURE]);
  if (type === ACTION_TYPES.CREATE_ORGANIZATION_DETAILS_SUCCESS) {
    setDataToStorage(STORAGE_KEYS.USER_DETAILS, {
      userId: responsePayLoad?.userId
    }, true);
    yield put(commonActions.setAlertToast({
      open: true,
      variant: 'success',
      message: 'Organization Details saved successfully',
    }));
    if (!_.isEmpty(responsePayLoad)) {
      yield put(sliceActions.setOrganizationRegisterDetails(responsePayLoad));
      yield put(commonActions.navigateTo({
        to: `/ui/join-meds/register/profile`,
        isSameModule: false
      }));
    }
  } else {
    yield put(commonActions.setAlertToast({
      open: true,
      variant: 'error',
      message: 'Organization Details saved successfully',
    }));
  }
}

export function* updateOrganizationDetails({ payload = {} }) {
  console.log(payload, '1111111111111payload')
  yield fork(handleAPIRequest, api.updateOrganizationDetailsApi, payload);
  const { payload: responsePayLoad = {}, type } = yield take([
    ACTION_TYPES.UPDATE_ORGANIZATION_DETAILS_SUCCESS,
    ACTION_TYPES.UPDATE_ORGANIZATION_DETAILS_FAILURE]);
  if (type === ACTION_TYPES.UPDATE_ORGANIZATION_DETAILS_SUCCESS) {
    // const { data: { id } = {} } = responsePayLoad;
    yield put(commonActions.setAlertToast({
      open: true,
      variant: 'success',
      message: 'Organization Details saved successfully',
    }));
    if (!_.isEmpty(responsePayLoad)) {
      yield put(sliceActions.setUpdateOrganizationRegisterDetails(responsePayLoad));
    }
    // if (id) {       
    //     yield put(commonActions.navigateTo({ to: `${BASE}/${NEW_COMPLAINT.EDIT.replace(':id', id)}` }));

    // }
  }
}



export default function* commonSaga() {
  yield all([
    takeLatest(ACTION_TYPES.FETCH_COUNTRY, fetchCountry),
    takeLatest(ACTION_TYPES.CREATE_ORGANIZATION_DETAILS, saveOrganizationDetails),
    takeLatest(ACTION_TYPES.UPDATE_ORGANIZATION_DETAILS, updateOrganizationDetails),

  ]);
}
