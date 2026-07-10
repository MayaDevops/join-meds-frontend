export const API_URL = {
  COMMON: {
    COUNTRY: "",
  },
  JOINT_MEDS: {
    ORGANIZATION: {
      CREATE_ORG: "api/user/signup",
      CREATE_JOB: "api/org-job/save/:userId",
      UPDATE_JOB: "api/org-job/update/:jobId",
      FETCH_JOBS: "api/org-job/list/:userId",
      FETCH_ALL_JOBS: "api/org-job/list",
      REMOVE_JOBS: "api/org-job/delete/:jobId",
      FETCH_PROFILE_ORG: "api/user-profile/org/details/:userId",
      FETCH_APPLIED_JOBS: "api/job-applied/search?",
      DOWNLOAD_RESUME: "api/resume/:filename",
      FETCH_ALL_USERS: "api/user-details/all",
      FETCH_ALL_ORGS: "api/org/all",
    },
    USER_LOGIN: {
      LOGIN: "api/org/login",
      FORGOT_PASSWORD: "api/user/reset-password",
    },
    NOTIFICATION: {
      FETCH: "api/notifications/org/:orgId",
      MARK_READ: "api/notifications/:id/read",
      MARK_ALL_READ: "api/notifications/org/:orgId/read-all",
    },
  },
};
