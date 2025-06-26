import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { ACTION_TYPES } from './actions';
import { STATE_REDUCER_KEY } from './constants';

const initialState = {
  country: {},
  alertToast: {
    open : false,
    variant : 'default',
    message : ''
  },
  navigate: {
    active: false,
    isSameModule: true,
    to: ''
  },
   layout: {
    breadCrumbList: [{ title: 'Dashboard', href: '/' }],
    formTitle: { title: '', variant: 'normal', toolbar: false },
    columns: {
      hideSidebar: false,
      sidebar: 'md:col-span-2',
      body: 'md:col-span-10',
      correction: false
    }
  }
};

const slice = createSlice({
  initialState,
  name: STATE_REDUCER_KEY,
  reducers: {
    setCountry: (state, { payload }) => {
      _.set(state, 'country', payload);
    },
    navigateTo: (state, { payload }) => {
      _.set(state, 'navigate', { active: true, ...payload });
    },
    disableNavigate: (state) => {
      _.set(state, 'navigate.active', false);
    },
    setLayoutColumns: (state, { payload = {} }) => {
      _.set(state, 'layout.columns', { ...state.layout.columns, ...payload });
    },
    setAlertToast: (state, { payload = null }) => {
      console.log(payload,'1111111111111111')
      _.set(state, 'alertToast', payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ACTION_TYPES.FETCH_COUNTRY_SUCCESS, (state, { payload }) => {
        _.set(state, 'country', payload);
      })
  }
});
export const { actions, reducer } = slice;
