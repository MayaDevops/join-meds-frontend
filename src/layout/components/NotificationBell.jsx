import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BellIcon } from 'assets';
import { STORAGE_KEYS } from 'pages/common/constants';
import { getDataFromStorage } from 'utils/encryption';
import {
  fetchNotifications,
  markNotificationRead,
  markAllNotificationsRead
} from 'pages/notifications/actions';
import { getNotifications, getUnreadCount } from 'pages/notifications/selectors';

const POLL_INTERVAL_MS = 30000;

const timeAgo = (value) => {
  if (!value) return '';
  const then = new Date(value).getTime();
  if (Number.isNaN(then)) return '';
  const diff = Math.max(0, Date.now() - then);
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'Just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
};

function NotificationBell() {
  const dispatch = useDispatch();
  const notifications = useSelector(getNotifications) || [];
  const unreadCount = useSelector(getUnreadCount) || 0;

  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const { id: orgId = '' } =
    getDataFromStorage(STORAGE_KEYS.OFFICE_DETAILS, true) || {};

  // Initial fetch + polling.
  useEffect(() => {
    if (!orgId) return undefined;
    dispatch(fetchNotifications({ orgId }));
    const timer = setInterval(() => {
      dispatch(fetchNotifications({ orgId }));
    }, POLL_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [dispatch, orgId]);

  // Close on outside click.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMarkAllRead = () => {
    if (orgId && unreadCount > 0) {
      dispatch(markAllNotificationsRead({ orgId }));
    }
  };

  const handleItemClick = (item) => {
    if (item && !item.read) {
      dispatch(markNotificationRead({ id: item.id, orgId }));
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="relative flex items-center justify-center cursor-pointer p-1"
        aria-label="Notifications"
      >
        <BellIcon />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold leading-none text-white">
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-80 max-w-[90vw] overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5">
          <div className="flex items-center justify-between border-b px-4 py-2">
            <span className="text-sm font-semibold text-[#003461]">
              Notifications
            </span>
            {unreadCount > 0 && (
              <button
                type="button"
                onClick={handleMarkAllRead}
                className="text-xs text-[#00A4E1] hover:underline cursor-pointer"
              >
                Mark all as read
              </button>
            )}
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="px-4 py-6 text-center text-sm text-gray-400">
                No notifications yet
              </div>
            ) : (
              notifications.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleItemClick(item)}
                  className={`flex w-full flex-col items-start gap-1 border-b px-4 py-3 text-left hover:bg-gray-50 cursor-pointer ${
                    item.read ? 'bg-white' : 'bg-blue-50'
                  }`}
                >
                  <span className="text-sm text-[#003461]">{item.message}</span>
                  <span className="text-[11px] text-gray-400">
                    {timeAgo(item.createdAt)}
                  </span>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationBell;