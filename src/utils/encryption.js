import { encryption } from '../common/utils/index';

const { VITE_SECRET } = import.meta.env;
const {
  setDataToStorage, getDataFromStorage, encrypt, decrypt
} = encryption.createEncryptionFunctions(VITE_SECRET);

export {
  setDataToStorage, getDataFromStorage, encrypt, decrypt
};
