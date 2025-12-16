import { actions as commonActions } from 'pages/common/slice';
import { RESET_STORE } from 'app/store';

export const logout = (dispatch, showMessage = false) => {
  if (!dispatch) return;

  dispatch(commonActions.setLoggingOut(true));

  localStorage.clear();
  sessionStorage.clear();

  dispatch(commonActions.navigateTo({ to: '/' }));

  if (showMessage) {
    dispatch(commonActions.setCustomToast({
      open: true,
      variant: 'info',
      message: 'Your session has expired. Please login again.',
      title: 'Session Expired'
    }));
  }

  setTimeout(() => {
    dispatch({ type: RESET_STORE });
  }, 1500);
};





