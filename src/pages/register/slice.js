import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { ACTION_TYPES, downloadResume } from './actions';
import { STATE_REDUCER_KEY } from './constants';
import { downloadResumeDetails } from './saga';

const initialState = {
  country: {},
  organizationRegisterDetails: {},
  jobDetails: {},
  profileDetails: {},
  allJobReports: {},
  downloadResumeDetails: {}
};

const slice = createSlice({
  initialState,
  name: STATE_REDUCER_KEY,
  reducers: {
    clearAll: () => initialState,
    setOrganizationRegisterDetails: (state, { payload }) => {
      _.set(state, 'organizationRegisterDetails', payload);
    },
    setJobDetails: (state, { payload }) => {
      _.set(state, 'jobDetails', payload);
    },
    setProfileDetails: (state, { payload }) => {
      _.set(state, 'profileDetails', payload);
    },
    setAllJobsReportDetails: (state, { payload }) => {
      _.set(state, 'allJobReports', payload);
    },
    setDownloadResume: (state, { payload }) => {
      _.set(state, 'downloadResumeDetails', payload);
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
