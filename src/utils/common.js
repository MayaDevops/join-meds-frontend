import { createSelector } from 'reselect';
import i18next from 'i18next';
import {
  BASE_PATH, MODULE_PATHS, STORAGE_KEYS, YES_NO
} from 'common/constants';
import { _ } from 'utils/lodash';
import { APPLICATION_STATUS, ROLE, USER_TYPE } from 'pages/common/constants';
import { getDataFromStorage } from './encryption';
import { hasPermission } from './user';

export const flattenObject = (obj, { parentKey = '', parentMapping = true } = {}) => {
  const result = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
        // Recursively flatten nested objects
        Object.assign(result, flattenObject(obj[key], { parentKey: newKey, parentMapping }));
      } else {
        // Assign the flattened key-value pair
        let value = obj[key];
        if (typeof obj[key] === 'boolean') {
          value = obj[key] ? 'Yes' : 'No';
        }
        result[parentMapping ? newKey : key] = value;
      }
    }
  }
  return result;
};
export const selectorWithKey = createSelector(
  [
    (state) => state,
    (_state, key) => key
  ],
  (items, category) => {
    return items[category];
  }
);
export const calculateAccordionIndex = (data) => data.reduce((acc, item, index) => {
  acc[item.id] = index;
  return acc;
}, {});

export const MaskAadhar = (data) => {
  const locale = i18next.language;
  if (data !== null && data !== '' && data !== undefined) {
    const splitString = data.slice(8);
    const tempChar = 'XXXX-XXXX-';
    return `${tempChar}${splitString}`;
  } return locale === 'en' ? 'Not Available' : 'വിവരങ്ങള്‍ ലഭ്യമല്ല';
};

export const FormatLookUp = (data) => {
  const locale = i18next.language;
  const { name = '', nameInLocal = '' } = data || {};
  if (locale === 'en') {
    return name;
  }

  return nameInLocal;
};
export const FormatWardLookUp = (data) => {
  const locale = i18next.language;
  const { name = '', nameInLocal = '', wardNo = '' } = data || {};
  if (locale === 'en') {
    return `${wardNo} - ${name}`;
  }
  return `${wardNo} - ${nameInLocal}`;
};
export const FormatLookUpType = (data) => {
  const locale = i18next.language;
  const { serviceName = '', serviceNameInLocal = '' } = data || {};
  if (locale === 'en') {
    return serviceName;
  }

  return serviceNameInLocal;
};
export const FormatLookUpSubType = (data) => {
  const locale = i18next.language;
  const { subTypeName = '', subTypeNameInLocal = '' } = data || {};
  if (locale === 'en') {
    return subTypeName;
  }

  return subTypeNameInLocal;
};
export const getProjectPaths = () => {
  const { VITE_PROJECT_URL } = import.meta.env;
  const projectPaths = {};

  Object.keys(MODULE_PATHS).forEach((key) => {
    projectPaths[key] = `${VITE_PROJECT_URL}/${BASE_PATH}/${MODULE_PATHS[key]}`;
  });

  return projectPaths;
};

export const boolToString = (data) => (data ? YES_NO.YES : YES_NO.NO);

function b64toBlob(b64Data, contentType = '', sliceSize = 512) {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i += 1) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  return new File(byteArrays, 'download', { type: contentType });
}

export const generateLocalURLFromBlob = (response, type = 'image/jpeg') => {
  try {
    const blob = b64toBlob(response, type);
    const url1 = window.URL.createObjectURL(blob);
    return {
      url: url1,
      size: blob.size,
      type,
      ext: type.split('/').length === 2 ? type.split('/')[1] : 'jpeg'
    };
  } catch (fileResponseError) {
    return {
      url: '', type: 'invalid/invalid', size: 0, ext: 'invalid'
    };
  }
};
export const getDashboardRoute = () => {
  const { userType } = getDataFromStorage(STORAGE_KEYS.USER_DETAILS, true);
  const { HOME } = getProjectPaths();
  return `${HOME}/${_.toLower(userType)}/dashboard`;
};
export const getServicesPageRoute = () => {
  const { userType } = getDataFromStorage(STORAGE_KEYS.USER_DETAILS, true);
  const { HOME } = getProjectPaths();
  if (userType === 'CITIZEN') {
    return `${HOME}/${_.toLower(userType)}/new-services`;
  } if (userType === 'EMPLOYEE') {
    return `${HOME}/${_.toLower(userType)}/services`;
  } if (userType === 'ORGANIZATION') {
    return `${HOME}/${_.toLower(userType)}/services`;
  } return null;
};
export const getSubjectTypePageRoute = () => {
  const { userType } = getDataFromStorage(STORAGE_KEYS.USER_DETAILS, true);
  const { PGR } = getProjectPaths();
  if (userType === 'ORGANIZATION') {
    return `${PGR}/citizen/subject-type`;
  }
  return `${PGR}/${_.toLower(userType)}/subject-type`;
};

export const getViolationTypePageRoute = () => {
  const { userType } = getDataFromStorage(STORAGE_KEYS.USER_DETAILS, true);
  const { PGR } = getProjectPaths();
  return `${PGR}/${_.toLower(userType)}/violation-type`;
};

export const routeRedirect = (url) => {
  window.location.href = `${window.location.origin}/${url}`;
};
export const routeRedirectReOpen = (url) => {
  window.location.href = `${window.location.origin}${url}`;
};
export const sortDropdownNames = (options, optionkey, locilizationkey) => {
  return options.sort(
    (a, b) => locilizationkey(a[optionkey]).localeCompare(locilizationkey(b[optionkey]))
  );
};

export const showSubmit = (status, code) => {
  const { userType } = getDataFromStorage(STORAGE_KEYS.USER_DETAILS, true) || {};
  if (userType === USER_TYPE.CITIZEN) {
    return (status === APPLICATION_STATUS.INITIATE
      || status === APPLICATION_STATUS.SEND_BACK_TO_CITIZEN);
  }
  if (userType === USER_TYPE.ORGANIZATION) {
    if (hasPermission(ROLE.HK_OPERATOR, code) || hasPermission(ROLE.INSTITUTION_OPERATOR, code)) {
      return (status === APPLICATION_STATUS.ORG_INITIATE);
    }
    if (hasPermission(ROLE.HK_VERIFIER, code) || (hasPermission(ROLE.INSTITUTION_VERIFIER, code))) {
      return (status === APPLICATION_STATUS.ORG_APPLIED);
    }
    if (hasPermission(ROLE.UNIT_ADMIN, code)) {
      // TODO: SEND_BACK_TO_CITIZEN need to remove after creating citizen account auto creation
      return (status === APPLICATION_STATUS.CSC_APPLY
        || status === APPLICATION_STATUS.SEND_BACK_TO_CITIZEN
      || status === APPLICATION_STATUS.UNDEFINED);
    }
  }
  if (userType === USER_TYPE.EMPLOYEE) {
    if (hasPermission(ROLE.OPERATOR, code)) {
      return (status === APPLICATION_STATUS.APPLIED
        || status === APPLICATION_STATUS.INITIATED
        || status === APPLICATION_STATUS.RETURNED);
    }
    if (hasPermission(ROLE.VERIFIER, code)) {
      return (status === APPLICATION_STATUS.INITIATED
        || status === APPLICATION_STATUS.APPLIED || status === APPLICATION_STATUS.RETURNED);
    }

    if (hasPermission(ROLE.APPROVER, code)) {
      return (status === APPLICATION_STATUS.VERIFIED);
    }
    if (hasPermission(ROLE.ENQUIRY_OFFICER, code)) {
      return (status === APPLICATION_STATUS.RECOMMENDED_FOR_ENQUIRY);
    }
    // TODO : Municipal Secretary , JD  need to add condition
  }
  return false;
};

export const nullCheck = (data, defaultValue) => {
  if (!_.isEmpty(data)) {
    return data;
  }
  return defaultValue;
};

export const getAuthorizedRoutes = (userType, routes = []) => {
  const authAt = localStorage.getItem(STORAGE_KEYS.AUTH_AT);
  const userDetails = getDataFromStorage(STORAGE_KEYS.USER_DETAILS, true) || [];
  if (!authAt) return [];
  return userType === userDetails?.userType ? routes : [];
};

export const getAuthAndCurrentDates = () => {
  const authAt = localStorage.getItem(STORAGE_KEYS.AUTH_AT);
  if (!authAt) return { authDate: null, currentDateOnly: null };

  const authenticationDate = new Date(authAt);
  const currentDate = new Date();

  const authDate = new Date(
    authenticationDate.getFullYear(),
    authenticationDate.getMonth(),
    authenticationDate.getDate()
  );

  const currentDateOnly = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );

  return { authDate, currentDateOnly };
};

export const scrollToDiv = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
