import { flow } from 'lodash';
import { STATE_REDUCER_KEY } from './constants';

const commonServicesDetails = (state) => state[STATE_REDUCER_KEY];

const dashBoardInfo = (state) => state.dashBoardInfo;
export const getDashBoardInfo = flow(commonServicesDetails, dashBoardInfo);
