import CryptoJS from 'crypto-js';

export const createEncryptionFunctions = (SECRET) => {
  const encryptData = (data, key) => {
    return CryptoJS.AES.encrypt(data, key).toString();
  };

  const bytes = (data, key) => CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8);

  const encrypt = (data, isObj) => encryptData(isObj ? JSON.stringify(data) : data, SECRET);
  const decrypt = (data, isObj) => (isObj ? JSON.parse(bytes(data, SECRET)) : bytes(data, SECRET));

  const setDataToStorage = (key, data, isObj) => {
    try {
      localStorage.setItem(key, encrypt(data, isObj));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Encryption failed for key ${key} , ${error}`);
    }
  };

  const getDataFromStorage = (key, isObj, defaultValue) => {
    const data = localStorage.getItem(key);
    try {
      return data ? decrypt(data, isObj) : data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`Decryption failed for '${key}' , ${error}`);

      if (defaultValue) {
        return defaultValue;
      }
      return undefined;
    }
  };

  return {
    setDataToStorage,
    getDataFromStorage,
    encrypt,
    decrypt
  };
};
