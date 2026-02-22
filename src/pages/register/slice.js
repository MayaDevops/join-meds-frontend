import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { ACTION_TYPES } from "./actions";
import { STATE_REDUCER_KEY } from "./constants";

const initialState = {
  country: {},
  organizationRegisterDetails: {},
  jobDetails: {},
  profileDetails: {},
  allJobReports: {},
  downloadResumeDetails: {},
  userListReports: [],
};

const slice = createSlice({
  initialState,
  name: STATE_REDUCER_KEY,
  reducers: {
    clearAll: () => initialState,
    setOrganizationRegisterDetails: (state, { payload }) => {
      _.set(state, "organizationRegisterDetails", payload);
    },
    setJobDetails: (state, { payload }) => {
      _.set(state, "jobDetails", payload);
    },
    setProfileDetails: (state, { payload }) => {
      _.set(state, "profileDetails", payload);
    },
    setAllJobsReportDetails: (state, { payload }) => {
      _.set(state, "allJobReports", payload);
    },
    setDownloadResume: (state, { payload }) => {
      _.set(state, "downloadResumeDetails", payload);
    },
    setUserListReports: (state, { payload }) => {
      _.set(state, "userListReports", payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      ACTION_TYPES.FETCH_COUNTRY_SUCCESS,
      (state, { payload }) => {
        _.set(state, "country", payload);
      },
    );
  },
});
export const { actions, reducer } = slice;
