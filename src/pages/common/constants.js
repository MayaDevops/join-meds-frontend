import { API_URL } from "../../../shared/urls";

export const STATE_REDUCER_KEY = 'common';

export const REQUEST_METHOD = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
  MULTIPART: 'MULTIPART'
};

export const CONTENT_TYPE = {
  APPLICATION_JSON: 'application/json',
  MULTIPART_FORM_DATA: 'multipart/form-data'
};

export const HTTP_HEADERS = {
  'Content-Type': CONTENT_TYPE.APPLICATION_JSON,
  Accept: CONTENT_TYPE.APPLICATION_JSON
};

export const MULTIPART_HEADERS = {
  'Content-Type': CONTENT_TYPE.MULTIPART_FORM_DATA
};

export const STATE = {
  id: 502032,
  code: 'KL',
  name: 'Kerala'
};

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'mid-day-meal-token',
  USER_DETAILS: 'user-details',
  USER_ROLES: 'roles',
  OFFICE_ID: 'office-id',
  SELECTED_SCHOOL_ID: 'selected-school-id',
  SELECTED_DISTRICT_ID: 'selected-district-id',
  SELECTED_DETAILS: 'selected-details',
  PEN_NO: 'pen-no',
  AUTH_AT: 'AUTH_AT',
  OFFICE_CODE: 'officeCode',
  OFFICE_DETAILS: 'office-details',
  TOKEN: 'token'
};

export const REQUEST_STATUS = {
  PROGRESS: 'PROGRESS',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export const BASE_PATH = 'ui';
export const MODULE_PATHS = 'joint-meds';

export const WHITE_LIST_URL = [
  API_URL.JOINT_MEDS.ORGANIZATION.CREATE_ORG,
  API_URL.JOINT_MEDS.ORGANIZATION.UPDATE_ORG

];

export const WHITE_LIST_URL_WITH_PARAM = [];

export const ROLE = {
  VERIFIER: 'VERIFIER',
  OPERATOR: 'OPERATOR',
  OWNER: 'OWNER',
  APPROVER: 'APPROVER',
  ROUTE_USER: 'ROUTE_USER',
  LICENSEE: 'LICENSEE',
  CITIZEN: 'CITIZEN',
  HK_VERIFIER: 'HK_VERIFIER',
  HK_OPERATOR: 'HK_OPERATOR',
  UNIT_ADMIN: 'UNIT_ADMIN',
  INSTITUTION_OPERATOR: 'INSTITUTION_OPERATOR',
  INSTITUTION_VERIFIER: 'INSTITUTION_VERIFIER',
  ENQUIRY_OFFICER: 'ENQUIRY_OFFICER',
  AUTHORIZER: 'AUTHORIZER',
  ADMINISTRATOR: 'ADMINISTRATOR',
  HEADMASTER: 'HM'
};

export const DATE_FORMAT = {
  DATE_TIME_GMT: 'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ',
  DATE_YYYYMMDD: 'YYYY-MM-DD',
  DATE_LOCAL: 'DD-MM-YYYY',
  TIME_LOCAL: 'HH:mm:ss',
  DATE_TIME: 'DD-MM-YYYY hh:mm:ss'
};