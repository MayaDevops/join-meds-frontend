import { STORAGE_KEYS, USER_TYPE } from 'common/constants';
import { _ } from 'utils/lodash';
import { getDataFromStorage } from './encryption';

export const hasRole = (role = '') => {
  const userRoles = getDataFromStorage(STORAGE_KEYS.USER_ROLES, true) || [];
  userRoles.some(({ roles = [] }) => roles.includes(role));
  return true;
};

export const hasPermission = (role = '', code = 'PWPW07') => {
  const userRoles = getDataFromStorage(STORAGE_KEYS.USER_ROLES, true) || [];
  const selectedRoles = _.filter(userRoles, { code });
  return selectedRoles.some(({ roles = [] }) => roles.includes(role));
};

export const routeRolePermissionCheck = (_path, roles = []) => {
  const { userType = USER_TYPE.CITIZEN } = getDataFromStorage(
    STORAGE_KEYS.USER_DETAILS,
    true
  ) || {};
  if (!_.isEmpty(roles)) {
    /**
     * TODO: need to remove this after adding current userType
     * as a role in Home module as added for CITIZEN
     *  */
    const currentUserType = [{
      id: userType,
      code: userType,
      roles: [userType]
    }];
    const userRoles = getDataFromStorage(STORAGE_KEYS.USER_ROLES, true) || [];
    return [...userRoles, ...currentUserType]
      .some(({ roles: currentRoles = [] }) => currentRoles.some((role) => roles.includes(role)));
  }
  return true;
};

export const roleFormatter = (data = [], userType = USER_TYPE.CITIZEN) => {
  switch (userType) {
    case USER_TYPE.CITIZEN:
      return [{ id: USER_TYPE.CITIZEN, code: USER_TYPE.CITIZEN, roles: [USER_TYPE.CITIZEN] }];
    case USER_TYPE.EMPLOYEE:
      return data.map(({ serviceCode: code, roles = [], officeId: id }) => ({ id, code, roles }));
    case USER_TYPE.ORGANIZATION:
      // FIXME: for now response is string for role, not array
      return data.map(({ role, organizationId: id }) => ({ id, code: id, roles: [role] }));
    default:
      return [];
  }
};
