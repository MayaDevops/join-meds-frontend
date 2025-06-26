import { createSelector } from 'reselect';
import i18next from 'i18next';
import {
  BASE_PATH, MODULE_PATHS,
  STORAGE_KEYS
} from 'pages/common/constants';
import { _ } from 'utils/lodash';
import { getDataFromStorage } from './encryption';

export const flattenObject = (obj, { parentKey = '', parentMapping = true } = {}) => {
  const result = {};
   
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


export const nullCheck = (data, defaultValue) => {
  if (!_.isEmpty(data)) {
    return data;
  }
  return defaultValue;
};





export const scrollToDiv = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
