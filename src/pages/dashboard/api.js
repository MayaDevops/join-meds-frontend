import { REQUEST_METHOD } from "pages/common/constants";
import { API_URL } from "../../../shared/urls";
import { ACTION_TYPES } from "./actions";


export const fetchDashBoardInfoApi = (data) => {
  return {
    url: API_URL.JOINT_MEDS.ORGANIZATION.FETCH_JOBS.replace(':userId', data?.userId),
    method: REQUEST_METHOD.GET,
    payload: {
      types: [
        ACTION_TYPES.FETCH_DASHBOARD_INFO_REQUEST,
        ACTION_TYPES.FETCH_DASHBOARD_INFO_SUCCESS,
        ACTION_TYPES.FETCH_DASHBOARD_INFO_FAILURE
      ]
    }
  };
};
