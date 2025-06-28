import { STORAGE_KEYS, WHITE_LIST_URL, WHITE_LIST_URL_WITH_PARAM } from "pages/common/constants";
import { getDataFromStorage } from "./encryption";

export const checkWhiteListUrlWithParam = (apiUrl) => {
  let hasvalue = WHITE_LIST_URL.includes(apiUrl) || false;
  WHITE_LIST_URL_WITH_PARAM.forEach((item) => {
    const urlString = item.split(/\/:|\?/)[0];
    if (apiUrl.includes(urlString)) {
      hasvalue = true;
    }
  });
  return hasvalue;
};

export const hasMenuPermission = (menuList = []) => {
  const { officeTypeId = '' } = getDataFromStorage(STORAGE_KEYS.OFFICE_DETAILS, true) || {};
  const userRoles = getDataFromStorage(STORAGE_KEYS.USER_ROLES, true) || [];
  const userRoleCodes = userRoles?.map((role) => role?.code);
  return menuList?.filter(
    (menu) => menu?.officeTypeId
      === officeTypeId && menu?.roles.some((role) => userRoleCodes.includes(role))
  );
};
