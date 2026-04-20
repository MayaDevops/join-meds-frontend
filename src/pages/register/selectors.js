import { flow } from "lodash";
import { STATE_REDUCER_KEY } from "./constants";

const getCommonData = (state) => state[STATE_REDUCER_KEY];

const country = (state) => state.country;
export const getCountry = flow(getCommonData, country);

const organizationRegisterDetails = (state) =>
  state.organizationRegisterDetails;
export const getOrganizationRegisterDetails = flow(
  getCommonData,
  organizationRegisterDetails,
);

const organizationRegisterUpdateDetails = (state) =>
  state.organizationRegisterUpdateDetails;
export const getOrganizationRegisterUpdateDetails = flow(
  getCommonData,
  organizationRegisterUpdateDetails,
);

const profileDetails = (state) => state.profileDetails;
export const getProfileDetails = flow(getCommonData, profileDetails);

const allJobReports = (state) => state.allJobReports;
export const getAllJobReports = flow(getCommonData, allJobReports);
export const getAllJobReportsContent = flow(getCommonData, (state) => state.allJobReports?.content || []);
export const getAllJobReportsPagination = flow(getCommonData, (state) => ({
  totalElements: state.allJobReports?.totalElements || 0,
  totalPages: state.allJobReports?.totalPages || 0,
  number: state.allJobReports?.number || 0,
  size: state.allJobReports?.size || 10,
}));

const downloadResumeDetails = (state) => state?.downloadResumeDetails;
export const getDownloadResumeDetails = flow(
  getCommonData,
  downloadResumeDetails,
);

const userListReports = (state) => state.userListReports;
export const getUserListReports = flow(getCommonData, userListReports);
export const getUserListReportsContent = flow(getCommonData, (state) => state.userListReports?.content || []);
export const getUserListReportsPagination = flow(getCommonData, (state) => ({
  totalElements: state.userListReports?.totalElements || 0,
  totalPages: state.userListReports?.totalPages || 0,
  number: state.userListReports?.number || 0,
  size: state.userListReports?.size || 10,
}));
