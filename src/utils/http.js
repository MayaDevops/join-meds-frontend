/* eslint-disable no-unused-vars */
import { createAction } from '@reduxjs/toolkit';
import {
  deleteRequest, getRequest, patchRequest, postRequest, putRequest
} from 'app/axios';

import { _ } from 'utils/lodash';
import { call, put, select } from 'redux-saga/effects';
import { actions as commonActions } from 'pages/common/slice';
import { t } from 'pages/common/components';
import { HTTP_HEADERS, REQUEST_METHOD, REQUEST_STATUS, STATE, STORAGE_KEYS } from 'pages/common/constants';
import { ApiStatus } from 'model/ApiStatus';
import { getCommonConfigSelector } from 'pages/common/selectors';
import { checkWhiteListUrlWithParam } from './helper';

// const { errorTost } = Toast;

export const baseApiURL = import.meta.env.VITE_API_URL;
const apiStatus = new ApiStatus();

const getApiMethod = (method) => {
  switch (method) {
    case REQUEST_METHOD.DELETE:
      return deleteRequest;
    case REQUEST_METHOD.PUT:
      return putRequest;
    case REQUEST_METHOD.PATCH:
      return patchRequest;
    case REQUEST_METHOD.POST:
      return postRequest;
    case REQUEST_METHOD.MULTIPART:
      return postRequest;
    default:
      return getRequest;
  }
};

const getRequestParams = ({
  url,
  data: requestData = {},
  params: requestParams = {},
  method,
  // commonConfig,
  customHeaders: tempHeaders = {},
  bearerToken
}) => {
  let params = {};
  let data = {};
  const headers = { ...HTTP_HEADERS };
  if (method === REQUEST_METHOD.MULTIPART) {
    _.set(headers, 'Content-Type', 'multipart/form-data');
  }
  if (method === REQUEST_METHOD.POST) {
    _.set(headers, 'Content-Type', 'application/json');
  }
  if (method === REQUEST_METHOD.DELETE || method === REQUEST_METHOD.GET) {
    params = { ...requestData, ...requestParams };
    data = {};
  } else {
    params = requestParams;
    data = requestData;
  }
  const baseURL = 'http://joinmeds.in:8082';
  // import.meta.env.VITE_API_URL;

  let authHeaders = {};
  // TODO: Add Logic for fetching bearerToken
  if (bearerToken) {
    authHeaders = { Authorization: `Bearer ${bearerToken}` };
  }

  if (url === 'TEST') {
    // TODO: modify headers , baseURL, authHeaders , etc... based on url
  }

  const customHeaders = {
    'X-STATE-CODE': STATE.code.toLowerCase(),
    // 'X-LANGUAGE': commonConfig.locale,
    ...tempHeaders
  };

  return {
    config: {
      headers: {
        ...headers,
        ...authHeaders,
        ...customHeaders
      },
      params
    },
    baseURL,
    data,
    api: getApiMethod(method)
  };
};

function* invokeApi(method, url, payload) {
  const {
    types = ['REQUEST', 'SUCCESS', 'FAILURE'],
    data: payloadData,
    params = {},
    isDocument = false,
    headers
  } = payload;

  const requestAction = createAction(types[0]);
  const successAction = createAction(types[1]);
  const failureAction = createAction(types[2]);

  const commonConfig = yield select(getCommonConfigSelector);
  const bearerToken = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);

  if (_.isEmpty(bearerToken) && (!checkWhiteListUrlWithParam(url))) {
    apiStatus.tokenExpired = true;
    // const logoutAction = () => {
    //   store.dispatch(logoutUser());
    // };
    // yield put(commonServicesSliceActions.setLoader(false));
    yield put(commonActions.setAlertToast({
      open: true,
      variant: 'error',
      title: t('yourSessionExpiredInactivity'),
      message: t('timedOutDueInactivityLongTimeDontWorry'),
    }));
    return { response: {}, error: {} };
  }

  apiStatus.tokenExpired = false;

  const {
    api, config, baseURL, data
  } = getRequestParams({
    url,
    data: payloadData,
    params,
    method,
    commonConfig,
    customHeaders: headers,
    bearerToken
  });
  if (isDocument) {
    _.set(config, 'responseType', 'blob');
  }
  
  yield put(requestAction({ isLoading: true, status: REQUEST_STATUS.PROGRESS }));
  const apiResponse = yield call(api, url, { config, baseURL, data });
  const { data: response, error } = apiResponse;
  if (error) {
    yield put(failureAction({ error, isLoading: false, status: REQUEST_STATUS.FAILED }));
    const {
      code,
      // title = t('kSmartAlert'),
      // message = 'Please try again after some time.',
      response: {
        data:
        // customErrorResponse,
        status
      } = {}
    } = error;
    // let description = _.isObject(customErrorResponse)
    // ? customErrorResponse.error || message
    // : customErrorResponse || message;
    if (status === 400) {
      // description = customErrorResponse.message || JSON.stringify(customErrorResponse);
    } else if (status === 401) {
      // HACK: need to implement RefreshToken
      // yield put(validateToken());
      // description = customErrorResponse.message;
    } else if (status === 404) {
      // description = customErrorResponse.message;
    }

    if (code === 'ERR_NETWORK') {
      // description = t('youAreNotConnectedToInternet');
    }

    // const errorMessage = { title: title || t(code) || 'Error Occurred', description };
    // TODO: handle logout based on Invalid token  , token expired
    // yield call(errorTost, { id: 'ERROR_PRIMARY', ...errorMessage });
  } else if (_.has(response, 'error')) {
    const responsePayLoad = _.has(response, 'payload') ? { ...response, isWaring: true } : { data: response };
    yield put(
      failureAction({
        ...responsePayLoad,
        isLoading: false,
        status: REQUEST_STATUS.FAILED
      })
    );
    // yield put(commonServicesSliceActions.setAlertAction({
    //   open: true,
    //   variant: 'error',
    //   ...response?.error,
    //   // message: error?.message,
    //   title: t('loginDetails'),
    //   backwardActionText: t('close')
    // }));
    // yield call(errorTost,
    // { id: 'ERROR_SECONDARY', title: 'CUSTOM_ERROR', message: JSON.stringify(customError) });
  } else {
    let responsePayLoad = {};
    if (isDocument) {
      try {
        const { type = 'image/jpeg', size } = response;
        const url1 = window.URL.createObjectURL(response);
        responsePayLoad = {
          data: {
            url: url1,
            type,
            size,
            ext: type.split('/').length === 2 ? type.split('/')[1] : 'jpeg'
          }
        };
      } catch (fileResponseError) {
        responsePayLoad = {
          data: {
            url: '',
            type: 'invalid/invalid',
            size: 0,
            ext: 'invalid'
          }
        };
        // yield call(errorTost, {
        //   id: 'ERROR_SECONDARY',
        //   title: 'FILE_ERROR',
        //   message: JSON.stringify(fileResponseError)
        // });
      }
    } else {
      responsePayLoad = _.has(response, 'payload')
        ? {
          data: response.payload,
          message: response.message,
          restData: response
        }
        : { data: response };
    }
    yield put(
      successAction({
        ...responsePayLoad,
        isLoading: false,
        status: REQUEST_STATUS.SUCCESS
      })
    );
  }

  return { response, error };
}


export function* handleAPIRequest(apiFn, ...rest) {
  const { method, url, payload } = apiFn(...rest);
  try {
    if (!apiStatus.tokenExpired) {
      return yield call(invokeApi, method, url, payload);
    }
    apiStatus.dataArray = [...apiStatus.dataArray, yield call(invokeApi, method, url, payload)];
  } catch (error) {
    apiStatus.dataArray = [...apiStatus.dataArray, yield call(invokeApi, method, url, payload)];

    console.error(error);
  }
}

