export const API_URL = {

  COMMON: {
    COUNTRY: '',

  },
  JOINT_MEDS: {
    ORGANIZATION: {
      CREATE_ORG: 'api/user/signup',
      UPDATE_ORG: 'api/org/update/:id',
      FETCH_BY_ID: 'api/user-profile/org/details/:userId'
    },
    USER_LOGIN: {
      LOGIN: 'api/user/login'
    }
  }

};
