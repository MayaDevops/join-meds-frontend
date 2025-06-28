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
      variant: 'alert',
      message: t('Invalid Login Credentials'),
      title: t('Login Details'),
      backwardActionText: t('close')
    }));
  }
}


export default function* loginSaga() {
  yield all([
    takeLatest(ACTION_TYPES.VERIFY_LOGIN, verifyPenDetails),
  ]);
}
