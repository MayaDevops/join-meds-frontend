import { flow } from 'lodash';
import { STATE_REDUCER_KEY } from './constants';

const getCommonData = (state) => state[STATE_REDUCER_KEY];

const country = (state) => state.country;
export const getCountry = flow(getCommonData, country);

const organizationRegisterDetails = (state) => state.organizationRegisterDetails;
export const getOrganizationRegisterDetails = flow(getCommonData, organizationRegisterDetails);

const organizationRegisterUpdateDetails = (state) => state.organizationRegisterUpdateDetails;
export const getOrganizationRegisterUpdateDetails = flow(getCommonData, organizationRegisterUpdateDetails);

const profileDetails = (state) => state.profileDetails;
export const getProfileDetails = flow(getCommonData, profileDetails);

