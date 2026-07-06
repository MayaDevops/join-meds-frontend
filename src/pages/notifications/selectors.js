import { flow } from 'lodash';
import { STATE_REDUCER_KEY } from './constants';

const notificationState = (state) => state[STATE_REDUCER_KEY];

const list = (state) => state.list;
export const getNotifications = flow(notificationState, list);

const unreadCount = (state) => state.unreadCount;
export const getUnreadCount = flow(notificationState, unreadCount);