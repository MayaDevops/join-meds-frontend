import { createSlice } from '@reduxjs/toolkit';
import { _ } from 'utils/lodash';
import { STATE_REDUCER_KEY } from './constants';

const initialState = {
  dashBoardInfo: {},
  dashBoardAllInfo: {}

};
const slice = createSlice({
  initialState,
  name: STATE_REDUCER_KEY,
  reducers: {
    setDashBoardInfo: (state, { payload }) => {
      _.set(state, 'dashBoardInfo', payload.value);
    },
    setAdminDashBoardInfo: (state, { payload }) => {
      _.set(state, 'dashBoardAllInfo', payload.value);
    }
  }
});

export const { actions, reducer } = slice;
