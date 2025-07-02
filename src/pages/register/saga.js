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
import { t } from 'pages/common/components';
import { routeRedirect } from 'utils/common';
import { fetchDashBoardInfo } from 'pages/dashboard/saga';
import { getDataFromStorage } from 'utils/encryption';
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
    // setDataToStorage(STORAGE_KEYS.USER_DETAILS, {
    //   userId: responsePayLoad?.userId
    // }, true);
    yield put(commonActions.setAlertToast({
      open: true,
      variant: 'success',
      message: 'Organization Details saved successfully',
    }));
    if (!_.isEmpty(responsePayLoad)) {
      yield put(sliceActions.setOrganizationRegisterDetails(responsePayLoad));
      yield put(commonActions.navigateTo({
        to: `/`,
        isSameModule: true
      }));
    }
  } else {
    yield put(commonActions.setAlertToast({
      open: true,
      variant: 'error',
      message: 'Organization Details save failed. Please try again',
    }));
  }
}

export function* createJobDetails({ payload = {} }) {
  yield fork(handleAPIRequest, api.createJobDetailsApi, payload);
  const { payload: { data: responsePayLoad = {} } = {}, type } = yield take([
    ACTION_TYPES.CREATE_JOB_DETAILS_SUCCESS,
    ACTION_TYPES.CREATE_JOB_DETAILS_FAILURE]);
  if (type === ACTION_TYPES.CREATE_JOB_DETAILS_SUCCESS) {
    // localStorage.removeItem('userDetails');
    yield put(commonActions.setAlertAction({
      open: true,
      variant: 'success',
      message: 'Job Details saved successfully',
      title: t('Job Details'),
      forwardActionText: t('Ok'),
      forwardAction: () => { routeRedirect(`ui/join-meds/user/dashboard`); },
    }));
    if (!_.isEmpty(responsePayLoad)) {
      yield put(sliceActions.setJobDetails(responsePayLoad));
      // yield put(commonActions.navigateTo({
      //   to: `/`,
      //   isSameModule: true
      // }));
    }
  } else {
     yield put(commonActions.setAlertAction({
      open: true,
      variant: 'error',
      message: 'Job Details saved failed.Please try again',
      title: t('Job Details'),
      forwardActionText: t('Ok'),
      // forwardAction: () => { routeRedirect('/'); },
    }));
  }
}

export function* updateJobDetails({ payload = {} }) {
  yield fork(handleAPIRequest, api.updateJobDetailsApi, payload);
  const { payload: { data: responsePayLoad = {} } = {}, type } = yield take([
    ACTION_TYPES.UPDATE_JOB_DETAILS_SUCCESS,
    ACTION_TYPES.UPDATE_JOB_DETAILS_FAILURE]);
  if (type === ACTION_TYPES.UPDATE_JOB_DETAILS_SUCCESS) {
    // localStorage.removeItem('userDetails');
    yield put(commonActions.setAlertAction({
      open: true,
      variant: 'success',
      message: 'Job Details updated successfully',
      title: t('Job Details'),
      forwardActionText: t('Ok'),
      forwardAction: () => { routeRedirect(`ui/join-meds/user/dashboard`); },
    }));
    if (!_.isEmpty(responsePayLoad)) {
      yield put(sliceActions.setJobDetails(responsePayLoad));
      // yield put(commonActions.navigateTo({
      //   to: `/`,
      //   isSameModule: true
      // }));
    }
  } else {
     yield put(commonActions.setAlertAction({
      open: true,
      variant: 'error',
      message: 'Job Details update failed.Please try again',
      title: t('Job Details'),
      forwardActionText: t('Ok'),
      // forwardAction: () => { routeRedirect(``); },
    }));
  }
}

export function* removeJobDetails({ payload = {} }) {
  yield fork(handleAPIRequest, api.removeJobDetailsApi, payload);
  const { id = '' } = getDataFromStorage(STORAGE_KEYS.OFFICE_DETAILS, true) || {};
  const { payload: { data: responsePayLoad = {} } = {}, type } = yield take([
    ACTION_TYPES.REMOVE_JOB_DETAILS_SUCCESS,
    ACTION_TYPES.REMOVE_JOB_DETAILS_FAILURE]);
  if (type === ACTION_TYPES.REMOVE_JOB_DETAILS_SUCCESS) {
    yield put(commonActions.setAlertAction({
      open: true,
      variant: 'success',
      message: 'Job Details removed successfully',
      title: t('Job Details'),
      forwardActionText: t('Ok'),
      forwardAction: () => { routeRedirect(`ui/join-meds/user/dashboard`); },
    }));
    if (!_.isEmpty(responsePayLoad)) {
      console.log(id,'1111111111111111sagaid')
      // yield* fetchDashBoardInfo({ userId:id });
    }
  } else {
      // yield* fetchDashBoardInfo({  userId:id });

     yield put(commonActions.setAlertAction({
      open: true,
      variant: 'error',
      message: 'Job Details update failed.Please try again',
      title: t('Job Details'),
      forwardActionText: t('Ok'),
      // forwardAction: () => { routeRedirect(``); },
    }));
  }
}

export function* fetchProfileInfo({ payload = {} }) {
  yield fork(handleAPIRequest, api.fetchProfileDetailsApi, payload);
  const { payload: { data: responsePayLoad = {} } = {}, type } = yield take([
    ACTION_TYPES.FETCH_PROFILE_DETAILS_SUCCESS,
    ACTION_TYPES.FETCH_PROFILE_DETAILS_FAILURE
  ]);
  if (type === ACTION_TYPES.FETCH_PROFILE_DETAILS_SUCCESS) {
    yield put(sliceActions.setProfileDetails( responsePayLoad));
  }
}




export default function* commonSaga() {
  yield all([
    takeLatest(ACTION_TYPES.FETCH_COUNTRY, fetchCountry),
    takeLatest(ACTION_TYPES.CREATE_ORGANIZATION_DETAILS, saveOrganizationDetails),
    takeLatest(ACTION_TYPES.CREATE_JOB_DETAILS, createJobDetails),
    takeLatest(ACTION_TYPES.UPDATE_JOB_DETAILS, updateJobDetails),
    takeLatest(ACTION_TYPES.REMOVE_JOB_DETAILS, removeJobDetails),
    takeLatest(ACTION_TYPES.FETCH_PROFILE_DETAILS, fetchProfileInfo),

  ]);
}
