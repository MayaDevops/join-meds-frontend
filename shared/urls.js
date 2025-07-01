export const API_URL = {

  COMMON: {
    COUNTRY: '',

  },
  JOINT_MEDS: {
    ORGANIZATION: {
      CREATE_ORG: 'api/user/signup',
      CREATE_JOB: 'api/org-job/save/:userId',
      UPDATE_JOB: 'api/org-job/update/:jobId',
      FETCH_JOBS: 'api/org-job/list/:userId',
    },
    USER_LOGIN: {
      LOGIN: 'api/user/login'
    }
  }

};
