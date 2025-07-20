

import { ACTION_TYPES } from './actions';
import { API_URL } from '../../../shared/urls';
import { MULTIPART_HEADERS, REQUEST_METHOD } from 'pages/common/constants';


export const fetchCountryApi = () => {
  return {
    url: 'country',
    method: REQUEST_METHOD.GET,
    payload: {
      types: [
        ACTION_TYPES.FETCH_COUNTRY_REQUEST,
        ACTION_TYPES.FETCH_COUNTRY_SUCCESS,
        ACTION_TYPES.FETCH_COUNTRY_FAILURE
      ]
    }
  };
};

export const saveOrganizationDetailsApi = (data) => {
  return {
    url: API_URL.JOINT_MEDS.ORGANIZATION.CREATE_ORG,
    method: REQUEST_METHOD.POST,
    payload: {
      types: [
        ACTION_TYPES.CREATE_ORGANIZATION_DETAILS_REQUEST,
        ACTION_TYPES.CREATE_ORGANIZATION_DETAILS_SUCCESS,
        ACTION_TYPES.CREATE_ORGANIZATION_DETAILS_FAILURE
      ],
      data
    }
  };
};

export const createJobDetailsApi = (data) => {
  return {
    url: API_URL.JOINT_MEDS.ORGANIZATION.CREATE_JOB.replace(':userId', data?.userId),
    method: REQUEST_METHOD.POST,
    payload: {
      types: [
        ACTION_TYPES.CREATE_JOB_DETAILS_REQUEST,
        ACTION_TYPES.CREATE_JOB_DETAILS_SUCCESS,
        ACTION_TYPES.CREATE_JOB_DETAILS_FAILURE
      ],
      data
    }
  };
};

export const updateJobDetailsApi = (data) => {
  return {
    url: API_URL.JOINT_MEDS.ORGANIZATION.UPDATE_JOB.replace(':jobId', data?.jobId),
    method: REQUEST_METHOD.PUT,
    payload: {
      types: [
        ACTION_TYPES.UPDATE_JOB_DETAILS_REQUEST,
        ACTION_TYPES.UPDATE_JOB_DETAILS_SUCCESS,
        ACTION_TYPES.UPDATE_JOB_DETAILS_FAILURE
      ],
      data
    }
  };
};

export const removeJobDetailsApi = (data) => {
  return {
    url: API_URL.JOINT_MEDS.ORGANIZATION.REMOVE_JOBS.replace(':jobId', data?.jobId),
    method: REQUEST_METHOD.DELETE,
    payload: {
      types: [
        ACTION_TYPES.REMOVE_JOB_DETAILS_REQUEST,
        ACTION_TYPES.REMOVE_JOB_DETAILS_SUCCESS,
        ACTION_TYPES.REMOVE_JOB_DETAILS_FAILURE
      ],
      data
    }
  };
};

export const fetchProfileDetailsApi = (data) => {
  return {
    url: API_URL.JOINT_MEDS.ORGANIZATION.FETCH_PROFILE_ORG.replace(':userId', data?.userId),
    method: REQUEST_METHOD.GET,
    payload: {
      types: [
        ACTION_TYPES.FETCH_PROFILE_DETAILS_REQUEST,
        ACTION_TYPES.FETCH_PROFILE_DETAILS_SUCCESS,
        ACTION_TYPES.FETCH_PROFILE_DETAILS_FAILURE
      ]
    }
  };
};

export const fetchReportAppliedJobsDetailsApi = (data) => {
  return {
    url: API_URL.JOINT_MEDS.ORGANIZATION.FETCH_APPLIED_JOBS,
    method: REQUEST_METHOD.GET,
    payload: {
      types: [
        ACTION_TYPES.FETCH_REPORT_APPLIED_REQUEST,
        ACTION_TYPES.FETCH_REPORT_APPLIED_SUCCESS,
        ACTION_TYPES.FETCH_REPORT_APPLIED_FAILURE
      ],
       params: {
        jobId: data?.jobId,
        orgId: data?.orgId,
        id: data?.id
      }
    }
  };
};

export const downloadResumeApi = (data) => {
  return {
    url: API_URL.JOINT_MEDS.ORGANIZATION.DOWNLOAD_RESUME.replace(':filename', data?.filename),
    method: REQUEST_METHOD.GET,
    payload: {
      types: [
        ACTION_TYPES.DOWNLAOD_RESUME_REQUEST,
        ACTION_TYPES.DOWNLAOD_RESUME_SUCCESS,
        ACTION_TYPES.DOWNLAOD_RESUME_FAILURE
      ],
      config: { responseType: 'blob' },
      headers: MULTIPART_HEADERS
    }
  };
};