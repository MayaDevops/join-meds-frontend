import { WHITE_LIST_URL, WHITE_LIST_URL_WITH_PARAM } from "pages/common/constants";

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
