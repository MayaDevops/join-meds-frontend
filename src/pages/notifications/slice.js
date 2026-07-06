import { createSlice } from '@reduxjs/toolkit';
import { _ } from 'utils/lodash';
import { STATE_REDUCER_KEY } from './constants';

const initialState = {
  list: [],
  unreadCount: 0
};

const slice = createSlice({
  initialState,
  name: STATE_REDUCER_KEY,
  reducers: {
    setNotifications: (state, { payload }) => {
      _.set(state, 'list', payload?.notifications || []);
      _.set(state, 'unreadCount', payload?.unreadCount || 0);
    },
    clearNotifications: (state) => {
      _.set(state, 'list', []);
      _.set(state, 'unreadCount', 0);
    }
  }
});

export const { actions, reducer } = slice;