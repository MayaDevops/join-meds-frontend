import { flow } from 'lodash';
import { STATE_REDUCER_KEY } from './constants';

const getCommonData = (state) => state[STATE_REDUCER_KEY];

const country = (state) => state.country;
export const getCountry = flow(getCommonData, country);

const commonConfig = (state) => state.commonConfig;
export const getCommonConfigSelector = flow(getCommonData, commonConfig);

const layoutColumns = (state) => state?.layout.columns || {};
export const getLayoutColumns = flow(getCommonData, layoutColumns);

const alertToast = (state) => state?.alertToast;
export const getToastAction = flow(getCommonData, alertToast);


