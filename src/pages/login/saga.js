import {
  all, takeLatest, put,
  fork,
  take,
} from 'redux-saga/effects';
import { ACTION_TYPES } from './actions';
import { handleAPIRequest } from 'utils/http';
import * as api from './api';
import { actions as commonActions } from 'pages/common/slice';
import { _ } from 'utils/lodash';
import { t } from 'pages/common/components';
import { setDataToStorage } from 'utils/encryption';
import { STORAGE_KEYS } from 'pages/common/constants';

export function* verifyPenDetails({ payload }) {
  yield fork(handleAPIRequest, api.verifyLoginDetailsApi, payload);
  const {
    payload: { data: responsePayLoad = {} } = {},
    type
  } = yield take(
    [ACTION_TYPES.VERIFY_LOGIN_SUCCESS,
    ACTION_TYPES.VERIFY_LOGIN_FAILURE]
  );
  if (type === ACTION_TYPES.VERIFY_LOGIN_SUCCESS) {
    setDataToStorage(STORAGE_KEYS.OFFICE_DETAILS, {
      id: responsePayLoad?.id,
      userName: responsePayLoad?.username,
      emailMobile: responsePayLoad?.emailMobile,
      userType: responsePayLoad?.userType,
      orgName: responsePayLoad?.orgName,
      inCorporationNo: responsePayLoad?.incorporationNo,
      officialEmail: responsePayLoad?.officialEmail,
      officePhone: responsePayLoad?.officePhone,
      createdAt: responsePayLoad?.createdAt

    }, true);
    yield put(commonActions.setAlertToast({
      open: true,
      variant: 'success',
      message: `${t('Login Successful')}`
    }));
    if (!_.isEmpty(responsePayLoad)) {
      yield put(commonActions.navigateTo({
        to: `/ui/join-meds/user/dashboard`,
        isSameModule: true
      }));
    }
  } else {
    yield put(commonActions.setAlertAction({
      open: true,
      variant: 'information',
      message: t('Invalid Login Credentials'),
      title: t('Login Details'),
      backwardActionText: t('Close')
    }));
  }
}

export function* forgotPassworddetails({ payload }) {
  yield fork(handleAPIRequest, api.forgotPasswordApi, payload);
  const { type
  } = yield take(
    [ACTION_TYPES.FORGOT_PASSWORD_SUCCESS,
    ACTION_TYPES.FORGOT_PASSWORD_FAILURE]
  );
  if (type === ACTION_TYPES.FORGOT_PASSWORD_SUCCESS) {
    yield put(commonActions.setAlertToast({
      open: true,
      variant: 'success',
      message: `${t('Password Reset Successfully')}`
    }));
    yield put(commonActions.navigateTo({
      to: `/ui/join-meds/login`,
      isSameModule: true
    }));
  } else {
    yield put(commonActions.setAlertAction({
      open: true,
      variant: 'information',
      message: t('Password Reset Failed'),
      title: t('Reset Password'),
      backwardActionText: t('Close')
    }));
  }
}


export default function* loginSaga() {
  yield all([
    takeLatest(ACTION_TYPES.VERIFY_LOGIN, verifyPenDetails),
    takeLatest(ACTION_TYPES.FORGOT_PASSWORD, forgotPassworddetails),

  ]);
}
