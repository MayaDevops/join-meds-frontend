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
      FETCH_ALL_JOBS: 'api/org-job/list',
      REMOVE_JOBS: 'api/org-job/delete/:jobId',
      FETCH_PROFILE_ORG: 'api/user-profile/org/details/:userId',
      FETCH_APPLIED_JOBS: 'api/job-applied/search?',  
      DOWNLOAD_RESUME: 'api/resume/:filename'
      
    },
    USER_LOGIN: {
      LOGIN: 'api/user/login'
    }
  }

};
