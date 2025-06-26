import LogRocket from 'logrocket';
import { getDataFromStorage } from 'utils/encryption';
import { DEVELOPER_SETTINGS, LOGGER_KEY, STORAGE_KEYS } from 'common/constants';

export const initiateLogger = () => {
  const { VITE_PROJECT_URL } = import.meta.env;
  const {
    userId, name, userName, userType, phoneNumber, email = '', whatsappNumber
  } = getDataFromStorage(STORAGE_KEYS.USER_DETAILS, true, {}) || {};
  if (VITE_PROJECT_URL === 'https://ksmart.lsgkerala.gov.in') {
    if (DEVELOPER_SETTINGS.ENABLE_LOGGER.RELEASE) {
      if (userId) { // Skipping Public and users without login
        LogRocket.init(LOGGER_KEY.RELEASE);
        LogRocket.identify(`${userType} - ${userName || name} - ${userId}`, {
          userId, name: userName || name, userType, phoneNumber, email, whatsappNumber
        });
      }
    }
  } else if (VITE_PROJECT_URL === 'https://dev.ksmart.live') {
    if (DEVELOPER_SETTINGS.ENABLE_LOGGER.DEV) {
      if (userId) { // Skipping Public and users without login
        LogRocket.init(LOGGER_KEY.DEV);
        LogRocket.identify(`${userType} - ${userName || name} - ${userId}`, {
          userId, name: userName || name, userType, phoneNumber, email, whatsappNumber
        });
      }
    }
  }
};
