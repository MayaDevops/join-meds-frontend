import { utils } from 'common/components';

const { VITE_SECRET } = import.meta.env;
const { encryption } = utils;
const {
  setDataToStorage, getDataFromStorage, encrypt, decrypt
} = encryption.createEncryptionFunctions(VITE_SECRET);

export {
  setDataToStorage, getDataFromStorage, encrypt, decrypt
};
