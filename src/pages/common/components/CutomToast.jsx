import React, { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { actions as commonServicesSliceActions } from 'pages/common/slice';
import { getToastAction } from '../selectors';
import { CheckSvg } from 'assets';

const CustomToast = ({open = true,
    variant = 'default',
    message = ''}) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const toastAction = useSelector(getToastAction) || {};
console.log(toastAction,'111111111toastAction')
  // const {
  //   open = true,
  //   variant = 'default',
  //   message = ''
  // } = toastAction;

  const variantColors = {
    success: {
      bg: '#EBFFD8',
      text: 'text-green-900',
      border: 'border-green-600',
      icon: <CheckSvg />
    },
    error: {
      bg: '#FEE2E2',
      text: 'text-red-800',
      border: 'border-red-600',
      icon: '❌'
    },
    warning: {
      bg: '#FEF3C7',
      text: 'text-yellow-800',
      border: 'border-yellow-600',
      icon: '⚠️'
    },
    default: {
      bg: '#DBEAFE',
      text: 'text-blue-900',
      border: 'border-blue-600',
      icon: 'ℹ️'
    }
  };

  const { bg, text, border, icon } = variantColors[variant] || variantColors.default;

  useEffect(() => {
    if (open && message) {
      toast({
        duration: 2500,
        isClosable: true,
        position: 'top-right',
        render: () => (
          <div
            style={{ backgroundColor: bg }}
            className={`rounded-md border-l-4 ${border} shadow-md p-4 max-w-sm flex items-start space-x-4`}
          >
            <div className="text-xl mt-1">{icon}</div>
            <div className={`flex-1 ${text}`}>
              <p className="text-sm font-medium">{message}</p>
            </div>
          </div>
        )
      });

      // Clear toast state
      dispatch(commonServicesSliceActions.setAlertToast({}));
    }
  }, [open, toast, message, bg, text, border, icon, dispatch, variant]);

  return null;
};

export default CustomToast;
